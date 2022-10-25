using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPOLEWeb.Common
{
    public class ItemMgr
    {
        /// <summary>
        /// some item info saved in list which need to delete
        /// </summary>
        private static List<Item> needDeleteItemList = new List<Item>();
        /// <summary>
        /// some item info saved to skip item updating event 
        /// </summary>
        private static List<Item> skipUpdatingItemList = new List<Item>();
        /// <summary>
        /// some item info need to delay delete
        /// </summary>
        private static List<DelayedItem> delayedItemsList = new List<DelayedItem>();
        /// <summary>
        /// thread to delete file
        /// </summary>
        private static System.Threading.Thread delayedThread = null;
        private static readonly object itemLock = new object();
        private static CLog theLog = CLog.GetLogger("ItemMgr");

        private class Item
        {
            public Guid listId;
            public int itemId;
        }
       
        public static void AddSkipUpdatingItem(Guid listId, int itemId)
        {
            lock (itemLock)
            {
                for (int i = 0; i < skipUpdatingItemList.Count; i++)
                {
                    if (skipUpdatingItemList[i].listId == listId && skipUpdatingItemList[i].itemId == itemId)
                    {
                        // if the item is in list,we wont add
                        return;
                    }
                }
                Item needDeleteItem = new Item
                {
                    listId = listId,
                    itemId = itemId
                };
                skipUpdatingItemList.Add(needDeleteItem);
            }
        }
        public static bool CheckSkipUpdatingItemExist(Guid listId, int itemId)
        {
            lock (itemLock)
            {
                for (int i = 0; i < skipUpdatingItemList.Count; i++)
                {
                    if (skipUpdatingItemList[i].listId == listId && skipUpdatingItemList[i].itemId == itemId)
                    {
                       //if this item exist,we skip itemupdating event,otherwise in modern page,
                       //the updating event sometimes will popup deny info before we delet the item,it may let user confuse
                        return true;
                    }
                }
            }
            return false;
        }
        public static void RemoveSkipUpdatingItem(Guid listId, int itemId)
        {
            lock (itemLock)
            {
                for (int i = 0; i < skipUpdatingItemList.Count; i++)
                {
                    if (skipUpdatingItemList[i].listId == listId && skipUpdatingItemList[i].itemId == itemId)
                    {
                        skipUpdatingItemList.RemoveAt(i);
                        return;
                    }
                }
            }
        }
        /// <summary>
        /// add item info which is need to delete
        /// </summary>
        /// <param name="listId">list id of item</param>
        /// <param name="itemId">item id of item</param>
        public static void AddRequiredDeleteItem(Guid listId, int itemId)
        {
            lock (itemLock)
            {
                for (int i = 0; i < needDeleteItemList.Count; i++)
                {
                    if (needDeleteItemList[i].listId == listId && needDeleteItemList[i].itemId == itemId)
                    {
                        // if the item is in list,we wont  add
                        return;
                    }
                }
                Item needDeleteItem = new Item
                {
                    listId = listId,
                    itemId = itemId
                };
                needDeleteItemList.Add(needDeleteItem);
            }
        }
        /// <summary>
        /// check and remove item from list
        /// </summary>
        /// <param name="listId">list id of item</param>
        /// <param name="itemId">item id of item</param>
        public static bool CheckAndRemoveRequiredDeleteItem(Guid listId, int itemId,bool bRemove)
        {
            lock (itemLock)
            {
                for (int i = 0; i < needDeleteItemList.Count; i++)
                {
                    if (needDeleteItemList[i].listId == listId && needDeleteItemList[i].itemId == itemId)
                    {
                        // if the item is in list,we remove it
                        if (bRemove)
                        {
                            needDeleteItemList.RemoveAt(i);
                        }
                        return true;
                    }
                }
            }
            return false;
        }

        /// <summary>
        /// delay delete item
        /// </summary>
        private class DelayedItem
        {
            public ClientContext clientContext;
            public ListItem spListItem;
            public File spFile;
            public string strFileUrl;
            public DateTime processTime;
        }
        private static bool FindAndUpdateDelayItemByUrl(string fileUrl, DateTime processTime)
        {
            lock (itemLock)
            {
                for (int i = 0; i < delayedItemsList.Count; i++)
                {
                    DelayedItem di = delayedItemsList[i];
                    if (di.strFileUrl.Equals(fileUrl, StringComparison.OrdinalIgnoreCase))
                    {
                        di.processTime = processTime;
                        return true;
                    }
                }
            }
            return false;
        }
        public static void AddedDelayedItem(ClientContext context, ListItem spListItem, File spFile, string fileUrl)
        {
            DateTime processTime = DateTime.Now + (new TimeSpan(0, 5, 0));

            if (!FindAndUpdateDelayItemByUrl(fileUrl, processTime))
            {
                //log
                string strLog = string.Format("AddedDelayedItem file url:{0}", fileUrl);
                theLog.Info(strLog);

                //added item
                DelayedItem delayedItem = new DelayedItem();
                delayedItem.clientContext = context;
                delayedItem.spListItem = spListItem;
                delayedItem.spFile = spFile;
                delayedItem.strFileUrl = fileUrl;
                delayedItem.processTime = processTime;

                lock (itemLock)
                {
                    delayedItemsList.Add(delayedItem);
                }
            }


            //start thread
            if (delayedThread == null)
            {
                delayedThread = new System.Threading.Thread(DelayedItemWorker);
                delayedThread.Start();
            }

        }
        public static void DelayedItemWorker()
        {
            List<DelayedItem> lstDelayedItems = new List<DelayedItem>();
            while (true)
            {
                System.Threading.Thread.Sleep(3 * 60 * 1000);
                DelayedItem delItem = null;
                while ((delItem = GetDelayDeleteItem(DateTime.Now)) != null)
                {
                    if (!DoDelayedItem(delItem))
                        lstDelayedItems.Add(delItem);
                }

                // re-add failed item
                if (lstDelayedItems.Count > 0)
                {
                    lock (itemLock)
                    {
                        delayedItemsList.AddRange(lstDelayedItems);
                    }
                    lstDelayedItems.Clear();
                }

            }
        }
        private static DelayedItem GetDelayDeleteItem(DateTime dt)
        {
            lock (itemLock)
            {
                for (int i = 0; i < delayedItemsList.Count; i++)
                {
                    DelayedItem di = delayedItemsList[i];
                    if (di.processTime < dt)
                    {
                        delayedItemsList.RemoveAt(i);
                        return di;
                    }
                }
            }
            return null;
        }
        private static bool DoDelayedItem(DelayedItem delItem)
        {
            bool bOk = true;
            //get item
            try
            {
                //log
                string strLog = string.Format("DoDelayDeleteItem file url:{0}", delItem.strFileUrl);
                theLog.Info(strLog);

                //load file property
                delItem.clientContext.Load(delItem.spFile, p => p.CheckOutType, p => p.LockedByUser);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(delItem.clientContext);

                delItem.clientContext.Load(delItem.spFile.LockedByUser, p => p.UserPrincipalName);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(delItem.clientContext);

                //check lock status first
                string strLockUser = Utility.GetUserPrincipalName(delItem.spFile.LockedByUser);
                if (!string.IsNullOrEmpty(strLockUser))
                {//still locked
                    bOk = false;
                    strLog = string.Format("DoDelayDeleteItem file is still locked, need to process it next time, url:{0}", delItem.strFileUrl);
                    theLog.Info(strLog);
                }
                //check checkout status
                else if (delItem.spFile.CheckOutType == CheckOutType.None)
                {
                    theLog.Debug("start delete  delayitem");
                    // bOk = true; if it is unlock and not checkedout, we delete item.
                    delItem.spListItem.DeleteObject();
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(delItem.clientContext);
                }
                else
                {
                    //here bOk=true. it is checkout status.
                }
            }
            catch (System.Exception ex)
            {
                theLog.Error("Exception on DoDelayedItem:" + ex.ToString());
                bOk = false;
            }
            return bOk;
        }
    }                                         
}