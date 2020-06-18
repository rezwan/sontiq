using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Santiq.Service.Utils;

namespace Santiq.Service
{
    public class AlertServiceIDF : AlertService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private ISession _session => _httpContextAccessor.HttpContext.Session;

        public AlertServiceIDF(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        public override void AddToRequestParam()
        {
            List<dynamic> paramList = new List<dynamic>();
            dynamic reqParam = new ExpandoObject();
            reqParam.abc = "efg";
            RequestHeaders.Add(reqParam);
        }

        public override string GetServiceEndPoint()
        {
            _session.SetString("Test", "Ben Rules!");
            var message = _session.GetString("Test");
            var appSettingsJson = AppSettingsJson.GetIDFAlertServiceURI(1);
            return appSettingsJson;
        }
    }
}
