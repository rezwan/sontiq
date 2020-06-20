using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sontiq.Controllers;
using Sontiq.Infrastructure;
using Sontiq.Models;

namespace Sontiq.Implementation
{
    public class AlertManager : IAlertManager
    {
        public List<AlertDTO> GetAllAlertsAsync(AlertInputParam alertParams)
        {
            if (alertParams.PortalName == Constants.PORTAL_EZS)
            {
                AlertService alertService = new AlertServiceIDF();
                return alertService.GetResponse();
            }
            else if (alertParams.PortalName == Constants.PORTAL_IDF)
            {
                AlertService alertService = new AlertServiceIDF();
                return alertService.GetResponse();
            }
            else
            {
                return new List<AlertDTO>();
            }
        }
    }
}
