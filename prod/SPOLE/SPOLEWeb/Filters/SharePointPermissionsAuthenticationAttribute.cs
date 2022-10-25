﻿using Microsoft.SharePoint.Client;
using SPOEWeb.Controllers;
using SPOLEWeb.Common;
using System.Web.Mvc;

namespace SPOLEWeb.Filters
{
    //use this filter to make sure user's permission must equals to app's 
    public class SharePointPermissionsAuthenticationAttribute : ActionFilterAttribute
    {
        protected static CLog theLog = CLog.GetLogger("SharePointPermissionsAuthenticationFilter");
        protected string m_strWhere = "";

        public SharePointPermissionsAuthenticationAttribute(string strWhere)
        {
            m_strWhere = strWhere;
        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string strSPHostUrl = filterContext.HttpContext.Request.QueryString["SPHostUrl"];

            //get current user context
            var spContext = SharePointContextProvider.Current.GetSharePointContext(filterContext.HttpContext);
            if (spContext == null)
            {
                theLog.Error("spContext is null");
                // filterContext.Result = new ViewResult { ViewName = "Error" };
                goto RETRUN_ERROR;
            }

            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                if (clientContext != null)
                {
                    Web web = clientContext.Web;
                    clientContext.Load(web, oweb => oweb.CurrentUser, oweb => oweb.Title, oweb => oweb.Url, oweb => oweb.CurrentUser.LoginName, oweb => oweb.EffectiveBasePermissions);
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);

                    //make sure user's permission must equals to app's 
                    ClientContext appClientContext = Utility.GetSharePointApponlyClientContext(strSPHostUrl);
                    if (appClientContext != null)
                    {
                        Web appWeb = appClientContext.Web;

                        //get app permission
                        appClientContext.Load(appWeb, aweb => aweb.CurrentUser, aweb => aweb.CurrentUser.LoginName, aweb => aweb.EffectiveBasePermissions);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(appClientContext);

                        //compare user permission and app permission
                        if (web.EffectiveBasePermissions.Equals(appWeb.EffectiveBasePermissions))
                        {
                            theLog.Info("permission  equal to app");
                            return;
                        }
                        else
                        {
                            theLog.Error("permission not equal to app");
                        }
                    }
                }
            }
        RETRUN_ERROR:
            //return error
            if (m_strWhere.Equals("GuideView") ||
                m_strWhere.Equals("ActivateView") || m_strWhere.Equals("SiteSettingView") ||
                m_strWhere.Equals("ConfigView") || m_strWhere.Equals("ListSettingView")) 
            {
                ViewResult viewResult = new ViewResult { ViewName = "Error" };
                viewResult.ViewBag.ErrorWhere = "GeneralSetting";
                viewResult.ViewBag.ErrorDescription1 = SPOEUtility.UITextFile.ErrorDescription1;
                viewResult.ViewBag.ErrorDescription2 = SPOEUtility.UITextFile.ErrorDescription2;
                viewResult.ViewBag.ErrorDescription3 = SPOEUtility.UITextFile.ErrorDescription3;
                filterContext.Result = viewResult;
            }
            else
            {
                JsonResult jsonResult = new JsonResult();
                jsonResult.Data = SPOEUtility.UITextFile.SessionTimeoutMessage;
                filterContext.Result = jsonResult;
            }
        }
    }
}