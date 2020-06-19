using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sontiq.Data;
using Sontiq.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sontiq.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {

        private readonly MockUserInfoRepo _repository = new MockUserInfoRepo();

        [HttpGet]
        public ActionResult<UserInfo> Get()
        {
            return Ok(_repository.GetUserInfo());
        }

    }
}
