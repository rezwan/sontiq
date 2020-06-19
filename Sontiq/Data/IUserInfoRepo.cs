using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sontiq.Models;

namespace Sontiq.Data
{
    interface IUserInfoRepo
    {        
        UserInfo GetUserInfo();
    }
}
