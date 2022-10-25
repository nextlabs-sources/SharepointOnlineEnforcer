using Microsoft.IdentityModel.S2S.Protocols.OAuth2;
using Microsoft.SharePoint.Client;
using System;
using System.Web;

namespace SPOLEWeb.Common
{
    public class Utility
    {
        private static CLog theLog = null;
        private static HttpServerUtility m_HttpServerUtility = null;
        private static string m_strApplicationPath = null;
        private static string m_strAppDataPath = null;

        public static void SetHttpServerUtility(HttpServerUtility server)
        {
            m_HttpServerUtility = server;
            theLog = CLog.GetLogger("Utility");
        }
        public static ClientContext GetSharePointApponlyClientContext(string siteUrl)
        {
            try
            {
                Uri obUri = new Uri(siteUrl);
                OAuth2AccessTokenResponse response = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal, obUri.Authority, TokenHelper.GetRealmFromTargetUrl(obUri));
                if (response != null)
                {
                    ClientContext clientContextAppOnly = TokenHelper.GetClientContextWithAccessToken(siteUrl, response.AccessToken);
                    if (clientContextAppOnly == null)
                    {
                        theLog.Debug(string.Format("GetSharePointApponlyClientContext  GetClientContextWithAccessToken return NULL. siteURL:{0}, accesssToken:{1}", siteUrl, response.AccessToken));
                    }
                    return clientContextAppOnly;
                }
                else
                {
                    theLog.Error(string.Format("GetSharePointApponlyClientContext GetAppOnlyAccessToken return NULL, siteUrl:{0}", siteUrl));
                }
            }
            catch (System.Exception ex)
            {
                theLog.Error(string.Format("GetSharePointApponlyClientContext Exception siteUrl:{0}, Exception:{1}", siteUrl, ex.ToString()));
            }

            return null;
        }


        public static ClientContext GetSharePointCurrentUserClientContext(HttpContextBase httpContext)
        {
            try
            {
                //get SharePoint context
                SharePointContext spContext = SharePointContextProvider.Current.GetSharePointContext(httpContext);
                if (spContext == null)
                {
                    throw new Exception("GetSharePointContext return null");
                }

                ClientContext clientContext = spContext.CreateUserClientContextForSPHost();
                return clientContext;
            }
            catch (System.Exception ex)
            {
                theLog.Error("GetSharePointCurrentUserClientContext exception:" + ex.ToString());
            }
            return null;
        }

        public static string GetAppDataFolder()
        {
            if (m_strAppDataPath == null)
            {
                m_strAppDataPath = Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData) + @"\NextLabs\SPOLE\";
                if (System.IO.Directory.Exists(m_strAppDataPath))
                {
                    System.IO.Directory.CreateDirectory(m_strAppDataPath);
                }
            }
            return m_strAppDataPath;
        }
		//create one config folder
        public static string GetConfigFolder()
        {
            string strFolder = Utility.GetAppDataFolder() + @"config";
            if (!System.IO.Directory.Exists(strFolder))
            {
                System.IO.Directory.CreateDirectory(strFolder);
            }

            return strFolder + "\\";
        }
        public static string GetAppFolder()
        {
            if (m_strApplicationPath == null)
            {
                m_strApplicationPath = m_HttpServerUtility.MapPath("/");
            }
            return m_strApplicationPath;
        }
        public static string GetUserPrincipalName(User spUser)
        {
            //check file lock status
            string strPrincipalName = "";
            try
            {
                strPrincipalName = spUser.UserPrincipalName;
            }
            catch (Exception)
            {
                //when file is not locked by user, we will get this exception.
                //when file is locked by user, we didn't get this exception. so we didn't need to process this exception.

            }
            return strPrincipalName;
        }
    }
}