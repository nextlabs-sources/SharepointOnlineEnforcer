using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;
using Microsoft.SharePoint.Client.UserProfiles;
using Newtonsoft.Json;
using QueryCloudAZSDK;
using QueryCloudAZSDK.CEModel;
using SPOLEWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace SPOLEWeb.Common
{
    public class SPOEUtility
    {
        public enum SitePropLevel
        {
            None,
            Subsite,
            SiteCollection,
            Both
        }

        protected static CLog theLog = CLog.GetLogger("SPOEUtility");
        public static string ListRemoteEventRevieverUrl = "";
        public static string WebRemoteEventRevieverUrl = "";
        public static int MaxRequestCount = 20;
        public static List<int> SupportedLibraryTypes = new List<int> { 101 };
        public static List<int> SupportedListTypes = new List<int> { 100 };
        public static readonly string ListEditItemName = "SPOLEEditListItem";
        public static readonly string WebRemoteRecieverName = "SPOLEWebEventHandler";
        public static readonly string ListRemoteRecieverName = "SPOLEListEventHandler";
        public static readonly string GeneralSetInfoName = "SPOLEGeneralSetInfo";
        public static readonly string ServerDomainName = "SPOLEServerDomainName";
        public static readonly string DefaultBehaviorName = "SPOLEDefaultBehavior";
        public static readonly string SitePropertyLevel = "SPOLESitePropertyLevel";
        public static readonly string SitePropertyList = "SPOLESitePropertyList";
        public static readonly string SelectedListsForActivation = "SPOLESelectedLists";
        public static readonly string ListSelectedColumns = "SPOLEListSelectedColumns";
        public static ConfigFileUtility.UITextFile UITextFile;
        public static SPOConfiguration SPOConfiguration;

        static SPOEUtility()
        {
            UITextFile = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("~")
                .GetSection("UITextFile") as ConfigFileUtility.UITextFile;
            LoadSPOConfig();
        }
        public static void LoadSPOConfig()
        {
            try
            {
                string configPath = Utility.GetAppFolder() + "SPOConfig.xml";
                theLog.Debug("SPOConfig path:" + configPath);
                using (System.IO.TextReader reader = new System.IO.StreamReader(configPath))
                {
                    XmlSerializer xmlSerializer = new XmlSerializer(typeof(SPOConfiguration));
                    SPOConfiguration = (SPOConfiguration)xmlSerializer.Deserialize(reader);
                }
            }
            catch (Exception ex)
            {
                theLog.Debug("Exception during LoadSPOConfig:" + ex.Message + ex.StackTrace);
            }
        }
        public static string GetFileSuffix(string strFileName)
        {
            string strSuffix = "";
            int nPos = strFileName.LastIndexOf('.');
            if (nPos >= 0)
            {
                strSuffix = strFileName.Substring(nPos + 1);
            }
            return strSuffix;
        }
        public static string GetDomainFromWebUrl(string webUrl)
        {
            int pos = -1;
            pos = webUrl.IndexOf("/", 8);
            return webUrl.Substring(0, pos);
        }
        public static User LoadContextUser(ClientContext clientContext, Web web)
        {
            User currentUser = clientContext.Web.CurrentUser;
            clientContext.Load(currentUser);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return currentUser;
        }
        public static Web LoadRootWeb(ClientContext clientContext)
        {
            Web web = clientContext.Site.RootWeb;
            clientContext.Load(web, d => d.AllProperties);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return web;
        }
        public static Web LoadCurrentWeb(ClientContext clientContext)
        {
            Web web = clientContext.Web;
            clientContext.Load(web, d => d.Url);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return web;
        }
        public static List LoadContextList(ClientContext clientContext, Web web, SPRemoteEventProperties properties)
        {
            Guid listId = properties.ItemEventProperties.ListId;
            List docLibrary = web.Lists.GetById(listId);
            clientContext.Load(docLibrary, d => d.Id, d => d.Title, d => d.BaseType, d => d.BaseTemplate, d => d.Fields);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return docLibrary;
        }
        public static ListItem LoadContextListItem(ClientContext clientContext, SPRemoteEventProperties properties, List list)
        {
            int listItemId = properties.ItemEventProperties.ListItemId;
            ListItem listItem = list.GetItemById(listItemId);
            //clientContext.Load(listItem);
            clientContext.Load(listItem, d => d.DisplayName,d=>d.FieldValuesAsText);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return listItem;
        }
        public static File LoadContextFile(ClientContext clientContext, ListItem listItem)
        {
            File file = listItem.File;
            clientContext.Load(file, d => d.LockedByUser);
            clientContext.Load(file.LockedByUser, d => d.UserPrincipalName);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            return file;
        }
        public static string GetUserEmailFromLoginName(string strUserLoginName)
        {
            return strUserLoginName.Substring(strUserLoginName.LastIndexOf("|") + 1);
        }
        public static void GetSPUserAttrs(ClientContext clientContext, User user, ref string userName, ref string userSid, CEAttres userAttrs)
        {
            userName = user.LoginName;
            userSid = user.Id.ToString();
            userAttrs.AddAttribute(new CEAttribute("emailaddress", user.Email, CEAttributeType.XacmlString));
            userAttrs.AddAttribute(new CEAttribute("username", user.LoginName, CEAttributeType.XacmlString));

            //get user profile
            IDictionary<string, string> profileAttrs = GetUserAttributeFromProfile(clientContext);
            foreach (var profile in profileAttrs)
            {
                userAttrs.AddAttribute(new CEAttribute(profile.Key, profile.Value, CEAttributeType.XacmlString));
            }
        }
        public static IDictionary<string, string> GetUserAttributeFromProfile(ClientContext clientContext)
        {
            IDictionary<string, string> profileAttrs = new Dictionary<string, string>();
            try
            {
                PeopleManager peopleManager = new PeopleManager(clientContext);
                PersonProperties personProperties = peopleManager.GetMyProperties();
                clientContext.Load(personProperties, p => p.AccountName, p => p.UserProfileProperties);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                profileAttrs = personProperties.UserProfileProperties;
            }
            catch (System.Exception ex)
            {
                theLog.Error("GetUserAttributeFromProfile error:" + ex.ToString());
            }

            return profileAttrs;
        }

        public static bool CheckEvent(Web web, List list)
        {
            bool result = false;
            EventReceiverDefinitionCollection erdc = list.EventReceivers;
            foreach (EventReceiverDefinition erd in erdc)
            {
                if (erd.ReceiverName == ListRemoteRecieverName)
                {
                    result = true;
                    break;
                }
            }
            return result;
        }
        public static bool CheckSupportedListType(int templateType)
        {
            if (SupportedLibraryTypes.Contains(templateType) || SupportedListTypes.Contains(templateType))
            {
                return true;
            }
            return false;
        }
        public static GeneralSetInfo GetGeneralSetInfo(Web web)
        {
            GeneralSetInfo generalSetInfo = new GeneralSetInfo();
            try
            {
                if (web.AllProperties.FieldValues.ContainsKey(GeneralSetInfoName))
                {
                    string strGeneralSetInfo = web.AllProperties.FieldValues[GeneralSetInfoName].ToString();
                    generalSetInfo = JsonConvert.DeserializeObject<GeneralSetInfo>(strGeneralSetInfo);
                }
            }
            catch (Exception ex)
            {
                theLog.Error("GetGeneralSetInfo error:" + ex.ToString());
            }
            return generalSetInfo;
        }
        public static bool SetGeneralSetInfo(ClientContext clientContext, string strGeneralSetInfo)
        {
            bool ret = true;
            try
            {
                Web web = clientContext.Web;
                clientContext.Load(web, d => d.AllProperties);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                web.AllProperties[GeneralSetInfoName] = strGeneralSetInfo;
                web.AllProperties[ServerDomainName] = System.Web.Configuration.WebConfigurationManager.AppSettings["HostedAppHostNameOverride"].ToString();
                web.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
            catch (Exception ex)
            {
                theLog.Error("SetGeneralSetInfo error:" + ex.ToString());
                ret = false;
            }
            return ret;
        }

        public static void AddEnforcerToLibaries(ClientContext clientContext, List<List> ListCollection,
                                                 string strEditListUrl, bool isalreadyLoadData, List<string> listFailed)
        {
            int ListCollectionCount = ListCollection.Count;
            if (ListCollectionCount == 0) return;
            int k = ListCollectionCount % MaxRequestCount == 0 ?
                ListCollectionCount / MaxRequestCount :
                ListCollectionCount / MaxRequestCount + 1;
            for (int i = 0; i < k; i++)
            {
                int maxCount = Math.Min((i + 1) * MaxRequestCount, ListCollectionCount);
                if (!isalreadyLoadData)
                {
                    //load data
                    for (int j = i * MaxRequestCount; j < maxCount; j++)
                    {
                        clientContext.Load(ListCollection[j], olist => olist.Title, olist => olist.EventReceivers, olist => olist.BaseTemplate, olist => olist.UserCustomActions, olist => olist.Views, olist => olist.ListExperienceOptions, olist => olist.Fields);
                    }
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                }
                // add event
                for (int j = i * MaxRequestCount; j < maxCount; j++)
                {
                    List cellList = ListCollection[j];
                    bool bFailed = false;

                    //added event
                    try
                    {
                        AddListEvent(clientContext, cellList);
                    }
                    catch (Exception exp)
                    {
                        theLog.Error("List: " + cellList.Title + ", add Event Reciever failed, Exception: " + exp.ToString());
                        bFailed = true;
                    }
                    //add list edit page
                    try
                    {
                        AddECBAction(clientContext, cellList, strEditListUrl);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", add list edit page failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    //add formatter css for modern view
                    try
                    {
                        AddCustomFormatterForView(clientContext, cellList);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", add custom formatter failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    //change list to classical mode
                    try
                    {
                        SetClassicalMode(clientContext, cellList);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", Set Classical Mode failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    try
                    {
                        AddOrRemoveJSLink(clientContext, cellList, true);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", AddInjectJS failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    //added to failed list
                    if (bFailed)
                    {
                        listFailed.Add(cellList.Title);
                    }
                }
            }
        }
        public static void AddCustomFormatterForView(ClientContext clientContext, List spList)
        {
            // add format view json
            foreach (var view in spList.Views)
            {
                if (view.ServerRelativeUrl.EndsWith("AllItems.aspx"))
                {
                    view.CustomFormatter = @"{""schema"": ""https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json"",""additionalRowClass"": ""ms-fontColor-white ms-bgColor-white ms-fontColor-white--hover ms-bgColor-white--hover""}";
                    view.Update();
                    spList.Update();
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                    break;
                }
            }
        }
        public static void RemoveCustomFormatterForView(ClientContext clientContext, List spList)
        {
            // remove format view json
            clientContext.Load(spList, d => d.Views);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            foreach (var view in spList.Views)
            {
                if (view.ServerRelativeUrl.EndsWith("AllItems.aspx"))
                {
                    view.CustomFormatter = "";
                    view.Update();
                    spList.Update();
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                    break;
                }
            }
        }
        /// <summary>
        /// add inject js for field
        /// </summary>
        /// <param name="clientContext"></param>
        /// <param name="spList"></param>
        public static void AddOrRemoveJSLink(ClientContext clientContext, List spList, bool bAdd)
        {
            theLog.Debug($"AddOrRemoveJSLink list:{spList.Title},badd:{bAdd}");
            if (SPOConfiguration != null)
            {
                foreach (var jSLink in SPOConfiguration.JSLinks)
                {
                    if (jSLink.type.Equals("List", StringComparison.OrdinalIgnoreCase))
                    {
                        foreach (var field in spList.Fields)
                        {
                            if (SPOEUtility.SupportedLibraryTypes.Contains(spList.BaseTemplate))
                            {
                                if (field.InternalName.Equals("Modified", StringComparison.OrdinalIgnoreCase))
                                {
                                    theLog.Debug("InternalName:" + field.InternalName + ",JSLink:" + field.JSLink);
                                    theLog.Debug($"jSLink.file:{jSLink.file}");
                                    if (bAdd)
                                    {
                                        AddJSLink(clientContext, field, jSLink.address);
                                    }
                                    else
                                    {
                                        RemoveJSLink(clientContext, field, jSLink.address);
                                    }
                                    break;
                                }
                            }
                            else
                            {
                                if (field.InternalName.Equals("LinkTitle", StringComparison.OrdinalIgnoreCase))
                                {
                                    theLog.Debug("InternalName:" + field.InternalName + ",JSLink:" + field.JSLink);
                                    theLog.Debug($"jSLink.file:{jSLink.file}");
                                    if (bAdd)
                                    {
                                        AddJSLink(clientContext, field, jSLink.address);
                                    }
                                    else
                                    {
                                        RemoveJSLink(clientContext, field, jSLink.address);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        private static void AddJSLink(ClientContext clientContext, Field field, string JSUrl)
        {
            if (string.IsNullOrEmpty(field.JSLink))
            {
                field.JSLink = JSUrl;
            }
            else if (field.JSLink.Contains(JSUrl))
            {
                return;
            }
            else
            {
                field.JSLink += $"|{JSUrl}";
            }
            field.Update();
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        private static void RemoveJSLink(ClientContext clientContext, Field field, string JSUrl)
        {
            if (string.IsNullOrEmpty(field.JSLink))
            {
                return;
            }
            else if (field.JSLink.Contains($"|{JSUrl}"))
            {
                field.JSLink = field.JSLink.Replace($"|{JSUrl}", "");
                field.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
            else if (field.JSLink.Contains($"{JSUrl}|"))
            {
                field.JSLink = field.JSLink.Replace($"{JSUrl}|", "");
                field.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
            else if (field.JSLink.Contains(JSUrl))
            {
                field.JSLink = field.JSLink.Replace(JSUrl, "");
                field.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
            else
            {

            }
        }
        public static void AddECBAction(ClientContext clientContext, List spList, string editListUrl)
        {
            //check exist
            UserCustomActionCollection userCustomActionColl = spList.UserCustomActions;
            bool bHaveEditListAction = false;
            foreach (var action in userCustomActionColl)
            {
                if (action.Name.Equals(SPOEUtility.ListEditItemName, StringComparison.OrdinalIgnoreCase))
                {
                    bHaveEditListAction = true;
                    break;
                }
            }

            if (!bHaveEditListAction)
            {
                UserCustomAction listEditViewAction = userCustomActionColl.Add();
                listEditViewAction.Name = SPOEUtility.ListEditItemName;
                listEditViewAction.Location = "Microsoft.SharePoint.ListEdit";
                listEditViewAction.Group = "Permissions";
                listEditViewAction.Sequence = 10002;
                listEditViewAction.Title = "Entitlement Manager for SharePoint Online";
                listEditViewAction.Url = editListUrl;
                // set full control permission,for other user/group we hide the link
                BasePermissions basePermissions = new BasePermissions();
                basePermissions.Set(PermissionKind.FullMask);
                listEditViewAction.Rights = basePermissions;
                listEditViewAction.Update();
            }
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        public static void RemoveECBAction(ClientContext clientContext, List spList)
        {
            UserCustomActionCollection userCustomActionColl = spList.UserCustomActions;
            List<UserCustomAction> listDeleteItem = new List<UserCustomAction>();
            foreach (var action in userCustomActionColl)
            {
                if (action.Name.Equals(SPOEUtility.ListEditItemName, StringComparison.OrdinalIgnoreCase))
                {
                    listDeleteItem.Add(action);
                    break;
                }
            }

            foreach (UserCustomAction action in listDeleteItem)
            {
                action.DeleteObject();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
        }
        public static void AddCustomAction(ClientContext clientContext)
        {
            if (SPOConfiguration != null)
            {
                Web web = clientContext.Web;
                UserCustomActionCollection userCustomActionColl = web.UserCustomActions;
                foreach (var jSLink in SPOConfiguration.JSLinks)
                {
                    if (jSLink.type.Equals("Web", StringComparison.OrdinalIgnoreCase))
                    {
                        bool bHave = false;
                        foreach (var action in userCustomActionColl)
                        {
                            if (action.Title.Equals(jSLink.name, StringComparison.OrdinalIgnoreCase))
                            {
                                bHave = true;
                                break;
                            }
                        }
                        if (!bHave)
                        {
                            UserCustomAction checkVerJsAction = userCustomActionColl.Add();
                            checkVerJsAction.Location = "ScriptLink";
                            checkVerJsAction.ScriptSrc = jSLink.address;
                            checkVerJsAction.Title = jSLink.name;
                            checkVerJsAction.Sequence = jSLink.Sequence;
                            checkVerJsAction.Update();
                            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        }
                    }
                }
            }
        }
        public static void RemoveCustomAction(ClientContext clientContext)
        {
            if (SPOConfiguration != null)
            {
                Web web = clientContext.Web;
                UserCustomActionCollection userCustomActionColl = web.UserCustomActions;
                List<UserCustomAction> deleteItemList = new List<UserCustomAction>();
                foreach (var jSLink in SPOConfiguration.JSLinks)
                {
                    if (jSLink.type.Equals("Web", StringComparison.OrdinalIgnoreCase))
                    {
                        foreach (var action in userCustomActionColl)
                        {
                            if (action.Title.Equals(jSLink.name, StringComparison.OrdinalIgnoreCase))
                            {
                                deleteItemList.Add(action);
                                break;
                            }
                        }
                    }
                }
                foreach (UserCustomAction action in deleteItemList)
                {
                    action.DeleteObject();
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                }
            }
        }
        public static void SetClassicalMode(ClientContext clientContext, List list)
        {
            if (list.ListExperienceOptions != ListExperience.ClassicExperience)
            {
                list.ListExperienceOptions = ListExperience.ClassicExperience;
                list.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
        }
        public static void AddListEvent(ClientContext clientContext, List list)
        {
            EventReceiverDefinitionCollection erdc = list.EventReceivers;
            //check whether there exists the event or not, if exists, we shouldn't add the event again.
            foreach (EventReceiverDefinition erd in erdc)
            {
                if (erd.ReceiverName.Equals(ListRemoteRecieverName))
                {
                    return;
                }
            }
            if (CheckSupportedListType(list.BaseTemplate))
            {
                EventReceiverDefinitionCreationInformation deletingEventReceiver = new EventReceiverDefinitionCreationInformation()
                {
                    EventType = EventReceiverType.ItemDeleting,
                    ReceiverName = ListRemoteRecieverName,
                    ReceiverClass = ListRemoteRecieverName,
                    ReceiverUrl = ListRemoteEventRevieverUrl,
                    SequenceNumber = 10000
                };
                erdc.Add(deletingEventReceiver);

                EventReceiverDefinitionCreationInformation updatingEventReceiver = new EventReceiverDefinitionCreationInformation()
                {
                    EventType = EventReceiverType.ItemUpdating,
                    ReceiverName = ListRemoteRecieverName,
                    ReceiverClass = ListRemoteRecieverName,
                    ReceiverUrl = ListRemoteEventRevieverUrl,
                    SequenceNumber = 10000
                };
                erdc.Add(updatingEventReceiver);

                EventReceiverDefinitionCreationInformation addedEventReceiver = new EventReceiverDefinitionCreationInformation()
                {
                    EventType = EventReceiverType.ItemAdded,
                    ReceiverName = ListRemoteRecieverName,
                    ReceiverClass = ListRemoteRecieverName,
                    ReceiverUrl = ListRemoteEventRevieverUrl,
                    SequenceNumber = 10000
                };
                erdc.Add(addedEventReceiver);
            }
            if (SupportedListTypes.Contains(list.BaseTemplate))
            {
                EventReceiverDefinitionCreationInformation attachmentAddingEventReceiver = new EventReceiverDefinitionCreationInformation()
                {
                    EventType = EventReceiverType.ItemAttachmentAdding,
                    ReceiverName = ListRemoteRecieverName,
                    ReceiverClass = ListRemoteRecieverName,
                    ReceiverUrl = ListRemoteEventRevieverUrl,
                    SequenceNumber = 10000
                };
                erdc.Add(attachmentAddingEventReceiver);
                EventReceiverDefinitionCreationInformation attachmentDeletingEventReceiver = new EventReceiverDefinitionCreationInformation()
                {
                    EventType = EventReceiverType.ItemAttachmentDeleting,
                    ReceiverName = ListRemoteRecieverName,
                    ReceiverClass = ListRemoteRecieverName,
                    ReceiverUrl = ListRemoteEventRevieverUrl,
                    SequenceNumber = 10000
                };
                erdc.Add(attachmentDeletingEventReceiver);
            }
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        public static void RemoveEnforcerToLibaries(ClientContext clientContext, List<List> ListCollection,
                                                    bool isalreadyLoadData, List<string> listFailed)
        {
            int ListCollectionCount = ListCollection.Count;
            if (ListCollectionCount == 0) return;
            int k = ListCollectionCount % MaxRequestCount == 0 ?
                ListCollectionCount / MaxRequestCount :
                ListCollectionCount / MaxRequestCount + 1;
            for (int i = 0; i < k; i++)
            {
                int maxCount = Math.Min((i + 1) * MaxRequestCount, ListCollectionCount);
                if (!isalreadyLoadData)
                {
                    //load data
                    for (int j = i * MaxRequestCount; j < maxCount; j++)
                    {
                        clientContext.Load(ListCollection[j], olist => olist.Title, olist => olist.EventReceivers, olist => olist.BaseTemplate, olist => olist.UserCustomActions, olist => olist.Views, olist => olist.Fields);
                    }
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                }


                for (int j = i * MaxRequestCount; j < maxCount; j++)
                {
                    List cellList = ListCollection[j];
                    bool bFailed = false;

                    //remove event
                    try
                    {
                        RemoveListEvent(clientContext, cellList);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", Remove Event Reciever failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    //remove list edit page
                    try
                    {
                        RemoveECBAction(clientContext, cellList);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", Remove list edit page failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    try
                    {
                        RemoveCustomFormatterForView(clientContext, cellList);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", Remove custom formatter failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }
                    // remove injectJS from field
                    try
                    {
                        AddOrRemoveJSLink(clientContext, cellList, false);
                    }
                    catch (Exception ex)
                    {
                        theLog.Error("List: " + cellList.Title + ", RemoveInjectIS failed, Exception: " + ex.ToString());
                        bFailed = true;
                    }

                    //added to failed list
                    if (bFailed)
                    {
                        listFailed.Add(cellList.Title);
                    }
                }
            }
        }
        public static void RemoveListEvent(ClientContext clientContext, List list)
        {
            EventReceiverDefinitionCollection erdc = list.EventReceivers;
            List<EventReceiverDefinition> toDelete = new List<EventReceiverDefinition>();
            foreach (EventReceiverDefinition erd in erdc)
            {
                if (erd.ReceiverName.Equals(ListRemoteRecieverName))
                {
                    toDelete.Add(erd);
                }
            }
            //Delete the remote event receiver from the list, when the app gets uninstalled
            foreach (EventReceiverDefinition item in toDelete)
            {
                erdc.GetById(item.ReceiverId).DeleteObject();
            }
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        public static void AddWebEvent(ClientContext clientContext, Web web)
        {
            EventReceiverDefinitionCollection erdc = web.EventReceivers;
            foreach (EventReceiverDefinition erd in erdc)
            {
                if (erd.ReceiverName.Equals(WebRemoteRecieverName))
                    return;
            }
            EventReceiverDefinitionCreationInformation listAddedEventReceiver = new EventReceiverDefinitionCreationInformation()
            {
                EventType = EventReceiverType.ListAdded,
                ReceiverName = WebRemoteRecieverName,
                ReceiverClass = WebRemoteRecieverName,
                ReceiverUrl = WebRemoteEventRevieverUrl,
                SequenceNumber = 10000
            };
            erdc.Add(listAddedEventReceiver);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        public static void RemoveWebEvent(ClientContext clientContext)
        {
            Web web = clientContext.Web;
            EventReceiverDefinitionCollection erdc = web.EventReceivers;
            List<EventReceiverDefinition> toDelete = new List<EventReceiverDefinition>();
            foreach (EventReceiverDefinition erd in erdc)
            {
                if (erd.ReceiverName.Equals(WebRemoteRecieverName))
                {
                    toDelete.Add(erd);
                }
            }
            //Delete the remote event receiver from the web, when the app gets uninstalled
            foreach (EventReceiverDefinition item in toDelete)
            {
                erdc.GetById(item.ReceiverId).DeleteObject();
            }
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        public static bool CheckListItemCloudAZ(ClientContext clientContext, Web web, List list, ListItem listItem, User currentUser, string fileUrl, string action, ref PolicyResult emPolicyResult)
        {
            try
            {
                string fileName = "";
                int pos = fileUrl.LastIndexOf('/');
                if (pos > 0)
                {
                    fileName = fileUrl.Substring(pos + 1);
                }
                //  Convert "http://" or "https://" to "sharepoint://"
                int indx = fileUrl.IndexOf("://");
                fileUrl = "sharepoint" + fileUrl.Substring(indx);
                theLog.Debug("--------------------file url--------------:" + fileUrl);
                //get selected columns
                IniFiles libSettingFile = new IniFiles(Utility.GetConfigFolder() + "LibSetting.ini");
                var strSelectedColumns = libSettingFile.IniReadValue(list.Id.ToString(), SPOEUtility.ListSelectedColumns);
                Dictionary<string, string> selectedColumns = JsonConvert.DeserializeObject<Dictionary<string, string>>(strSelectedColumns);
                if (selectedColumns == null)
                {
                    selectedColumns = new Dictionary<string, string>();
                }
                // res attrs
                string currentUserEmail = SPOEUtility.GetUserEmailFromLoginName(currentUser.LoginName);
                FieldCollection filedCollection = list.Fields;
                CEAttres ceSrcAttrs = GetItemAttrs(clientContext,listItem, filedCollection, selectedColumns);

                ceSrcAttrs.AddAttribute(new CEAttribute("Type", "item", CEAttributeType.XacmlString));
                ceSrcAttrs.AddAttribute(new CEAttribute("Type", GetFileSuffix(fileName), CEAttributeType.XacmlString));
                ceSrcAttrs.AddAttribute(new CEAttribute("Name", fileName, CEAttributeType.XacmlString));
                if (SupportedLibraryTypes.Contains(list.BaseTemplate))
                {
                    ceSrcAttrs.AddAttribute(new CEAttribute("Sub_type", "library item", CEAttributeType.XacmlString));
                }
                else if (SupportedListTypes.Contains(list.BaseTemplate))
                {
                    ceSrcAttrs.AddAttribute(new CEAttribute("Sub_type", "list item", CEAttributeType.XacmlString));
                }

                // user attrs
                string strUserName = "";
                string strSid = "";
                CEAttres userAttrs = new CEAttres();
                GetSPUserAttrs(clientContext, currentUser, ref strUserName, ref strSid, userAttrs);

                List<CEObligation> listObligation = new List<CEObligation>();
                CERequest obReq = CloudAZQuery.CreateQueryReq(action, "", fileUrl, ceSrcAttrs, strSid, strUserName, userAttrs);
                QueryStatus emQueryRes = CloudAZQuery.GetCloudAZQueryInstance(web).QueryColuAZPC(obReq, ref listObligation, ref emPolicyResult);
                if (emQueryRes == QueryStatus.S_OK)
                {
                    return true;
                }
            }
            catch (Exception ex)
            {
                theLog.Error("CheckListItemCloudAZ eror:" + ex.ToString());
            }
            return false;
        }
        private static void ConvertValueForFieldType(ClientContext clientContext, Field field, object value, out string strValue)
        {
            strValue = null;
            if (field.FieldTypeKind == FieldType.DateTime
                || field.InternalName.Equals("Last_x0020_Modified", StringComparison.OrdinalIgnoreCase)
                || field.InternalName.Equals("Created_x0020_Date",StringComparison.OrdinalIgnoreCase))
            {
                strValue = ConvertDateTimeToString((DateTime)value);
            }
            else if(field.FieldTypeKind == FieldType.User 
                || field.InternalName.Equals("Modified_x0020_By", StringComparison.OrdinalIgnoreCase) 
                || field.InternalName.Equals("Created_x0020_By", StringComparison.OrdinalIgnoreCase))
            {
                User user = clientContext.Web.EnsureUser(value.ToString());
                clientContext.Load(user, d => d.LoginName);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                strValue = GetUserEmailFromLoginName(user.LoginName);
            }
            else
            {
                strValue = value.ToString();
            }
        }
       
        //ToDo:need complete this function 
        public static CEAttres GetItemAttrs(ClientContext clientContext,ListItem listItem, FieldCollection filedCollection, Dictionary<string, string> selectedColumns)
        {
            CEAttres ceAttrs = new CEAttres();
            FieldStringValues fieldStringValues = listItem.FieldValuesAsText;
            Dictionary<string,object> fieldValues = listItem.FieldValues;
            foreach (Field field in filedCollection)
            {
                try
                {
                    string key = field.Title;
                    theLog.Debug(String.Format("FieldType:[{0}], InternalName:[{1}], FieldValues:[{2}]", field.FieldTypeKind, field.InternalName, fieldStringValues.FieldValues[field.InternalName]));
                    if (!string.IsNullOrEmpty(key) && selectedColumns.ContainsKey(field.InternalName))
                    {
                        if (fieldStringValues.FieldValues.ContainsKey(field.InternalName))
                        {
                            string strValue = fieldStringValues.FieldValues[field.InternalName];
                            bool ret = true;
                            if (field.FieldTypeKind == FieldType.DateTime
                                || field.InternalName.Equals("Last_x0020_Modified", StringComparison.OrdinalIgnoreCase)
                                || field.InternalName.Equals("Created_x0020_Date", StringComparison.OrdinalIgnoreCase))//the last two are lookup type
                            {
                                DateTime dateTime;
                                ret = DateTime.TryParse(strValue,out dateTime);
                                if (ret)
                                {
                                    strValue = ConvertDateTimeToString(dateTime);
                                    ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                                }
                                else
                                {
                                    theLog.Debug(String.Format("Convert field attribute failed, please check. Currently using the string value directly. FieldType:[{0}], InternalName:[{1}], FieldValues:[{2}]\n", field.FieldTypeKind, field.InternalName, fieldStringValues.FieldValues[field.InternalName]));
                                    ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                                }
                            }
                            else if (field.FieldTypeKind == FieldType.User
                                || field.InternalName.Equals("Modified_x0020_By", StringComparison.OrdinalIgnoreCase)
                                || field.InternalName.Equals("Created_x0020_By", StringComparison.OrdinalIgnoreCase))//the last two are text type
                            {
                                User user = clientContext.Web.EnsureUser(strValue);
                                clientContext.Load(user, d => d.LoginName);
                                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                                strValue = GetUserEmailFromLoginName(user.LoginName);
                                ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                            }
                            else if(field.FieldTypeKind == FieldType.Number)
                            {
                                double numberValue;
                                ret = double.TryParse(strValue,out numberValue);
                                if (ret)
                                {
                                    strValue = numberValue.ToString();
                                    ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                                }
                                else
                                {
                                    theLog.Debug(String.Format("Convert field attribute failed, please check. Currently using the string value directly. FieldType:[{0}], InternalName:[{1}], FieldValues:[{2}]\n", field.FieldTypeKind, field.InternalName, fieldStringValues.FieldValues[field.InternalName]));
                                    ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                                }
                            }
                            else if(field.TypeDisplayName.Equals("Managed Metadata", StringComparison.OrdinalIgnoreCase))
                            {
                                if (strValue.Contains(";"))
                                {
                                    var splitArray = strValue.Split(new Char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
                                    for (int i = 0; i < splitArray.Length; i++)
                                    {
                                        var index = splitArray[i].IndexOf("|");
                                        if (index != -1)
                                        {
                                            splitArray[i] = splitArray[i].Remove(index);
                                            ceAttrs.AddAttribute(new CEAttribute(key, splitArray[i], CEAttributeType.XacmlString));
                                        }
                                    }
                                }
                                else
                                {
                                    ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                                }
                            }
                            else
                            {
                                ceAttrs.AddAttribute(new CEAttribute(key, strValue, CEAttributeType.XacmlString));
                            }
                            //else if ()
                            //{
                            //    //ToDo:need support multiple line type
                            //}
                        }
                    }
                }
                catch (System.Exception ex)
                {
                    theLog.Error("Exception on GetItemAttrs:" + ex.ToString());
                }
            }
            //get all sites && selected properties
            clientContext.Load(clientContext.Site, d => d.Url);
            clientContext.Load(clientContext.Web, d => d.Url);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            string rootWebUrl = clientContext.Site.Url;
            string webUrl = clientContext.Web.Url;
            Web rootWeb = LoadRootWeb(clientContext);
            var allProperties = rootWeb.AllProperties;
            List<ZSiteNodeModel> sitesNodeList = new List<ZSiteNodeModel>();
            string SitePropertyLevel = "";
            string siteJson = "";
            if (allProperties.FieldValues.ContainsKey(SPOEUtility.SitePropertyLevel))
            {
                SitePropertyLevel = allProperties.FieldValues[SPOEUtility.SitePropertyLevel].ToString();
            }
            if (allProperties.FieldValues.ContainsKey(SPOEUtility.SitePropertyList))
            {
                siteJson = allProperties.FieldValues[SPOEUtility.SitePropertyList].ToString();
                sitesNodeList = JsonConvert.DeserializeObject<List<ZSiteNodeModel>>(siteJson);
            }
            if (sitesNodeList == null)
            {
                sitesNodeList = new List<ZSiteNodeModel>();
            }
            if (SitePropertyLevel == SitePropLevel.Subsite.ToString())
            {
                if (webUrl != rootWebUrl)
                {
                    GetAttrFromSiteProperty(webUrl, sitesNodeList, ceAttrs, false);
                }
            }
            else if (SitePropertyLevel == SitePropLevel.SiteCollection.ToString())
            {
                GetAttrFromSiteProperty(rootWebUrl, sitesNodeList, ceAttrs, true);
            }
            else if (SitePropertyLevel == SitePropLevel.Both.ToString())
            {
                if (webUrl == rootWebUrl)
                {
                    GetAttrFromSiteProperty(rootWebUrl, sitesNodeList, ceAttrs, true);
                }
                else
                {
                    GetAttrFromSiteProperty(webUrl, sitesNodeList, ceAttrs, false);
                    GetAttrFromSiteProperty(rootWebUrl, sitesNodeList, ceAttrs, true);
                }
            }
            return ceAttrs;
        }
        private static void GetAttrFromSiteProperty(string webUrl, List<ZSiteNodeModel> sitesNodeList, CEAttres ceAttrs, bool isRootWeb)
        {
            Uri webUri = new Uri(webUrl);
            string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
                    webUri.Authority, TokenHelper.GetRealmFromTargetUrl(webUri)).AccessToken;
            using (ClientContext webContext = TokenHelper.GetClientContextWithAccessToken(webUrl, apponlyAccessToken))
            {
                webContext.Load(webContext.Web, web => web.AllProperties);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(webContext);
                PropertyValues allProps = webContext.Web.AllProperties;
                var currentNode = sitesNodeList.Where(p => p.id == webUrl).FirstOrDefault();
                if (currentNode == null)
                {
                    return;
                }
                foreach (KeyValuePair<string, object> field in allProps.FieldValues)
                {
                    SitePropertyModel selectedProp = currentNode.siteProperties.Where(p => p.displayName == field.Key).FirstOrDefault();
                    if (selectedProp != null)
                    {
                        if (isRootWeb)
                        {
                            ceAttrs.AddAttribute(new CEAttribute("sc." + selectedProp.displayName, field.Value.ToString(), CEAttributeType.XacmlString));
                        }
                        else
                        {
                            ceAttrs.AddAttribute(new CEAttribute("ss." + selectedProp.displayName, field.Value.ToString(), CEAttributeType.XacmlString));
                        }
                    }
                }
            }
        }

        public static string ConvertDateTimeToString(System.DateTime time)
        {
            System.DateTime startTime = System.TimeZone.CurrentTimeZone.ToLocalTime(new System.DateTime(1970, 1, 1, 0, 0, 0, 0));
            long timeSpan = (time.Ticks - startTime.Ticks) / 10000;  
            return timeSpan.ToString();
        }

        public static PolicyResult GetDefaultBehavior(Web web)
        {
            PolicyResult policyResult = PolicyResult.Deny;
            try
            {
                if (web.AllProperties.FieldValues.ContainsKey(DefaultBehaviorName))
                {
                    string strPolicyResult = web.AllProperties.FieldValues[DefaultBehaviorName].ToString();
                    if (!strPolicyResult.Equals("deny", StringComparison.OrdinalIgnoreCase))
                    {
                        policyResult = PolicyResult.Allow;
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("GetDefaultBehavior error:" + ex.ToString());
            }
            return policyResult;
        }
        public static bool SetDefaultBehavior(ClientContext clientContext,string strDefaultBehavior)
        {
            bool ret = true;
            try
            {
                Web web = clientContext.Web;
                clientContext.Load(web, d => d.AllProperties);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                web.AllProperties[DefaultBehaviorName] = strDefaultBehavior;
                web.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            }
            catch (Exception ex)
            {
                theLog.Error("SetDefaultBehavior error:" + ex.ToString());
                ret = false;
            }
            return ret;
        }
    }
}