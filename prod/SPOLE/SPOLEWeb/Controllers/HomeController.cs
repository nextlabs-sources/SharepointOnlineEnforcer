using Microsoft.SharePoint.Client;
using SPOLEWeb.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPOLEWeb.Controllers
{
    public class HomeController : Controller
    {
        [SharePointContextFilter]
        public ActionResult Index()
        {
            User spUser = null;

            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);

            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                if (clientContext != null)
                {
                    spUser = clientContext.Web.CurrentUser;

                    clientContext.Load(spUser, user => user.Title);

                    ExecuteQueryWorker.AddedWaitExecuteQueryTask(clientContext);

                    ViewBag.UserName = spUser.Title;
                }
            }

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Error()
        {
            ViewBag.ErrorDescription2 = SPOEUtility.UITextFile.ErrorDescription2;
            ViewBag.ErrorDescription3 = SPOEUtility.UITextFile.ErrorDescription3;
            return View();
        }
    }
}
