using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    public class MockAlertRepo : IAlertRepo
    {
        public IEnumerable<Alert> GetAllAlerts()
        {
            var alerts = new List<Alert>
            {
                new Alert
                {
                    Id = 1,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34"
                },
                new Alert
                {
                    Id = 2,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34"
                },
                new Alert
                {
                    Id = 3,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34"
                },
                new Alert
                {
                    Id = 3,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34"
                },
                new Alert
                {
                    Id = 4,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34"
                },
            };

            return alerts;
        }

        public Alert GetAlertById(int id)
        {
            return new Alert
            {
                Id = 1,
                IsThreat = false,
                UserFirstName = "Atiq",
                UserLastName = "Ahammed",
                ServiceKey = "4foisWfsd3ee34"
            }; ;
        }
    }
}
