using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sontiq.Models
{
    public class LoginDTO
    {

        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName => FirstName + " " + LastName;

        public string UserType { get; set; }

        public string WorkCaseID { get; set; }

        public string PartnerID { get; set; }

        public string SubscriptionKey { get; set; }

        public LoginDTO()
        {

        }

        public LoginDTO(int userId,
            string firstName,
            string lastName,
            string userType,
            string workCaseID,
            string partnerID,
            string subscriptionKey)
        {
            Id = userId;
            FirstName = firstName;
            LastName = lastName;
            UserType = userType;
            WorkCaseID = workCaseID;
            PartnerID = partnerID;
            SubscriptionKey = subscriptionKey;
        }
    }
}