using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Santiq.Models
{
    public class UserService
    {
  
        public string DisplayName { get; set; }
        public string ServiceCode { get; set; }
        public bool Active { get; set; }
        public bool ReadyForPurchase { get; set; }
        public bool IsHidden { get; set; }
        public string ProductType { get; set; }
        public bool PartnerPaid { get; set; }
        public double MonthlyPrice { get; set; }
        public double AnnualPrice { get; set; }
        public bool Addon { get; set; }

        public UserService()
        {
        }

        public UserService(string displayName, string serviceCode, bool active, bool readyForPurchase, bool isHidden, string productType, bool partnerPaid, double monthlyPrice, double annualPrice, bool addon)
        {
            DisplayName = displayName;
            ServiceCode = serviceCode;
            Active = active;
            ReadyForPurchase = readyForPurchase;
            IsHidden = isHidden;
            ProductType = productType;
            PartnerPaid = partnerPaid;
            MonthlyPrice = monthlyPrice;
            AnnualPrice = annualPrice;
            Addon = addon;
        }

    }
}
