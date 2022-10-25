using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPOLEWeb
{
    /// <summary>
    /// Allow cross-domain requests
    /// </summary>
    public class AllowOriginAccessAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
            base.OnActionExecuting(filterContext);
        }
    }
}