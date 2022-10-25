using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPOLEWeb.Models
{


    // NOTE: Generated code may require at least .NET Framework 4.5 or .NET Core/Standard 2.0.
    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class SPOConfiguration
    {

        private SPOConfigurationJSLink[] jSLinksField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("JSLink", IsNullable = false)]
        public SPOConfigurationJSLink[] JSLinks
        {
            get
            {
                return this.jSLinksField;
            }
            set
            {
                this.jSLinksField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class SPOConfigurationJSLink
    {

        private string nameField;

        private string fileField;

        private string addressField;

        private string typeField;

        private int sequenceField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string file
        {
            get
            {
                return this.fileField;
            }
            set
            {
                this.fileField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string address
        {
            get
            {
                return this.addressField;
            }
            set
            {
                this.addressField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string type
        {
            get
            {
                return this.typeField;
            }
            set
            {
                this.typeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public int Sequence
        {
            get
            {
                return this.sequenceField;
            }
            set
            {
                this.sequenceField = value;
            }
        }
    }




}