using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sontiq.Models;

namespace Sontiq.Data
{
    public class MockUserInfoRepo : IUserInfoRepo
    {
        public UserInfo GetUserInfo()
        {
            UserInfo userInfo = new UserInfo("4152945", "Abul Kalam", "", "Azad", "House# 32, Road# 7", "Dhanmondi", "Dhaka", "Dhaka", "1205", "07-08-****", "azad@nuarca.com", "", "", "+880 1716748869", "", "", "", "", "");
            return userInfo;
        }
    }
}
