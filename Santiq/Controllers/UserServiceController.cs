using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Santiq.Data;
using Santiq.Models;
using Microsoft.AspNetCore.Http;

namespace Santiq.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserServiceController : ControllerBase
    {

        private readonly MockUserSubscriptionRepo _repository = new MockUserSubscriptionRepo();
        
        [HttpGet]
        public ActionResult<SubscriptionDetail> Get(int pageNo)
        {
            const string sessionKey = "mySession";
            if (HttpContext.Session != null && HttpContext.Session.GetString(sessionKey) != null)
            {
                //var userInfo = _userRepository.GetUserServiceByUserId(pageNo, HttpContext.Session.GetString(sessionKey));
                return Ok(_repository.GetSubscriptionDetailByLoginUer(pageNo, HttpContext.Session.GetString(sessionKey)));
            }
            return Ok(_repository.GetSubscriptionDetail(pageNo));
        }
    }
}
