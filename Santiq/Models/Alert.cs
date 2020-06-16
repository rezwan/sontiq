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
    }
}
