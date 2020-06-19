using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Santiq.Data;
using Santiq.Models;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Santiq.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {

        private readonly MockUserInfoRepo _repository = new MockUserInfoRepo();
        private readonly UserRepo _userRepository = new UserRepo();
        
        [HttpGet]
        public ActionResult<UserInfo> Get()
        {
            const string sessionKey = "mySession";
            if (HttpContext.Session != null && HttpContext.Session.GetString(sessionKey) != null)
            {
                var userInfo = _userRepository.GetUserInfo(HttpContext.Session.GetString(sessionKey));
                return Ok(userInfo);
            }
            return Ok(_repository.GetUserInfo());
        }

    }
}
