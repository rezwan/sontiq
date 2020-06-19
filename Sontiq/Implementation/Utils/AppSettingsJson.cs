using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Sontiq.Implementation.Utils
{
    public static class AppSettingsJson
    {
        public static string GetEZSAlertServiceURI()
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            return appSettingsJson["externalURL:EZSAlertServiceURI"];
        }
        public static string GetIDFAlertServiceURI(long userId)
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            string uri = appSettingsJson["externalURL:IDFAlertServiceURI"];
            return uri.Replace("{user-id}", userId.ToString());
        }
        public static string GetEZSUserServicesURI()
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            return appSettingsJson["externalURL:EZSUserServicesURI"];
        }
        public static string GetIDFUserServicesURI()
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            return appSettingsJson["externalURL:IDFUserServicesURI"];
        }
        public static string GetEZSUserInfoURI()
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            return appSettingsJson["externalURL:EZSContactInfoURI"];
        }
        public static string GetIDFContactInfoURI(long userId)
        {
            var appSettingsJson = ConfigurationManager.GetAppSettings();
            string uri = appSettingsJson["externalURL:IDFContactInfoURI"];
            return uri.Replace("{user-id}", userId.ToString());
        }
    }
}
