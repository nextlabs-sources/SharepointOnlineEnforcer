using System;
using System.Collections.Generic;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;
using QueryCloudAZSDK.CEModel;
using SPOLEWeb.Common;

namespace SPOLEWeb.Services
{
    public class ListEventHandler : IRemoteEventService
    {
        protected static CLog theLog = CLog.GetLogger("ListEventHandler");

        /// <summary>
        /// Handles events that occur before an action occurs, such as when a user adds or deletes a list item.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        /// <returns>Holds information returned from the remote event.</returns>
        public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {
            theLog.Debug("ProcessItemEvent enter,type:" + properties.EventType);
            SPRemoteEventResult result = new SPRemoteEventResult();
            switch (properties.EventType)
            {
                case SPRemoteEventType.ItemUpdating:
                    {
                        result = ProcessItemEvent(properties, result,"EDIT");
                        break;
                    }
                case SPRemoteEventType.ItemDeleting:
                    {
                        result = ProcessItemEvent(properties, result,"DELETE");
                        break;
                    }
                case SPRemoteEventType.ItemAttachmentAdding:
                    {
                        result = ProcessItemEvent(properties, result, "EDIT");
                        break;
                    }
                case SPRemoteEventType.ItemAttachmentDeleting:
                    {
                        result = ProcessItemEvent(properties, result, "DELETE");
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            return result;
        }
        private SPRemoteEventResult ProcessItemEvent(SPRemoteEventProperties properties, SPRemoteEventResult result,string action)
        {
            try
            {
                bool isNeedDelete = false;
                if (properties.EventType == SPRemoteEventType.ItemDeleting)
                {
                    // for ItemDeleting ,we need delete the item cache
                    isNeedDelete = ItemMgr.CheckAndRemoveRequiredDeleteItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId,true);
                }
                else
                {
                    //for modern page ,exist ItemAdded event and ItemUpdating event,we need to skip ItemUpdating event
                    bool bSkipUpdatingEvent = ItemMgr.CheckSkipUpdatingItemExist(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                    if (bSkipUpdatingEvent)
                    {
                        theLog.Debug("skip ItemUpdating");
                        return result;
                    }
                    //for other event ,we only check is need to delete
                    //true we skip quey pc,false we query pc,it's in modern page and classic page
                    isNeedDelete = ItemMgr.CheckAndRemoveRequiredDeleteItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId,false);
                }
                theLog.Debug("isNeedDelete:" + isNeedDelete);
                if (isNeedDelete)
                {
                    //the item need to delete,no need to query pc
                    return result;
                }

                User spAppOnlyUser = GetAppUser(properties);
                using (ClientContext clientContext = TokenHelper.CreateRemoteEventReceiverClientContext(properties))
                {
                    if (clientContext != null)
                    {
                        Web rootWeb = SPOEUtility.LoadRootWeb(clientContext);//load web information
                        User currentUser = SPOEUtility.LoadContextUser(clientContext, clientContext.Web);//load user information
                        theLog.Debug("-----------------currentUser---------------:"+ currentUser.LoginName);
                        if (spAppOnlyUser == null ? false : (spAppOnlyUser.LoginName.Equals(currentUser.LoginName, StringComparison.OrdinalIgnoreCase)))
                        {
                            theLog.Debug("It is triggered by our AppOnlyToken user!");
                            return result;
                        }
                        List list = SPOEUtility.LoadContextList(clientContext, clientContext.Web, properties);
                        ListItem listItem = SPOEUtility.LoadContextListItem(clientContext, properties, list);
                        string fileUrl = "";
                        string beforeUrl = properties.ItemEventProperties.BeforeUrl;
                        string weburl = properties.ItemEventProperties.WebUrl;
                        bool needSkipSpace = false;
                        if (list.Title == "Reusable Content")
                        {
                            needSkipSpace = true;
                        }
                        if (SPOEUtility.SupportedListTypes.Contains(list.BaseTemplate))
                        {
                            if (properties.EventType == SPRemoteEventType.ItemUpdating || properties.EventType == SPRemoteEventType.ItemDeleting)
                            {
                                if (!needSkipSpace)
                                {
                                    fileUrl = weburl + "/Lists/" + list.Title + "/" + listItem.DisplayName;
                                }
                                else
                                {
                                    fileUrl = weburl + "/" + list.Title.Replace(" ", "") + "/" + listItem.DisplayName;
                                }
                            }
                            else if (properties.EventType == SPRemoteEventType.ItemAttachmentDeleting)
                            {
                                fileUrl = SPOEUtility.GetDomainFromWebUrl(weburl) + "/" + beforeUrl;
                            }
                            else
                            {
                                fileUrl = weburl + "/" + beforeUrl;
                            }
                        }
                        else
                        {
                            fileUrl = weburl + "/" + beforeUrl;
                        }
                        PolicyResult emPolicyResult = PolicyResult.DontCare;
                        if (!SPOEUtility.CheckListItemCloudAZ(clientContext,rootWeb,list, listItem, currentUser, fileUrl,action, ref emPolicyResult))
                        {
                            emPolicyResult = SPOEUtility.GetDefaultBehavior(rootWeb);
                        }
                        theLog.Debug("emPolicyResult:"+ emPolicyResult+",event:"+properties.EventType);
                        if (emPolicyResult == PolicyResult.Deny)//block action
                        {
                            result.ErrorMessage = SPOEUtility.UITextFile.BlockMessage;
                            result.Status = SPRemoteEventServiceStatus.CancelWithError;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("ProcessItemEvent error:" + ex.ToString());
            }
            return result;
        }
        /// <summary>
        /// Handles events that occur after an action occurs, such as after a user adds an item to a list or deletes an item from a list.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        public void ProcessOneWayEvent(SPRemoteEventProperties properties)
        {
            theLog.Debug("ProcessOneWayEvent enter,type:" + properties.EventType);
            if (properties.EventType != SPRemoteEventType.ItemAdded)
            {
                return;
            }
            try
            {
                ItemMgr.AddSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                string action = "EDIT";
                User spAppOnlyUser = GetAppUser(properties);
                using (ClientContext clientContext = TokenHelper.CreateRemoteEventReceiverClientContext(properties))
                {
                    if (clientContext != null)
                    {
                        Web rootWeb = SPOEUtility.LoadRootWeb(clientContext);//load rootweb information
                        Web currentWeb = SPOEUtility.LoadCurrentWeb(clientContext);//load currentweb information
                        User currentUser = SPOEUtility.LoadContextUser(clientContext, clientContext.Web);//load user information
                        if (spAppOnlyUser == null ? false : (spAppOnlyUser.LoginName.Equals(currentUser.LoginName, StringComparison.OrdinalIgnoreCase)))
                        {
                            theLog.Debug("It is triggered by our AppOnlyToken user!");
                        }
                        List list = SPOEUtility.LoadContextList(clientContext, clientContext.Web, properties);
                        ListItem listItem = SPOEUtility.LoadContextListItem(clientContext, properties, list);

                        string fileUrl = "";
                        string afterUrl = properties.ItemEventProperties.AfterUrl;
                        fileUrl = currentWeb.Url + "/" + afterUrl;
                        if (SPOEUtility.SupportedListTypes.Contains(list.BaseTemplate))
                        {
                            if (list.Title != "Reusable Content")
                            {
                                //for common list ,the url contains "Lists"
                                fileUrl = fileUrl + "Lists/" + list.Title + "/" + listItem.DisplayName;
                            }
                            else
                            {
                                //for Reusable Content list ,the url donnot contains "Lists"
                                fileUrl = fileUrl + list.Title.Replace(" ", "") + "/" + listItem.DisplayName;
                            }
                        }
                        PolicyResult emPolicyResult = PolicyResult.DontCare;
                        if (!SPOEUtility.CheckListItemCloudAZ(clientContext, rootWeb, list, listItem, currentUser, fileUrl, action, ref emPolicyResult))
                        {
                            emPolicyResult = SPOEUtility.GetDefaultBehavior(rootWeb);
                        }
                        theLog.Debug("emPolicyResult:"+ emPolicyResult+",event:"+properties.EventType);
                        if (emPolicyResult == PolicyResult.Deny)//block action
                        {
                            try
                            {
                                //for list ,we delete listitem directly,for doc lib we check file lock
                                if (SPOEUtility.SupportedLibraryTypes.Contains(list.BaseTemplate))
                                {
                                    File file = SPOEUtility.LoadContextFile(clientContext, listItem);
                                    string strLockedByUser = Utility.GetUserPrincipalName(file.LockedByUser);
                                    ItemMgr.RemoveSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                    ItemMgr.AddRequiredDeleteItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                    if (!string.IsNullOrWhiteSpace(strLockedByUser))
                                    {
                                        //the file is locked by user
                                        theLog.Info("this file:" + fileUrl + "is locked by:" + strLockedByUser);
                                        //add file to delay delete list
                                        ItemMgr.AddedDelayedItem(clientContext, listItem, file, fileUrl);
                                        return;
                                    }
                                }
                                else
                                {
                                    ItemMgr.RemoveSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                    ItemMgr.AddRequiredDeleteItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                }
                                listItem.DeleteObject();
                                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                            }
                            catch (Exception ex)
                            {
                                theLog.Debug("load file failed:"+ex.ToString());
                                ItemMgr.RemoveSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                ItemMgr.AddRequiredDeleteItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                                // for new onenote we LoadContextFile will  failed,and we should delete item rightnow ,rthen will get "Item does not exist. It may have been deleted by another user."
                                listItem.DeleteObject();
                                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                            }
                        }
                        ItemMgr.RemoveSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                    }
                }
            }
            catch (Exception ex)
            {
                ItemMgr.RemoveSkipUpdatingItem(properties.ItemEventProperties.ListId, properties.ItemEventProperties.ListItemId);
                theLog.Error("ProcessOneWayEvent error:" + ex.ToString());
            }
        }

        private User GetAppUser(SPRemoteEventProperties properties)
        {
            // Get AppOnly Token
            User spAppOnlyUser = null;
            string strWebUrl = properties.ItemEventProperties.WebUrl;
            Uri sharePointUrl = new Uri(strWebUrl);
            string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
               sharePointUrl.Authority, TokenHelper.GetRealmFromTargetUrl(sharePointUrl)).AccessToken;
            using (ClientContext clientContextAppOnly = TokenHelper.GetClientContextWithAccessToken(strWebUrl, apponlyAccessToken))
            {
                try
                {
                    Web spWebByAppOnly = clientContextAppOnly.Web;
                    clientContextAppOnly.Load(spWebByAppOnly);
                    clientContextAppOnly.ExecuteQuery();
                    spAppOnlyUser = SPOEUtility.LoadContextUser(clientContextAppOnly, clientContextAppOnly.Web); //load app user information
                }
                catch (Exception ex)
                {
                    theLog.Error("GetAppUser error:" + ex.ToString());
                }
            }
            return spAppOnlyUser;
        }
    }
}
