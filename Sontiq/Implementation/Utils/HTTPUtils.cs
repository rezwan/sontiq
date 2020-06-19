using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Sontiq.Implementation.Utils
{
    public static class HTTPUtils
    {
        public static async Task<string> PostURI(Uri u, HttpContent c)
        {
            var response = string.Empty;
            using (var client = new HttpClient())
            {
                HttpResponseMessage result = await client.PostAsync(u, c);
                if (result.IsSuccessStatusCode)
                {
                    response = result.StatusCode.ToString();
                }
            }
            return response;
        }

        public static async Task<string> GetURI(Uri uri, List<dynamic> headerList)
        {
            var response = string.Empty;
            using (var client = new HttpClient())
            {
                foreach (var header in headerList)
                {
                    client.DefaultRequestHeaders.Add(header.key, header.value);
                }

                HttpResponseMessage result = await client.GetAsync(uri);
                if (result.IsSuccessStatusCode)
                {
                    response = await result.Content.ReadAsStringAsync();
                }
            }
            return response;
        }
    }
}
