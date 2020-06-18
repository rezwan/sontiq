using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Santiq.Models
{
    public class Alert
    {
        public int Id { get; set; }
        public bool IsThreat { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string ServiceKey { get; set; }
        public string UserId { get; set; }
        public bool UserIsChild { get; set; }
        public string GeneratedOn { get; set; }
        public string AcknowledgedOn { get; set; }
        public int Viewed { get; set; }
        public string AlertTypeName { get; set; }
        public string Category { get; set; }
        public string AvailableSubResource { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public string DisplayName { get; set; }
        public string ResolveDate { get; set; }
        public string ThreatDate { get; set; }
        public string ServiceType { get; set; }
        public string CreatedDate { get; set; }
        public string CreatedTime { get; set; }
        public string Type { get; set; }
        public string FirstViewDate { get; set; }
        public bool HasError { get; set; }
        public string CaseId { get; set; }
        public string AlertCategory { get; set; }
        public string[] Errors { get; set; }
        public string[] TitleFields { get; set; }
        public string[] MonitorTypes { get; set; }
    }
}
