using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Santiq.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Santiq.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        [HttpGet]
        public UserInfo Get()
        {
            UserInfo userInfo = new UserInfo("4152945", "Abul Kalam", "", "Azad", "House# 32, Road# 7", "Dhanmondi", "Dhaka", "Dhaka", "1205", "07-08-****", "azad@nuarca.com", "", "", "+880 1716748869", "", "", "", "", "");
            return userInfo;
        }

    }
}
