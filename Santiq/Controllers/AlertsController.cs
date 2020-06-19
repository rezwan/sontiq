using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Santiq.Data;
using Santiq.Models;
using Santiq.Service.Utils;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Santiq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertsController : ControllerBase
    {
        private readonly MockAlertRepo _repository = new MockAlertRepo();
        private readonly UserRepo _userRepository = new UserRepo();

        // GET: api/<AlertsController>
        [HttpGet]
        public ActionResult <IEnumerable<Alert>> GetAllAlerts(int pageNo)
        {
            const string sessionKey = "mySession";
            if (HttpContext.Session != null && HttpContext.Session.GetString(sessionKey) != null)
            {
                var alertItems2 = _userRepository.GetAlertByUserId(pageNo, HttpContext.Session.GetString(sessionKey));
                return Ok(alertItems2);
            }
            var alertItems = _repository.GetAllAlerts(pageNo);
            
            return Ok(alertItems);
        }
        [HttpGet("{id}")]
        public ActionResult<Alert> GetAlertById(int id)
        {
            var alert = _repository.GetAlertById(id);
            if (alert != null)
            {
                return Ok(alert);
            }

            return NotFound();
        }

    }
}
