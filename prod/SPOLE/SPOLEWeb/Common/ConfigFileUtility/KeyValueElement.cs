using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace SPOLEWeb.Common.ConfigFileUtility
{
    public class KeyValueElement : ConfigurationElement
    {
        [ConfigurationProperty("key", IsRequired = true)]
        public string Key
        {
            get { return this["key"].ToString(); }
            set { this["key"] = value; }
        }

        [ConfigurationProperty("value")]
        public string Value
        {
            get { return this["value"].ToString(); }
            set { this["value"] = value; }
        }
    }
}