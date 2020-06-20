using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sontiq.Implementation;
using Sontiq.Models;
using Sontiq.Infrastructure;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sontiq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        [HttpPost]
        public async Task<LoginDTO> Post(UserLogin userLogin)
        {
            int intLoginId = 0;
            int.TryParse(userLogin.loginId, out intLoginId);

            ILoginService loginService = new LoginService();
            return await  loginService.login(intLoginId, userLogin.provider);
        }

        // GET: api/<LoginController>
        [HttpGet]
        public string Get(string userId, string provider )
        {
            const string sessionKey = "mySession";
            var value = HttpContext.Session.GetString(sessionKey);
            return value;
        }

    }

    public class UserLogin
    {
        public string loginId { get; set; }
        public string provider { get; set; }
    }
}
