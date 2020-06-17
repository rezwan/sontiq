using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Santiq.Data;
using Santiq.Models;

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
            return Ok(_repository.GetSubscriptionDetail(pageNo));
        }
    }
}
