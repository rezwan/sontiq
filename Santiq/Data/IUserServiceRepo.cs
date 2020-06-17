using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    interface IUserServiceRepo
    {
        List<UserService> GetPagedUserService(int pageNo);
    }
}
