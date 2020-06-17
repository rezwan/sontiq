using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    interface IUserSubscriptionRepo
    {
        SubscriptionDetail GetSubscriptionDetail(int pageNo);
    }
}
