using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Santiq.Data;
using Santiq.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Santiq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertsController : ControllerBase
    {
        private readonly MockAlertRepo _repository = new MockAlertRepo();
        // GET: api/<AlertsController>
        [HttpGet]
        public ActionResult <IEnumerable<Alert>> GetAllAlerts()
        {
            var alertItems = _repository.GetAllAlerts();
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
