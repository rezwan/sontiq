using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Sontiq.Implementation.Utils;
using Sontiq.Models;

namespace Sontiq.Implementation
{
    public abstract class AlertService
    {
        public AlertService()
        {
            AddToRequestParam();
        }

        protected abstract string GetServiceEndPoint();

        protected List<dynamic> RequestHeaders { get; } = new List<dynamic>();

        protected abstract void AddToRequestParam();

        public  List<AlertDTO> GetResponse()
        {
            List<AlertDTO> alertList = new List<AlertDTO>();

            var t = Task.Run(() => HTTPUtils.GetURI(new Uri(GetServiceEndPoint()), RequestHeaders));
            t.Wait();
            JArray j = JArray.Parse(t.Result);

            return GetObjectMapping(j);
        }

        protected abstract List<AlertDTO> GetObjectMapping(JArray javascirptArray);
    }
}
