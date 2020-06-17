using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Santiq.Models
{
    public class SubscriptionDetail
    {
        public List<UserService> ServiceList { get; set; }

        public string SubscriptionType { get; set; }
        public double SubscriptionTotalPrice { get; set; }
        public bool PackageModel { get; set; }
        public string PackageName { get; set; }
        public string BillingDate { get; set; }
        public bool PartnerBilled { get; set; }
        public bool IsBusinessUser { get; set; }
        public bool AutoRenewTrialPeriod { get; set; }
        public bool IsSSOUser { get; set; }
        public bool ReacceptTermsAndConditions { get; set; }
        public string AssociationText { get; set; }
        public string ProvidedByName { get; set; }


        public bool HasError { get; set; }
        public string[] Errors { get; set; }
        public string CaseId { get; set; }
    }
}
