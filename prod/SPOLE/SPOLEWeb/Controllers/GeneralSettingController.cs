using Microsoft.SharePoint.Client;
using Newtonsoft.Json;
using QueryCloudAZSDK.CEModel;
using SPOLEWeb.Models;
using SPOLEWeb;
using SPOLEWeb.Common;
using SPOLEWeb.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SPOEWeb.Controllers
{
    public class GeneralSettingController : Controller
    {
        protected static CLog theLog = CLog.GetLogger("GeneralSettingController");
        private string domainUrl = "";
        public static string m_strDumbItemUrl = null;
        public static string m_strEditListUrl = null;

        [SharePointPermissionsAuthentication("GuideView")]
        public ActionResult GuideView()
        {
            theLog.Debug("GuideView enter");
            try
            {
                var targetView = Request.QueryString["TargetView"];
                if (!string.IsNullOrEmpty(targetView))
                {
                    return RedirectToAction(targetView, new
                    {
                        SPHostUrl = Request.QueryString["SPHostUrl"]
                    });
                }
                ViewBag.GuideViewTitle = SPOEUtility.UITextFile.GuideViewTitle;
                ViewBag.GuideViewMenutitle = SPOEUtility.UITextFile.GuideViewMenutitle;
                ViewBag.GuideViewMenuItemAct = SPOEUtility.UITextFile.GuideViewMenuItemAct;
                ViewBag.GuideViewMenuItemCon = SPOEUtility.UITextFile.GuideViewMenuItemCon;
                ViewBag.GuideViewMenuItemSite = SPOEUtility.UITextFile.GuideViewMenuItemSite;
            }
            catch (Exception ex)
            {
                theLog.Error("GuideView error:" + ex.Message + ex.StackTrace);
                return RedirectToAction("Error", "Home");
            }
            return View();
        }
        [SharePointPermissionsAuthentication("ActivateView")]
        public ActionResult ActivateView()
        {
            try
            {
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                if (spContext == null)
                {
                    return RedirectToAction("Error", "Home");
                }
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if (clientContext != null)
                    {
                        Uri SharePointUrl = new Uri(Request.QueryString["SPHostUrl"]);
                        domainUrl = SharePointUrl.ToString();
                        Web web = clientContext.Web;
                        clientContext.Load(web, oweb => oweb.CurrentUser, oweb => oweb.Title, oweb => oweb.Url, oweb => oweb.CurrentUser.LoginName);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);

                        // Add nodes for setting
                        string pid = "0";
                        var znodeList = new List<ZNodeModel>();
                        AddSiteToZNode(clientContext, clientContext.Web, znodeList, pid);
                        ViewBag.data = JsonConvert.SerializeObject(znodeList);
                    }
                }
                ViewBag.ActivationTitle = SPOEUtility.UITextFile.ActivationTitle;
                ViewBag.ActivationDescriptionTitle = SPOEUtility.UITextFile.ActivationDescriptionTitle;
                ViewBag.ActivationDescriptionText = SPOEUtility.UITextFile.ActivationDescriptionText;
                ViewBag.ActivationOverviewTitle = SPOEUtility.UITextFile.ActivationOverviewTitle;
                ViewBag.ActivationOverviewText = SPOEUtility.UITextFile.ActivationOverviewText;
            }
            catch (Exception ex)
            {
                theLog.Error("ActivateView error:" + ex.Message + ex.StackTrace);
                return RedirectToAction("Error", "Home");
            }
            return View("ActivateView");
        }
        [SharePointPermissionsAuthentication("EnforceEntityFormSubmit")]
        public JsonResult EnforceEntityFormSubmit(List<ZNodeModel> znodeList)
        {
            bool bSuccess = true;
            //check authorization
            ClientContext clientCtx = Utility.GetSharePointCurrentUserClientContext(HttpContext);

            if (clientCtx == null)
            {
                theLog.Error("EnforceEntityFormSubmit error: you are not authorization");
                return Json(SPOEUtility.UITextFile.SessionTimeoutMessage);
            }
            List<string> listFailed = new List<string>();
            List<string> webFailed = new List<string>();
            try
            {
                var hostUrl = Request.QueryString["SPHostUrl"];
                if (znodeList == null)
                {
                    theLog.Debug("nodeList == null");
                }
                InitRemoteEventRecieverUrl();
                Uri sharePointUrl = new Uri(hostUrl);
                string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
                    sharePointUrl.Authority, TokenHelper.GetRealmFromTargetUrl(sharePointUrl)).AccessToken;
                using (ClientContext clientcontext = TokenHelper.GetClientContextWithAccessToken(hostUrl, apponlyAccessToken))
                {
                    clientcontext.Load(clientcontext.Web, web => web.Title, web => web.Url, web => web.Lists,web=>web.UserCustomActions,web=>web.AllProperties);
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientcontext);
                    if (string.IsNullOrWhiteSpace(m_strDumbItemUrl))
                    {
                        InitlizeCustomActionUrl(clientcontext);
                    }
                    //save selected list to root web property for spole extension app
                    SetSelectedListToRootWeb(clientcontext, znodeList);
                    ZNodeModel rootNode = znodeList[0];
                    UpdateEventStatus(znodeList, rootNode, clientcontext, listFailed, webFailed);
                }
            }
            catch(Exception ex)
            {
                theLog.Error("EnforceEntityFormSubmit error:"+ex.ToString());
                bSuccess = false;
            }
            string strFailed = "";
            if (listFailed.Count > 0)
            {
                strFailed += "\r\nFailed Lists: " + string.Join(", ", listFailed.ToArray());
                bSuccess = false;
            }
            if (webFailed.Count > 0)
            {
                strFailed += "\r\nFailed Webs: " + string.Join(", ", webFailed.ToArray());
                bSuccess = false;
            }
            if (bSuccess)
            {
                return Json("Activation successful");
            }
            else
            {
                if (!string.IsNullOrEmpty(strFailed))
                {
                    theLog.Error("EnforceEntityFormSubmit error: " + strFailed);
                    return Json("Cannot activate");
                }
                else
                {
                    return Json("Cannot activate");
                }
            }
        }
        [SharePointPermissionsAuthentication("ConfigView")]
        public ActionResult ConfigView()
        {
            try
            {
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                if (spContext == null)
                {
                    return RedirectToAction("Error", "Home");
                }
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if (clientContext != null)
                    {
                        Web web = clientContext.Web;
                        clientContext.Load(web, oweb => oweb.AllProperties);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        var generalSetInfo = SPOEUtility.GetGeneralSetInfo(web);
                        ViewBag.JavaPcHost = generalSetInfo.JavaPcHost;
                        ViewBag.OAUTHHost = generalSetInfo.OAUTHHost;
                        ViewBag.ClientSecureID = generalSetInfo.ClientSecureID;
                        ViewBag.ClientSecureKey = generalSetInfo.ClientSecureKey;
                        ViewBag.DefaultBehavior = SPOEUtility.GetDefaultBehavior(web) == PolicyResult.Deny ? "deny": "allow";

                        ViewBag.ConfigurationTitle = SPOEUtility.UITextFile.ConfigurationTitle;
                        ViewBag.ConfigurationDescriptionTitle = SPOEUtility.UITextFile.ConfigurationDescriptionTitle;
                        ViewBag.ConfigurationDescriptionText = SPOEUtility.UITextFile.ConfigurationDescriptionText;
                        ViewBag.ConfigurationJPCHostTitle = SPOEUtility.UITextFile.ConfigurationJPCHostTitle;
                        ViewBag.ConfigurationCCHostTitle = SPOEUtility.UITextFile.ConfigurationCCHostTitle;
                        ViewBag.ConfigurationClientIDTitle = SPOEUtility.UITextFile.ConfigurationClientIDTitle;
                        ViewBag.ConfigurationClientSecureKeyTitle = SPOEUtility.UITextFile.ConfigurationClientSecureKeyTitle;
                        ViewBag.ConfigurationDefaultBehaviorTitle = SPOEUtility.UITextFile.ConfigurationDefaultBehaviorTitle;
                        ViewBag.TestConnectionFaildMessage = SPOEUtility.UITextFile.TestConnectionFaildMessage;

                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("ConfigView error:" + ex.Message + ex.StackTrace);
                return RedirectToAction("Error", "Home");
            }

            return View("ConfigView");
        }
        [SharePointPermissionsAuthentication("ConfigurationViewSubmit")]
        public JsonResult ConfigurationViewSubmit(GeneralSetInfo generalSetInfo,string strDefaultBehavior)
        {
            bool saveResult = true;
            bool testConnectionResult = false;
            try
            {
                //check authorization
                ClientContext clientCtx = Utility.GetSharePointCurrentUserClientContext(HttpContext);
                if (clientCtx == null)
                {
                    theLog.Error("ConfigurationViewSubmit error: you are not authorization");
                    return Json(SPOEUtility.UITextFile.SessionTimeoutMessage);
                }
                var hostUrl = Request.QueryString["SPHostUrl"];
                Uri sharePointUrl = new Uri(hostUrl);
                string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
                    sharePointUrl.Authority, TokenHelper.GetRealmFromTargetUrl(sharePointUrl)).AccessToken;
                using (ClientContext clientContext = TokenHelper.GetClientContextWithAccessToken(hostUrl, apponlyAccessToken))
                {
                    Web web = clientContext.Web;
                    clientContext.Load(web, oweb => oweb.AllProperties);
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                    string strGeneralSetInfo = JsonConvert.SerializeObject(generalSetInfo);
                    saveResult = SPOEUtility.SetGeneralSetInfo(clientContext, strGeneralSetInfo) && SPOEUtility.SetDefaultBehavior(clientContext, strDefaultBehavior);
                    // init CloudAZQuery
                    CloudAZQuery.GetCloudAZQueryInstance(web).InitParams(generalSetInfo);
                    testConnectionResult = CloudAZQuery.CheckConnection(generalSetInfo.JavaPcHost, generalSetInfo.OAUTHHost, generalSetInfo.ClientSecureID, generalSetInfo.ClientSecureKey);
                }
            }
            catch (Exception ex)
            {
                theLog.Error("ConfigurationViewSubmit error:" + ex.Message);
                saveResult = false;
            }
            if (!saveResult)
            {
                return Json("Cannot save configuration");
            }
            if (!testConnectionResult)
            {
                return Json("test connection failed");
            }
            return Json("Configuration successfully saved");
        }
        [SharePointPermissionsAuthentication("ListSettingView")]
        public ActionResult ListSettingView()
        {
            try
            {
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                if (spContext == null)
                {
                    return RedirectToAction("Error", "Home");
                }
                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if (clientContext != null)
                    {
                        string listId = Request.QueryString["listId"];
                        listId = listId.Substring(1, listId.Length - 2);
                        Web web = clientContext.Web;
                        clientContext.Load(web, oweb => oweb.CurrentUser, oweb => oweb.Lists, oweb => oweb.Url, oweb => oweb.CurrentUser.LoginName);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        List list = web.Lists.GetById(new Guid(listId));
                        clientContext.Load(list, d => d.BaseTemplate, d => d.Fields);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        bool isList = false;
                        if (SPOEUtility.SupportedListTypes.Contains(list.BaseTemplate))
                        {
                            isList = true;
                        }
                        if (!isList)
                        {
                            ViewBag.Title = SPOEUtility.UITextFile.LibSettingTitle;
                        }
                        else
                        {
                            ViewBag.Title = SPOEUtility.UITextFile.ListSettingTitle;
                        }
                        ViewBag.DescriptionTitle = SPOEUtility.UITextFile.ListSettingDescriptionTitle;
                        ViewBag.Description = SPOEUtility.UITextFile.ListSettingDescription;
                        ViewBag.ColumnTitle = SPOEUtility.UITextFile.ListSettingColumnTitle;

                        //get selected columns
                        IniFiles libSettingFile = new IniFiles(Utility.GetConfigFolder() + "LibSetting.ini");
                        var strSelectedColumns = libSettingFile.IniReadValue(listId, SPOEUtility.ListSelectedColumns);
                        Dictionary<string, string> selectedColumns = JsonConvert.DeserializeObject<Dictionary<string, string>>(strSelectedColumns);
                        if (selectedColumns == null)
                        {
                            selectedColumns = new Dictionary<string, string>();
                        }
                        List<ZNodeModel> znodeList = new List<ZNodeModel>();
                        foreach (Field field in list.Fields)
                        {
                            ZNodeModel node = new ZNodeModel
                            {
                                id = field.InternalName,
                                name = field.Title + "(" + field.InternalName + ")"
                            };
                            if (selectedColumns.ContainsKey(field.InternalName))
                            {
                                node.@checked = true;
                            }
                            znodeList.Add(node);
                        }
                        znodeList = znodeList.OrderBy(p => p.name).ToList();
                        ViewBag.columns = JsonConvert.SerializeObject(znodeList);
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("LibSettingView error:" + ex.ToString());
                return RedirectToAction("Error", "Home");
            }
            return View();
        }
        public JsonResult ListSettingViewSubmit(string selectedColumns)
        {
            //check authorization
            ClientContext clientCtx = Utility.GetSharePointCurrentUserClientContext(HttpContext);
            if (clientCtx == null)
            {
                return Json(SPOEUtility.UITextFile.SessionTimeoutMessage);
            }
            try
            {
                string listId = Request.QueryString["listId"];
                listId = listId.Substring(1, listId.Length - 2);
                IniFiles libSettingFile = new IniFiles(Utility.GetConfigFolder() + "LibSetting.ini");
                libSettingFile.IniWriteValue(listId, SPOEUtility.ListSelectedColumns, selectedColumns);
                return Json("Library setting successfully saved");
            }
            catch (Exception ex)
            {
                theLog.Error("LibSettingSubmit error:" + ex.Message + ex.StackTrace);
                return Json("Cannot save library setting");
            }
        }

        [AllowOriginAccessAttribute]
        public ActionResult GetSelectedFields()
        {
            //we may add the apptoken to do authenticate later
            //ClientContext clientCtx = Utility.GetSharePointApponlyClientContext(Request.QueryString["SPHostUrl"]);
            //if (clientCtx == null)
            //{
            //    return Json(SPOEUtility.UITextFile.SessionTimeoutMessage);
            //}
            try
            {
                string listId = Request.QueryString["listId"];
                listId = listId.Substring(1, listId.Length - 2);
                //get selected columns
                IniFiles libSettingFile = new IniFiles(Utility.GetConfigFolder() + "LibSetting.ini");
                var strSelectedColumns = libSettingFile.IniReadValue(listId, SPOEUtility.ListSelectedColumns);
                return Json(strSelectedColumns,JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                theLog.Error("GetSelectedField error:" + ex.Message + ex.StackTrace);
                return new HttpStatusCodeResult(500,"Cannot GetSelectedField");
            }
        }
        [SharePointPermissionsAuthentication("SiteSettingView")]
        public ActionResult SiteSettingView()
        {
            try
            {
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                if (spContext == null)
                {
                    return RedirectToAction("Error", "Home");
                }

                using (var clientContext = spContext.CreateUserClientContextForSPHost())
                {
                    if (clientContext != null)
                    {
                        Web web = clientContext.Web;
                        clientContext.Load(web, oweb => oweb.AllProperties, oweb => oweb.Title, oweb => oweb.Url);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        var allProperties = web.AllProperties;
                        //get all sites && selected properties
                        List<ZSiteNodeModel> sitesNodeList = new List<ZSiteNodeModel>();
                        if (allProperties.FieldValues.ContainsKey(SPOEUtility.SitePropertyLevel))
                        {
                            ViewBag.SitePropertyLevel = allProperties.FieldValues[SPOEUtility.SitePropertyLevel].ToString();
                        }
                        if (allProperties.FieldValues.ContainsKey(SPOEUtility.SitePropertyList))
                        {
                            var siteJson = allProperties.FieldValues[SPOEUtility.SitePropertyList].ToString();
                            sitesNodeList = JsonConvert.DeserializeObject<List<ZSiteNodeModel>>(siteJson);
                        }
                        if (sitesNodeList == null)
                        {
                            sitesNodeList = new List<ZSiteNodeModel>();
                        }
                        //check 
                        ZSiteNodeModel node = null;

                        List<ZSiteNodeModel> znodeList = new List<ZSiteNodeModel>();
                        ZSiteNodeModel rootNode = new ZSiteNodeModel
                        {
                            name = web.Title,
                            id = web.Url,
                            pId = "0",
                            isLoaded = true,
                            isParent = true
                        };
                        node = sitesNodeList.Where(p => p.id == web.Url).FirstOrDefault();
                        rootNode.siteProperties = GetWebProperty(web, node);
                        znodeList.Add(rootNode);

                        WebCollection subwebs = clientContext.Web.GetSubwebsForCurrentUser(null);
                        clientContext.Load(subwebs, webs => webs.Include(p => p.Title, p => p.Url, p => p.AllProperties));
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                        foreach (Web cellWeb in subwebs)
                        {
                            ZSiteNodeModel subNode = new ZSiteNodeModel
                            {
                                name = cellWeb.Title,
                                id = cellWeb.Url,
                                pId = web.Url,

                                isParent = true
                            };
                            node = sitesNodeList.Where(p => p.id == cellWeb.Url).FirstOrDefault();
                            subNode.siteProperties = GetWebProperty(cellWeb, node);
                            znodeList.Add(subNode);
                        }
                        ViewBag.data = JsonConvert.SerializeObject(znodeList);
                        ViewBag.Title = SPOEUtility.UITextFile.SitePropertyTitle;
                        ViewBag.TopDescriptionTitle = SPOEUtility.UITextFile.SitePropertyTopDescriptionTitle;
                        ViewBag.TopDescription1 = SPOEUtility.UITextFile.SitePropertyTopDescription1;
                        ViewBag.TopDescription2 = SPOEUtility.UITextFile.SitePropertyTopDescription2;
                        ViewBag.TopDescription3 = SPOEUtility.UITextFile.SitePropertyTopDescription3;
                        ViewBag.TopDescription4 = SPOEUtility.UITextFile.SitePropertyTopDescription4;
                        ViewBag.BottomDescriptionTitle = SPOEUtility.UITextFile.SitePropertyBottomDescriptionTitle;
                        ViewBag.BottomDescription = SPOEUtility.UITextFile.SitePropertyBottomDescription;
                        ViewBag.TopComboxTitle = SPOEUtility.UITextFile.SitePropertyTopComboxTitle;
                        ViewBag.MidComboxTitle = SPOEUtility.UITextFile.SitePropertyMidComboxTitle;
                        ViewBag.BottomTableTitle1 = SPOEUtility.UITextFile.SitePropertyBottomTableTitle1;
                        ViewBag.BottomTableTitle2 = SPOEUtility.UITextFile.SitePropertyBottomTableTitle2;
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("SiteSettingView error:" + ex.Message + ex.StackTrace);
                return RedirectToAction("Error", "Home");
            }
            return View("SiteSettingView");
        }

        [SharePointPermissionsAuthentication("SiteProperty-FormSubmit")]
        public JsonResult SitePropertySubmit(string SitePropertyLevel, List<ZSiteNodeModel> znodeList)
        {
            //check authorization
            ClientContext clientContext = Utility.GetSharePointCurrentUserClientContext(HttpContext);
            if (clientContext == null)
            {
                theLog.Error("SitePropertySubmit error: you are not authorization");
                return Json(SPOEUtility.UITextFile.SessionTimeoutMessage);
            }
            try
            {
                Web web = clientContext.Web;
                clientContext.Load(web,oweb=>oweb.AllProperties);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                var allProperties = web.AllProperties;
                web.AllProperties[SPOEUtility.SitePropertyLevel] = SitePropertyLevel;
                web.AllProperties[SPOEUtility.SitePropertyList] = JsonConvert.SerializeObject(znodeList);
                web.Update();
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                return Json("Site property successfully saved");
            }
            catch (Exception ex)
            {
                theLog.Error("LibSettingSubmit error:" + ex.Message + ex.StackTrace);
                return Json("Cannot save Site property");
            }
        }
        public JsonResult AsyncSubWebPropperty(string id)
        {
            var znodeList = new List<ZSiteNodeModel>();
            var result = "";
            try
            {
                var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);
                if (spContext == null)
                {
                    theLog.Debug("spContext is null");
                }
                using (ClientContext clientContext = Utility.GetSharePointApponlyClientContext(id))
                {
                    clientContext.Load(clientContext.Site, p => p.Url);
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
                    GetSubWebProperty(clientContext, id, znodeList);
                    result = JsonConvert.SerializeObject(znodeList);
                    return Json(result);
                }
            }
            catch (Exception ex)
            {
                theLog.Error("AsyncSubSiteNode error:" + ex.Message + ex.StackTrace);
                znodeList = new List<ZSiteNodeModel>();
                var node = new ZSiteNodeModel();
                node.name = "failed,please try again";
                node.id = Guid.NewGuid().ToString();
                node.pId = id;
                znodeList.Add(node);
                result = JsonConvert.SerializeObject(znodeList);
                return Json(result);
            }
        }

        public JsonResult AsyncSubSiteNode(string id, string isParent)
        {
            var znodeList = new List<ZNodeModel>();
            var result = "";
            try
            {
                if (isParent == "true")
                {
                    using (ClientContext clientContext = Utility.GetSharePointApponlyClientContext(id))
                    {
                        domainUrl = Request.QueryString["SPHostUrl"];
                        GetZNodeFromSubsite(clientContext, id, znodeList);
                        result = JsonConvert.SerializeObject(znodeList);
                        return Json(result);
                    }
                }
            }
            catch (Exception ex)
            {
                theLog.Error("AsyncSubSiteNode error:" + ex.Message + ex.StackTrace);
            }
            znodeList = new List<ZNodeModel>();
            var node = new ZNodeModel();
            node.name = "failed,please try again";
            node.id = Guid.NewGuid().ToString();
            node.pId = id;
            znodeList.Add(node);
            result = JsonConvert.SerializeObject(znodeList);
            return Json(result);
        }
        public void SetSelectedListToRootWeb(ClientContext clientContext, List<ZNodeModel> znodeList)
        {
            Web web = clientContext.Web;
            Dictionary<string,string> selectedList = znodeList.Where(d => d.isParent == false && d.@checked == true).ToDictionary(key=>key.id,key=>key.name);
            string strSelectedList = JsonConvert.SerializeObject(selectedList);
            web.AllProperties[SPOEUtility.SelectedListsForActivation] = strSelectedList;
            web.Update();
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
        }
        private List<SitePropertyModel> GetWebProperty(Web web, ZSiteNodeModel node)
        {
            List<SitePropertyModel> siteProperties = new List<SitePropertyModel>();
            try
            {
                foreach (KeyValuePair<string, object> dic in web.AllProperties.FieldValues)
                {
                    var prop = new SitePropertyModel();
                    prop.displayName = dic.Key;
                    // we skip our custom  properties,these shouldnot display in UI
                    if (prop.displayName == "" || prop.displayName == SPOEUtility.GeneralSetInfoName ||
                        prop.displayName == SPOEUtility.DefaultBehaviorName || prop.displayName == SPOEUtility.SitePropertyLevel
                        || prop.displayName == SPOEUtility.SitePropertyList || prop.displayName == SPOEUtility.SelectedListsForActivation)
                    {
                        continue;
                    }
                    if (node != null)
                    {
                        var property = node.siteProperties.Where(p => p.displayName == dic.Key).FirstOrDefault();
                        if (property != null)
                        {
                            prop.@checked = true;
                        }
                    }
                    siteProperties.Add(prop);
                }
                siteProperties = siteProperties.OrderBy(p => p.displayName).ToList();
            }
            catch (Exception ex)
            {
                var prop = new SitePropertyModel();
                prop.displayName = "failed,please try again";
                siteProperties.Add(prop);
                theLog.Error("GetWebProperty error:" + ex.Message + ex.StackTrace);
            }
            return siteProperties;
        }
        private void GetSubWebProperty(ClientContext clientContext, string id, List<ZSiteNodeModel> znodeList)
        {
            WebCollection subwebs = clientContext.Web.GetSubwebsForCurrentUser(null);
            clientContext.Load(subwebs, webs => webs.Include(p => p.Title, p => p.Url, p => p.AllProperties));
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            //read site property from file
            List<ZSiteNodeModel> sitesNodeList = new List<ZSiteNodeModel>();
            Web rootWeb = SPOEUtility.LoadRootWeb(clientContext);
            var allProperties = rootWeb.AllProperties;
            if (allProperties.FieldValues.ContainsKey(SPOEUtility.SitePropertyList))
            {
                var siteJson = allProperties.FieldValues[SPOEUtility.SitePropertyList].ToString();
                sitesNodeList = JsonConvert.DeserializeObject<List<ZSiteNodeModel>>(siteJson);
            }
            if (sitesNodeList == null)
            {
                sitesNodeList = new List<ZSiteNodeModel>();
            }
            ZSiteNodeModel node = null;
            foreach (Web cellWeb in subwebs)
            {
                ZSiteNodeModel subNode = new ZSiteNodeModel();
                subNode.name = cellWeb.Title;
                subNode.id = cellWeb.Url;
                subNode.pId = id;
                subNode.isParent = true;
                node = sitesNodeList.Where(p => p.id == cellWeb.Url).FirstOrDefault();
                subNode.siteProperties = GetWebProperty(cellWeb, node);
                znodeList.Add(subNode);
            }
        }
        private void GetZNodeFromSubsite(ClientContext clientContext, string id, List<ZNodeModel> znodeList)
        {
            clientContext.Load(clientContext.Web, d => d.Lists.Include(l => l.Title, l => l.Id, l => l.BaseTemplate, l => l.EventReceivers.Include(e => e.ReceiverName)), d => d.Title, d => d.Url);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            GetListNodes(clientContext, znodeList, id);
            GetSubSiteNodes(clientContext, znodeList, id);
        }
        private void AddSiteToZNode(ClientContext clientContext, Web web, List<ZNodeModel> znodeList, string pid)
        {
            clientContext.Load(web, oweb => oweb.Title, oweb => oweb.Url);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            string thiswebdomain = web.Url.Substring(0, web.Url.LastIndexOf(".com"));
            string tempdomain = domainUrl.Substring(0, domainUrl.LastIndexOf(".com"));
            if (thiswebdomain.Equals(tempdomain))
            {
                var node = new ZNodeModel();
                node.name = web.Title;
                node.id = web.Url;
                node.pId = pid;
                node.isParent = true;
                node.isLoaded = true;
                znodeList.Add(node);

                Uri site = new Uri(web.Url);
                string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
                        site.Authority, TokenHelper.GetRealmFromTargetUrl(site)).AccessToken;
                using (ClientContext subClientContext = TokenHelper.GetClientContextWithAccessToken(web.Url, apponlyAccessToken))
                {
                    subClientContext.Load(subClientContext.Web, subweb => subweb.Title, subweb => subweb.Url,
                        subweb => subweb.Lists.Include(olist => olist.Title, olist => olist.Id, olist => olist.BaseTemplate,
                        olist => olist.EventReceivers.Include(eventReceiver => eventReceiver.ReceiverName)));
                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(subClientContext);
                    pid = node.id;
                    GetListNodes(subClientContext, znodeList, pid);
                    GetSubSiteNodes(subClientContext, znodeList, pid);
                }
            }
        }
        private void GetListNodes(ClientContext clientContext, List<ZNodeModel> znodeList, string pid)
        {
            ListCollection lists = clientContext.Web.Lists;
            foreach (List cellList in lists)
            {
                if (SPOEUtility.CheckSupportedListType(cellList.BaseTemplate))
                {
                    AddListToZNode(clientContext, cellList, znodeList, pid);
                }
            }
        }
        private void GetSubSiteNodes(ClientContext clientContext, List<ZNodeModel> znodeList, string pid)
        {
            WebCollection subwebs = clientContext.Web.GetSubwebsForCurrentUser(null);
            clientContext.Load(subwebs);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            foreach (Web cellWeb in subwebs)
            {
                AddSubsiteToZNode(clientContext, cellWeb, znodeList, pid);
            }
        }
        private void AddSubsiteToZNode(ClientContext clientContext, Web web, List<ZNodeModel> znodeList, string pid)
        {
            clientContext.Load(web, oweb => oweb.Title, oweb => oweb.Url);
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            string thiswebdomain = web.Url.Substring(0, web.Url.LastIndexOf(".com"));
            string tempdomain = domainUrl.Substring(0, domainUrl.LastIndexOf(".com"));
            if (thiswebdomain.Equals(tempdomain))
            {
                var node = new ZNodeModel();
                node.name = web.Title;
                node.id = web.Url;
                node.pId = pid;
                node.isParent = true;
                znodeList.Add(node);
            }
        }
        private void AddListToZNode(ClientContext clientContext, List list, List<ZNodeModel> znodeList, string pid)
        {
            var node = new ZNodeModel();
            node.name = list.Title;
            node.id = list.Id.ToString();
            node.pId = pid;
            node.@checked = SPOEUtility.CheckEvent(clientContext.Web, list);
            znodeList.Add(node);
        }
        private void InitRemoteEventRecieverUrl()
        {
            string fullUrl = Request.Url.AbsoluteUri;
            string pagesUrl = fullUrl.Substring(0, fullUrl.
                LastIndexOf("GeneralSetting/EnforceEntityFormSubmit", StringComparison.OrdinalIgnoreCase));
            if (pagesUrl.Contains("http://"))
            {
                pagesUrl = pagesUrl.Replace("http://", "https://");
            }
            SPOEUtility.ListRemoteEventRevieverUrl = pagesUrl + "Services/ListEventHandler.svc";
            SPOEUtility.WebRemoteEventRevieverUrl = pagesUrl + "Services/WebEventHandler.svc";
            if (SPOEUtility.SPOConfiguration != null)
            {
                foreach(var jSLink in SPOEUtility.SPOConfiguration.JSLinks)
                {
                    jSLink.address = pagesUrl + "Scripts/" + jSLink.file;
                }
            }
        }
        public static bool InitlizeCustomActionUrl(ClientContext clientcontext)
        {
            // query ECB Action url
            try
            {
                UserCustomActionCollection userCustomActionColl = clientcontext.Web.UserCustomActions;
                clientcontext.Load(userCustomActionColl);
                ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientcontext);

                foreach (var action in userCustomActionColl)
                {
                    if (action.Title.Equals("SPOLE DUMB ITEM", StringComparison.OrdinalIgnoreCase))
                    {
                        m_strDumbItemUrl = action.Url;
                        break;
                    }
                }
                //create editList url
                if (string.IsNullOrWhiteSpace(m_strEditListUrl))
                {
                    m_strEditListUrl = m_strDumbItemUrl.Replace("View", "ListSettingView");
                }

                return true;
            }
            catch (System.Exception ex)
            {
                theLog.Error("Exception on InitlizeCustomActionUrl:" + ex.ToString());
                return false;
            }
        }
        private void UpdateEventStatus(List<ZNodeModel> znodeList, ZNodeModel rootNode, ClientContext clientcontext, List<string> listFailed, List<string> webFailed)
        {
            if (!rootNode.@checked)
            {
                //list
                List<List> ActiveListCollection = new List<List>();
                List<List> DeactiveListCollection = new List<List>();
                var listNode = znodeList.Where(p => p.isParent == false && p.pId == rootNode.id).ToList();
                foreach (var node in listNode)
                {
                    List list = clientcontext.Web.Lists.GetById(new Guid(node.id));
                    if (node.@checked)
                    {
                        ActiveListCollection.Add(list);
                    }
                    else
                    {
                        DeactiveListCollection.Add(list);
                    }
                }
                //reomve listAdded event from web
                //SPOEUtility.RemoveWebEvent(clientcontext);
                //subsite
                var siteNode = znodeList.Where(p => p.isParent == true && p.pId == rootNode.id).ToList();
                foreach (var node in siteNode)
                {
                    Uri subsiteUri = new Uri(node.id);
                    string apponlyAccessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal,
                            subsiteUri.Authority, TokenHelper.GetRealmFromTargetUrl(subsiteUri)).AccessToken;
                    using (ClientContext subsiteClientcontext = TokenHelper.GetClientContextWithAccessToken(node.id, apponlyAccessToken))
                    {
                        subsiteClientcontext.Load(subsiteClientcontext.Web, web => web.Url, web => web.Title, web => web.Lists,
                            web => web.EventReceivers,web=>web.UserCustomActions);
                        ExecuteQueryWorker.AddedWaitExecuteQueryTask(subsiteClientcontext);

                        UpdateEventStatus(znodeList, node, subsiteClientcontext, listFailed, webFailed);
                    }
                }              
                //add enforcer for selected list/library
                if (ActiveListCollection.Count > 0)
                {
                    SPOEUtility.AddEnforcerToLibaries(clientcontext, ActiveListCollection, m_strEditListUrl,false, listFailed);
                    SPOEUtility.AddCustomAction(clientcontext);
                }
                else
                {
                    SPOEUtility.RemoveCustomAction(clientcontext);
                }
                //remove enforcer for unselected list/library
                if (DeactiveListCollection.Count > 0)
                {
                    SPOEUtility.RemoveEnforcerToLibaries(clientcontext, DeactiveListCollection,false, listFailed);
                }
            }
            else
            {
                // activate for all subsite
                UpdateAllSubSiteEventStatus(clientcontext, clientcontext.Web, listFailed);
            }
        }
        private void UpdateAllSubSiteEventStatus(ClientContext clientContext, Web web, List<string> listFailed)
        {
            List<List> ActiveListCollection = new List<List>();
            clientContext.Load(web, d => d.Lists.Include(l => l.BaseTemplate));
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            foreach (List cellList in web.Lists)
            {
                if (SPOEUtility.CheckSupportedListType(cellList.BaseTemplate))
                {
                    ActiveListCollection.Add(cellList);
                }
            }
            if (ActiveListCollection.Count > 0)
            {
                SPOEUtility.AddEnforcerToLibaries(clientContext, ActiveListCollection, m_strEditListUrl,false, listFailed);
                SPOEUtility.AddCustomAction(clientContext);
            }
            //add listAddedEvent for web
            //SPOEUtility.AddWebEvent(clientContext,web);
            WebCollection subwebs = web.GetSubwebsForCurrentUser(null);
            clientContext.Load(subwebs, d => d.Include(p => p.Url));
            ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);
            foreach (Web cellWeb in subwebs)
            {
                UpdateAllSubSiteEventStatus(clientContext, cellWeb, listFailed);
            }
        }
    }
}