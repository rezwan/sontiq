using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sontiq.Implementation;
using Sontiq.Infrastructure;
using Sontiq.Models;

namespace Sontiq.Controllers
{
    [Route("api-v2/[controller]")]
    [ApiController]
    public class DemoAlertController : ControllerBase
    {

        private readonly IAlertManager _alertManager;
        [HttpGet]
        public async Task<List<AlertDTO>> Get(AlertInputParam alertParams)
        {
            return _alertManager.GetAllAlertsAsync(alertParams);
        }
    }

    public class AlertInputParam
    {
        public string ServiceKey { get; set; }
        public string UserId { get; set; }
        public string[] Errors { get; set; }
        public string[] TitleFields { get; set; }
        public string[] MonitorTypes { get; set; }
        public string PortalName { get; set; }
    }
}