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

        public abstract string GetServiceEndPoint();

        public List<dynamic> RequestHeaders { get; } = new List<dynamic>();

        public abstract void AddToRequestParam();

        public virtual List<AlertDTO> GetResponse()
        {
            List<AlertDTO> alertList = new List<AlertDTO>();
           // string payload = JsonConvert.SerializeObject(RequestHeaders);

           // HttpContent c = new StringContent(payload, Encoding.UTF8, "application/json");

            //var t = Task.Run(() => HTTPUtils.PostURI(new Uri(GetServiceEndPoint()), c));
            //t.Wait();

            var t = Task.Run(() => HTTPUtils.GetURI(new Uri(GetServiceEndPoint()), RequestHeaders));
            t.Wait();
            JArray j = JArray.Parse(t.Result);


            List<AlertDTO> items = ((JArray)j).Select(x => new AlertDTO
            {
                ID = (int)x["alert_id"],
            }).ToList();

            return items;
        }
    }
}
