using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    public class MockUserSubscriptionRepo : IUserSubscriptionRepo
    {
        private readonly MockUserServiceRepo _userServiceRepository = new MockUserServiceRepo();
        private readonly UserRepo _userRepository = new UserRepo();

        public SubscriptionDetail GetSubscriptionDetail(int pageNo)
        {
            SubscriptionDetail subscriptionDetail = new SubscriptionDetail();

            List<UserService> userServices = _userServiceRepository.GetPagedUserService(pageNo);
            subscriptionDetail.ServiceList = userServices;

            subscriptionDetail.SubscriptionType = "MONTHLY";
            subscriptionDetail.SubscriptionTotalPrice = 26.8500;
            subscriptionDetail.PackageModel = false;
            subscriptionDetail.PackageName = "";
            subscriptionDetail.BillingDate = "18";
            subscriptionDetail.PartnerBilled = false;
            subscriptionDetail.IsBusinessUser = false;
            subscriptionDetail.AutoRenewTrialPeriod = false;
            subscriptionDetail.IsSSOUser = false;
            subscriptionDetail.ReacceptTermsAndConditions = false;
            subscriptionDetail.AssociationText = "Provided By";
            subscriptionDetail.ProvidedByName = "EZShield";



            subscriptionDetail.HasError = false;
            subscriptionDetail.Errors = null;
            subscriptionDetail.CaseId = "0000000-0000-0000-0000";

            return subscriptionDetail;
        }

        public SubscriptionDetail GetSubscriptionDetailByLoginUer(int pageNo, string id)
        {
            SubscriptionDetail subscriptionDetail = new SubscriptionDetail();

            List<UserService> userServices = _userRepository.GetUserServiceByUserId(pageNo, id);
            subscriptionDetail.ServiceList = userServices;

            subscriptionDetail.SubscriptionType = "MONTHLY";
            subscriptionDetail.SubscriptionTotalPrice = 26.8500;
            subscriptionDetail.PackageModel = false;
            subscriptionDetail.PackageName = "";
            subscriptionDetail.BillingDate = "18";
            subscriptionDetail.PartnerBilled = false;
            subscriptionDetail.IsBusinessUser = false;
            subscriptionDetail.AutoRenewTrialPeriod = false;
            subscriptionDetail.IsSSOUser = false;
            subscriptionDetail.ReacceptTermsAndConditions = false;
            subscriptionDetail.AssociationText = "Provided By";
            subscriptionDetail.ProvidedByName = "EZShield";



            subscriptionDetail.HasError = false;
            subscriptionDetail.Errors = null;
            subscriptionDetail.CaseId = "0000000-0000-0000-0000";

            return subscriptionDetail;
        }
    }
}
