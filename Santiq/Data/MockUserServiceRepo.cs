using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    public class MockUserServiceRepo : IUserServiceRepo
    {
        public List<UserService> GetPagedUserService(int pageNo)
        {
            List<UserService> userServices = new List<UserService>();
            userServices.Add(new UserService("Mobile attached controll", "SVC-MOB-DEF", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("ID REstoration Pro", "SVC-MOB-DEF-1", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Dark Web Monitoring", "SVC-MOB-DEF-2", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Credit Monitoring", "SVC-MOB-DEF-3", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Credit Score", "SVC-MOB-DEF-4", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Public Records Monitoring", "SVC-MOB-DEF-5", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("1-Bureu Credit Report", "SVC-MOB-DEF-6", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Financial Accounting Monitoring", "SVC-MOB-DEF-7", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 8", "SVC-MOB-DEF-8", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 9", "SVC-MOB-DEF-9", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 10", "SVC-MOB-DEF-10", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 11", "SVC-MOB-DEF-11", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 12", "SVC-MOB-DEF-12", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 13", "SVC-MOB-DEF-13", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 14", "SVC-MOB-DEF-14", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 15", "SVC-MOB-DEF-15", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 16", "SVC-MOB-DEF-16", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices.Add(new UserService("Mobile attached controll 17", "SVC-MOB-DEFF-17", true, false, false, "PERSONAL", true, 10, 120, false));

            return userServices.Skip((pageNo-1)*5).Take(5).ToList();
        }
    }
}
