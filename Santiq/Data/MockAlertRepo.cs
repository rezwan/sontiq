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
                    ServiceKey = "4foisWfsd3ee34",
                    UserId = "234",
                    UserIsChild = false,
                    GeneratedOn = "01-02-2020",
                    AcknowledgedOn = "03-02-2020",
                    Viewed = false,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05-02-2020"
                },
                new Alert
                {
                    Id = 123,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34",
                    UserId = "234",
                    UserIsChild = false,
                    GeneratedOn = "01-02-2020",
                    AcknowledgedOn = "03-02-2020",
                    Viewed = true,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "In Pregress",
                    Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05-02-2020"
                },
                new Alert
                {
                    Id = 987,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34",
                    UserId = "234",
                    UserIsChild = false,
                    GeneratedOn = "01-02-2020",
                    AcknowledgedOn = "03-02-2020",
                    Viewed = true,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "Resolved",
                    Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05-02-2020"
                },
                new Alert
                {
                    Id = 234,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34",
                    UserId = "234",
                    UserIsChild = false,
                    GeneratedOn = "01-02-2020",
                    AcknowledgedOn = "03-02-2020",
                    Viewed = true,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05-02-2020"
                },
                new Alert
                {
                    Id = 3456,
                    IsThreat = false,
                    UserFirstName = "Atiq",
                    UserLastName = "Ahammed",
                    ServiceKey = "4foisWfsd3ee34",
                    UserId = "234",
                    UserIsChild = false,
                    GeneratedOn = "01-01-2020",
                    AcknowledgedOn = "01-02-2020",
                    Viewed = false,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05-02-2020"
                },
            };

            return alerts;
        }

        public Alert GetAlertById(int id)
        {
            return new Alert
            {
                Id = 234,
                IsThreat = false,
                UserFirstName = "Atiq",
                UserLastName = "Ahammed",
                ServiceKey = "4foisWfsd3ee34",
                UserId = "234",
                UserIsChild = false,
                GeneratedOn = "01-02-2020",
                AcknowledgedOn = "03-02-2020",
                Viewed = true, 
                AlertTypeName = "Three Bureau Monitoring Alert",
                Category = "CREDIT",
                AvailableSubResource = "three-monitoring",
                Status = "New", 
                Description = "test Desctiopin sdas asfdsfj sdfasdf asdfasdf sfasdf sdfasdf sadfasdf sdf", 
                Title = "Credit Monitoring",
                DisplayName = "Credit Monitoring",
                ResolveDate = "05-02-2020"
            }; ;
        }
    }
}
