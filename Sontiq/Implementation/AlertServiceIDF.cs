using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using Sontiq.Implementation.Utils;
using Sontiq.Models;

namespace Sontiq.Implementation
{
    public class AlertServiceIDF : AlertService
    {

        public AlertServiceIDF()
        {
        }

        protected override void AddToRequestParam()
        {
            List<dynamic> paramList = new List<dynamic>();
            dynamic reqParam = new ExpandoObject();
            reqParam.abc = "efg";
             
            // TODO: We will parse the value from request header or param
            RequestHeaders.Add(reqParam);
        }

        protected override List<AlertDTO> GetObjectMapping(JArray javascirptArray)
        {
            List<AlertDTO> items = ((JArray)javascirptArray).Select(x => new AlertDTO
            {
                ID = (int)x["alert_id"],
            }).ToList();

            return items;
        }

        protected override string GetServiceEndPoint()
        {
            var appSettingsJson = AppSettingsJson.GetIDFAlertServiceURI(1);
            return appSettingsJson;
        }
    }
}
