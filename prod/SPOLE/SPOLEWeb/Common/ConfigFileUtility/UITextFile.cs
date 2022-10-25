using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace SPOLEWeb.Common.ConfigFileUtility
{
    public class UITextFile : ConfigurationSection
    {
        private static ConfigurationProperty _property = new ConfigurationProperty(string.Empty, typeof(KeyValueElementCollection), null, ConfigurationPropertyOptions.IsDefaultCollection);
       
        [ConfigurationProperty("", Options = ConfigurationPropertyOptions.IsDefaultCollection)]
        private KeyValueElementCollection KeyValues
        {
            get { return (KeyValueElementCollection)base[_property]; }
            set { base[_property] = value; }
        }
        public string GuideViewTitle
        {
            get
            {
                if (KeyValues["GuideViewTitle"] == null) return string.Empty;
                return KeyValues["GuideViewTitle"].Value;
            }
            set
            {
                if (KeyValues["GuideViewTitle"] == null) KeyValues["GuideViewTitle"] = new KeyValueElement() { Key = "GuideViewTitle", Value = value };
                else KeyValues["GuideViewTitle"].Value = value;
            }
        }
        public string GuideViewMenutitle
        {
            get
            {
                if (KeyValues["GuideViewMenutitle"] == null) return string.Empty;
                return KeyValues["GuideViewMenutitle"].Value;
            }
            set
            {
                if (KeyValues["GuideViewMenutitle"] == null) KeyValues["GuideViewMenutitle"] = new KeyValueElement() { Key = "GuideViewMenutitle", Value = value };
                else KeyValues["GuideViewMenutitle"].Value = value;
            }
        }
        public string GuideViewMenuItemCon
        {
            get
            {
                if (KeyValues["GuideViewMenuItemCon"] == null) return string.Empty;
                return KeyValues["GuideViewMenuItemCon"].Value;
            }
            set
            {
                if (KeyValues["GuideViewMenuItemCon"] == null) KeyValues["GuideViewMenuItemCon"] = new KeyValueElement() { Key = "GuideViewMenuItemCon", Value = value };
                else KeyValues["GuideViewMenuItemCon"].Value = value;
            }
        }
        public string GuideViewMenuItemAct
        {
            get
            {
                if (KeyValues["GuideViewMenuItemAct"] == null) return string.Empty;
                return KeyValues["GuideViewMenuItemAct"].Value;
            }
            set
            {
                if (KeyValues["GuideViewMenuItemAct"] == null) KeyValues["GuideViewMenuItemAct"] = new KeyValueElement() { Key = "GuideViewMenuItemAct", Value = value };
                else KeyValues["GuideViewMenuItemAct"].Value = value;
            }
        }
        public string GuideViewMenuItemSite
        {
            get
            {
                if (KeyValues["GuideViewMenuItemSite"] == null) return string.Empty;
                return KeyValues["GuideViewMenuItemSite"].Value;
            }
            set
            {
                if (KeyValues["GuideViewMenuItemSite"] == null) KeyValues["GuideViewMenuItemSite"] = new KeyValueElement() { Key = "GuideViewMenuItemSite", Value = value };
                else KeyValues["GuideViewMenuItemSite"].Value = value;
            }
        }
        public string ActivationTitle
        {
            get
            {
                if (KeyValues["ActivationTitle"] == null) return string.Empty;
                return KeyValues["ActivationTitle"].Value;
            }
            set
            {
                if (KeyValues["ActivationTitle"] == null) KeyValues["ActivationTitle"] = new KeyValueElement() { Key = "ActivationTitle", Value = value };
                else KeyValues["ActivationTitle"].Value = value;
            }
        }
        public string ActivationDescriptionTitle
        {
            get
            {
                if (KeyValues["ActivationDescriptionTitle"] == null) return string.Empty;
                return KeyValues["ActivationDescriptionTitle"].Value;
            }
            set
            {
                if (KeyValues["ActivationDescriptionTitle"] == null) KeyValues["ActivationDescriptionTitle"] = new KeyValueElement() { Key = "ActivationDescriptionTitle", Value = value };
                else KeyValues["ActivationDescriptionTitle"].Value = value;
            }
        }
        public string ActivationDescriptionText
        {
            get
            {
                if (KeyValues["ActivationDescriptionText"] == null) return string.Empty;
                return KeyValues["ActivationDescriptionText"].Value;
            }
            set
            {
                if (KeyValues["ActivationDescriptionText"] == null) KeyValues["ActivationDescriptionText"] = new KeyValueElement() { Key = "ActivationDescriptionText", Value = value };
                else KeyValues["ActivationDescriptionText"].Value = value;
            }
        }
        public string ActivationOverviewTitle
        {
            get
            {
                if (KeyValues["ActivationOverviewTitle"] == null) return string.Empty;
                return KeyValues["ActivationOverviewTitle"].Value;
            }
            set
            {
                if (KeyValues["ActivationOverviewTitle"] == null) KeyValues["ActivationOverviewTitle"] = new KeyValueElement() { Key = "ActivationOverviewTitle", Value = value };
                else KeyValues["ActivationOverviewTitle"].Value = value;
            }
        }
        public string ActivationOverviewText
        {
            get
            {
                if (KeyValues["ActivationOverviewText"] == null) return string.Empty;
                return KeyValues["ActivationOverviewText"].Value;
            }
            set
            {
                if (KeyValues["ActivationOverviewText"] == null) KeyValues["ActivationOverviewText"] = new KeyValueElement() { Key = "ActivationOverviewText", Value = value };
                else KeyValues["ActivationOverviewText"].Value = value;
            }
        }
        public string ConfigurationTitle
        {
            get
            {
                if (KeyValues["ConfigurationTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationTitle"] == null) KeyValues["ConfigurationTitle"] = new KeyValueElement() { Key = "ConfigurationTitle", Value = value };
                else KeyValues["ConfigurationTitle"].Value = value;
            }
        }
        public string ConfigurationDescriptionTitle
        {
            get
            {
                if (KeyValues["ConfigurationDescriptionTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationDescriptionTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationDescriptionTitle"] == null) KeyValues["ConfigurationDescriptionTitle"] = new KeyValueElement() { Key = "ConfigurationDescriptionTitle", Value = value };
                else KeyValues["ConfigurationDescriptionTitle"].Value = value;
            }
        }
        public string ConfigurationDescriptionText
        {
            get
            {
                if (KeyValues["ConfigurationDescriptionText"] == null) return string.Empty;
                return KeyValues["ConfigurationDescriptionText"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationDescriptionText"] == null) KeyValues["ConfigurationDescriptionText"] = new KeyValueElement() { Key = "ConfigurationDescriptionText", Value = value };
                else KeyValues["ConfigurationDescriptionText"].Value = value;
            }
        }
        public string ConfigurationJPCHostTitle
        {
            get
            {
                if (KeyValues["ConfigurationJPCHostTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationJPCHostTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationJPCHostTitle"] == null) KeyValues["ConfigurationJPCHostTitle"] = new KeyValueElement() { Key = "ConfigurationJPCHostTitle", Value = value };
                else KeyValues["ConfigurationJPCHostTitle"].Value = value;
            }
        }
        public string ConfigurationCCHostTitle
        {
            get
            {
                if (KeyValues["ConfigurationCCHostTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationCCHostTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationCCHostTitle"] == null) KeyValues["ConfigurationCCHostTitle"] = new KeyValueElement() { Key = "ConfigurationCCHostTitle", Value = value };
                else KeyValues["ConfigurationCCHostTitle"].Value = value;
            }
        }
        public string ConfigurationClientIDTitle
        {
            get
            {
                if (KeyValues["ConfigurationClientIDTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationClientIDTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationClientIDTitle"] == null) KeyValues["ConfigurationClientIDTitle"] = new KeyValueElement() { Key = "ConfigurationClientIDTitle", Value = value };
                else KeyValues["ConfigurationClientIDTitle"].Value = value;
            }
        }
        public string ConfigurationClientSecureKeyTitle
        {
            get
            {
                if (KeyValues["ConfigurationClientSecureKeyTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationClientSecureKeyTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationClientSecureKeyTitle"] == null) KeyValues["ConfigurationClientSecureKeyTitle"] = new KeyValueElement() { Key = "ConfigurationClientSecureKeyTitle", Value = value };
                else KeyValues["ConfigurationClientSecureKeyTitle"].Value = value;
            }
        }
        public string ConfigurationDefaultBehaviorTitle
        {
            get
            {
                if (KeyValues["ConfigurationDefaultBehaviorTitle"] == null) return string.Empty;
                return KeyValues["ConfigurationDefaultBehaviorTitle"].Value;
            }
            set
            {
                if (KeyValues["ConfigurationDefaultBehaviorTitle"] == null) KeyValues["ConfigurationDefaultBehaviorTitle"] = new KeyValueElement() { Key = "ConfigurationDefaultBehaviorTitle", Value = value };
                else KeyValues["ConfigurationDefaultBehaviorTitle"].Value = value;
            }
        }
        public string BlockMessage
        {
            get
            {
                if (KeyValues["BlockMessage"] == null) return string.Empty;
                return KeyValues["BlockMessage"].Value;
            }
            set
            {
                if (KeyValues["BlockMessage"] == null) KeyValues["BlockMessage"] = new KeyValueElement() { Key = "BlockMessage", Value = value };
                else KeyValues["BlockMessage"].Value = value;
            }
        }
        public string TestConnectionFaildMessage
        {
            get
            {
                if (KeyValues["TestConnectionFaildMessage"] == null) return string.Empty;
                return KeyValues["TestConnectionFaildMessage"].Value;
            }
            set
            {
                if (KeyValues["TestConnectionFaildMessage"] == null) KeyValues["TestConnectionFaildMessage"] = new KeyValueElement() { Key = "TestConnectionFaildMessage", Value = value };
                else KeyValues["TestConnectionFaildMessage"].Value = value;
            }
        }
        public string LibSettingTitle
        {
            get
            {
                if (KeyValues["LibSettingTitle"] == null) return string.Empty;
                return KeyValues["LibSettingTitle"].Value;
            }
            set
            {
                if (KeyValues["LibSettingTitle"] == null) KeyValues["LibSettingTitle"] = new KeyValueElement() { Key = "LibSettingTitle", Value = value };
                else KeyValues["LibSettingTitle"].Value = value;
            }
        }
        public string ListSettingTitle
        {
            get
            {
                if (KeyValues["ListSettingTitle"] == null) return string.Empty;
                return KeyValues["ListSettingTitle"].Value;
            }
            set
            {
                if (KeyValues["ListSettingTitle"] == null) KeyValues["ListSettingTitle"] = new KeyValueElement() { Key = "ListSettingTitle", Value = value };
                else KeyValues["ListSettingTitle"].Value = value;
            }
        }
        public string ListSettingDescriptionTitle
        {
            get
            {
                if (KeyValues["ListSettingDescriptionTitle"] == null) return string.Empty;
                return KeyValues["ListSettingDescriptionTitle"].Value;
            }
            set
            {
                if (KeyValues["ListSettingDescriptionTitle"] == null) KeyValues["ListSettingDescriptionTitle"] = new KeyValueElement() { Key = "ListSettingDescriptionTitle", Value = value };
                else KeyValues["ListSettingDescriptionTitle"].Value = value;
            }
        }
        public string ListSettingDescription
        {
            get
            {
                if (KeyValues["ListSettingDescription"] == null) return string.Empty;
                return KeyValues["ListSettingDescription"].Value;
            }
            set
            {
                if (KeyValues["ListSettingDescription"] == null) KeyValues["ListSettingDescription"] = new KeyValueElement() { Key = "ListSettingDescription", Value = value };
                else KeyValues["ListSettingDescription"].Value = value;
            }
        }
        public string ListSettingColumnTitle
        {
            get
            {
                if (KeyValues["ListSettingColumnTitle"] == null) return string.Empty;
                return KeyValues["ListSettingColumnTitle"].Value;
            }
            set
            {
                if (KeyValues["ListSettingColumnTitle"] == null) KeyValues["ListSettingColumnTitle"] = new KeyValueElement() { Key = "ListSettingColumnTitle", Value = value };
                else KeyValues["ListSettingColumnTitle"].Value = value;
            }
        }
        public string SitePropertyTitle
        {
            get
            {
                if (KeyValues["SitePropertyTitle"] == null) return string.Empty;
                return KeyValues["SitePropertyTitle"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTitle"] == null) KeyValues["SitePropertyTitle"] = new KeyValueElement() { Key = "SitePropertyTitle", Value = value };
                else KeyValues["SitePropertyTitle"].Value = value;
            }
        }
        public string SitePropertyTopDescriptionTitle
        {
            get
            {
                if (KeyValues["SitePropertyTopDescriptionTitle"] == null) return string.Empty;
                return KeyValues["SitePropertyTopDescriptionTitle"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopDescriptionTitle"] == null) KeyValues["SitePropertyTopDescriptionTitle"] = new KeyValueElement() { Key = "SitePropertyTopDescriptionTitle", Value = value };
                else KeyValues["SitePropertyTopDescriptionTitle"].Value = value;
            }
        }
        public string SitePropertyTopDescription1
        {
            get
            {
                if (KeyValues["SitePropertyTopDescription1"] == null) return string.Empty;
                return KeyValues["SitePropertyTopDescription1"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopDescription1"] == null) KeyValues["SitePropertyTopDescription1"] = new KeyValueElement() { Key = "SitePropertyTopDescription1", Value = value };
                else KeyValues["SitePropertyTopDescription1"].Value = value;
            }
        }
        public string SitePropertyTopDescription2
        {
            get
            {
                if (KeyValues["SitePropertyTopDescription2"] == null) return string.Empty;
                return KeyValues["SitePropertyTopDescription2"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopDescription2"] == null) KeyValues["SitePropertyTopDescription2"] = new KeyValueElement() { Key = "SitePropertyTopDescription2", Value = value };
                else KeyValues["SitePropertyTopDescription2"].Value = value;
            }
        }
        public string SitePropertyTopDescription3
        {
            get
            {
                if (KeyValues["SitePropertyTopDescription3"] == null) return string.Empty;
                return KeyValues["SitePropertyTopDescription3"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopDescription3"] == null) KeyValues["SitePropertyTopDescription3"] = new KeyValueElement() { Key = "SitePropertyTopDescription3", Value = value };
                else KeyValues["SitePropertyTopDescription3"].Value = value;
            }
        }
        public string SitePropertyTopDescription4
        {
            get
            {
                if (KeyValues["SitePropertyTopDescription4"] == null) return string.Empty;
                return KeyValues["SitePropertyTopDescription4"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopDescription4"] == null) KeyValues["SitePropertyTopDescription4"] = new KeyValueElement() { Key = "SitePropertyTopDescription4", Value = value };
                else KeyValues["SitePropertyTopDescription4"].Value = value;
            }
        }
        public string SitePropertyBottomDescriptionTitle
        {
            get
            {
                if (KeyValues["SitePropertyBottomDescriptionTitle"] == null) return string.Empty;
                return KeyValues["SitePropertyBottomDescriptionTitle"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyBottomDescriptionTitle"] == null) KeyValues["SitePropertyBottomDescriptionTitle"] = new KeyValueElement() { Key = "SitePropertyBottomDescriptionTitle", Value = value };
                else KeyValues["SitePropertyBottomDescriptionTitle"].Value = value;
            }
        }
        public string SitePropertyBottomDescription
        {
            get
            {
                if (KeyValues["SitePropertyBottomDescription"] == null) return string.Empty;
                return KeyValues["SitePropertyBottomDescription"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyBottomDescription"] == null) KeyValues["SitePropertyBottomDescription"] = new KeyValueElement() { Key = "SitePropertyBottomDescription", Value = value };
                else KeyValues["SitePropertyBottomDescription"].Value = value;
            }
        }
        public string SitePropertyTopComboxTitle
        {
            get
            {
                if (KeyValues["SitePropertyTopComboxTitle"] == null) return string.Empty;
                return KeyValues["SitePropertyTopComboxTitle"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyTopComboxTitle"] == null) KeyValues["SitePropertyTopComboxTitle"] = new KeyValueElement() { Key = "SitePropertyTopComboxTitle", Value = value };
                else KeyValues["SitePropertyTopComboxTitle"].Value = value;
            }
        }
        public string SitePropertyMidComboxTitle
        {
            get
            {
                if (KeyValues["SitePropertyMidComboxTitle"] == null) return string.Empty;
                return KeyValues["SitePropertyMidComboxTitle"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyMidComboxTitle"] == null) KeyValues["SitePropertyMidComboxTitle"] = new KeyValueElement() { Key = "SitePropertyMidComboxTitle", Value = value };
                else KeyValues["SitePropertyMidComboxTitle"].Value = value;
            }
        }
        public string SitePropertyBottomTableTitle1
        {
            get
            {
                if (KeyValues["SitePropertyBottomTableTitle1"] == null) return string.Empty;
                return KeyValues["SitePropertyBottomTableTitle1"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyBottomTableTitle1"] == null) KeyValues["SitePropertyBottomTableTitle1"] = new KeyValueElement() { Key = "SitePropertyBottomTableTitle1", Value = value };
                else KeyValues["SitePropertyBottomTableTitle1"].Value = value;
            }
        }
        public string SitePropertyBottomTableTitle2
        {
            get
            {
                if (KeyValues["SitePropertyBottomTableTitle2"] == null) return string.Empty;
                return KeyValues["SitePropertyBottomTableTitle2"].Value;
            }
            set
            {
                if (KeyValues["SitePropertyBottomTableTitle2"] == null) KeyValues["SitePropertyBottomTableTitle2"] = new KeyValueElement() { Key = "SitePropertyBottomTableTitle2", Value = value };
                else KeyValues["SitePropertyBottomTableTitle2"].Value = value;
            }
        }
        public string SessionTimeoutMessage
        {
            get
            {
                if (KeyValues["SessionTimeoutMessage"] == null) return string.Empty;
                return KeyValues["SessionTimeoutMessage"].Value;
            }
            set
            {
                if (KeyValues["SessionTimeoutMessage"] == null) KeyValues["SessionTimeoutMessage"] = new KeyValueElement() { Key = "SessionTimeoutMessage", Value = value };
                else KeyValues["SessionTimeoutMessage"].Value = value;
            }
        }

        public string ErrorDescription1
        {
            get
            {
                if (KeyValues["ErrorDescription1"] == null) return string.Empty;
                return KeyValues["ErrorDescription1"].Value;
            }
            set
            {
                if (KeyValues["ErrorDescription1"] == null) KeyValues["ErrorDescription1"] = new KeyValueElement() { Key = "ErrorDescription1", Value = value };
                else KeyValues["ErrorDescription1"].Value = value;
            }
        }

        public string ErrorDescription2
        {
            get
            {
                if (KeyValues["ErrorDescription2"] == null) return string.Empty;
                return KeyValues["ErrorDescription2"].Value;
            }
            set
            {
                if (KeyValues["ErrorDescription2"] == null) KeyValues["ErrorDescription2"] = new KeyValueElement() { Key = "ErrorDescription2", Value = value };
                else KeyValues["ErrorDescription2"].Value = value;
            }
        }
        public string ErrorDescription3
        {
            get
            {
                if (KeyValues["ErrorDescription3"] == null) return string.Empty;
                return KeyValues["ErrorDescription3"].Value;
            }
            set
            {
                if (KeyValues["ErrorDescription3"] == null) KeyValues["ErrorDescription3"] = new KeyValueElement() { Key = "ErrorDescription3", Value = value };
                else KeyValues["ErrorDescription3"].Value = value;
            }
        }
    }
}