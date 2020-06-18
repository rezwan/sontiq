using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    interface IAlertRepo
    {
        IEnumerable<Alert> GetAllAlerts(int pageNo);
        Alert GetAlertById(int id);
    }
}
