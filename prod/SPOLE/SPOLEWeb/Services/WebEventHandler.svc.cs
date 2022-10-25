using System;
using System.Collections.Generic;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;
using QueryCloudAZSDK.CEModel;
using SPOLEWeb.Common;

namespace SPOLEWeb.Services
{
    public class WebEventHandler : IRemoteEventService
    {
        protected static CLog theLog = CLog.GetLogger("WebEventHandler");

        /// <summary>
        /// Handles events that occur before an action occurs, such as when a user adds a list.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        /// <returns>Holds information returned from the remote event.</returns>
        public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {
            SPRemoteEventResult result = new SPRemoteEventResult();
            return result;
        }
     
        /// <summary>
        /// Handles events that occur after an action occurs, such as after a user adds an list to a web.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        public void ProcessOneWayEvent(SPRemoteEventProperties properties)
        {
            theLog.Debug("ProcessOneWayEvent enter,type:" + properties.EventType);
            switch (properties.EventType)
            {
                case SPRemoteEventType.ListAdded:
                    ProcessListAddedEvent(properties);
                    break;
                default:
                    break;
            }
        }
        private void ProcessListAddedEvent(SPRemoteEventProperties properties)
        {
            try
            {
                if (!SPOEUtility.CheckSupportedListType(properties.ListEventProperties.TemplateId))
                {
                    return;
                }
                using (ClientContext clientContext = TokenHelper.CreateRemoteEventReceiverClientContext(properties))
                {
                    if (clientContext != null)
                    {
                        Guid listId = properties.ListEventProperties.ListId;
                        Web currentWeb = clientContext.Web;
                        clientContext.Load(currentWeb, d => d.Url,d=>d.Lists);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        List list = currentWeb.Lists.GetById(listId);
                        SPOEUtility.ListRemoteEventRevieverUrl = "https://" + System.Configuration.ConfigurationManager.AppSettings.Get("HostedAppHostNameOverride") + "/Services/ListEventHandler.svc";
                        List<List> lists = new List<List>
                        {
                            list
                        };
                        //get listSetting url
                        string editListUrl = "";
                        Web rootWeb = clientContext.Site.RootWeb;
                        clientContext.Load(rootWeb, d => d.UserCustomActions);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        foreach (var action in rootWeb.UserCustomActions)
                        {
                            if (action.Title.Equals("SPOLE DUMB ITEM", StringComparison.OrdinalIgnoreCase))
                            {
                                editListUrl = action.Url.Replace("View", "ListSettingView"); ;
                                break;
                            }
                        }
                        //add event and ECBAction
                        SPOEUtility.AddEnforcerToLibaries(clientContext, lists, editListUrl, false,new List<string>());
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Debug("ProcessListAddedEvent error:"+ex.ToString());
            }
        }
    }
}
