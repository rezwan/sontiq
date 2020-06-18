using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Santiq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // GET: api/<LoginController>
        [HttpGet]
        public string Get()
        {
            const string sessionKey = "mySession";
            var value = HttpContext.Session.GetString(sessionKey);
            return value;
        }

        // POST api/<LoginController>
        [HttpPost]
        public void Post(string value)
        {
            const string sessionKey = "mySession";
            HttpContext.Session.SetString(sessionKey, value);
        }

    }
}
