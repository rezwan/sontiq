using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sontiq.Controllers;
using Sontiq.Models;

namespace Sontiq.Infrastructure
{
    interface IAlertManager
    {
        List<AlertDTO> GetAllAlertsAsync(AlertInputParam alertParams);
    }
}
