using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Santiq.Models;

namespace Santiq.Data
{
    public class UserRepo
    {

		Dictionary<string, List<Alert>> alert_dictionary;
		Dictionary<string, UserInfo> userInfo_dictionary;
		Dictionary<string, List<UserService>> userService_dictionary;


		private readonly List<User> users = new List<User> {
			new User
            {
                Id = "1234",
                ServiceName = "IDF",
			},
			new User
            {
                Id = "1111",
                ServiceName = "EZS",
			}	
		};

        public UserRepo()
        {
			PopulateUserService();
			PopulateUserInfo();
            PopulateAlertDictonary();
        }

		private void PopulateUserService()
		{
			userService_dictionary = new Dictionary<string, List<UserService>>();

			List<UserService> userServices1 = new List<UserService>();
			List<UserService> userServices2 = new List<UserService>();

            userServices1.Add(new UserService("Mobile attached controll", "SVC-MOB-DEF", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("ID REstoration Pro", "SVC-MOB-DEF-1", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("Dark Web Monitoring", "SVC-MOB-DEF-2", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("Credit Monitoring", "SVC-MOB-DEF-3", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("Credit Score", "SVC-MOB-DEF-4", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("Public Records Monitoring", "SVC-MOB-DEF-5", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices2.Add(new UserService("1-Bureu Credit Report", "SVC-MOB-DEF-6", true, false, false, "PERSONAL", true, 10, 120, false));
            userServices1.Add(new UserService("Financial Accounting Monitoring", "SVC-MOB-DEF-7", true, false, false, "PERSONAL", true, 10, 120, false));
		
			userService_dictionary.Add(users.ElementAt(0).Id, userServices1);
			userService_dictionary.Add(users.ElementAt(1).Id, userServices2);
		}

		private void PopulateUserInfo() 
		{
			userInfo_dictionary = new Dictionary<string, UserInfo>();
            UserInfo userInfo1 = new UserInfo("1234", "Jobayer Hossain", "", "Jobayer", "House# 32, Road# 7", "Dhanmondi", "Dhaka", "Dhaka", "1205", "07-08-****", "jubayer@nuarca.com", "", "", "+880 1716748869", "", "", "", "", "");
            UserInfo userInfo2 = new UserInfo("1111", "Tanvir Jewel", "", "Tanvir", "House# 32, Road# 7", "Dhanmondi", "Dhaka", "Dhaka", "1205", "07-08-****", "tanvir@nuarca.com", "", "", "+880 1716748869", "", "", "", "", "");
			
			userInfo_dictionary.Add(users.ElementAt(0).Id, userInfo1);
			userInfo_dictionary.Add(users.ElementAt(1).Id, userInfo2);
		}

		public bool UserExist(string id)
		{
			bool userExists = users.Any(x => x.Id==id);
			return userExists;
		}

		public UserInfo GetUserInfo(string id)
        {
            UserInfo userInfo = userInfo_dictionary[id];
			return userInfo;
        }

		public List<UserService> GetUserServiceByUserId(int pageNo, string id)
		{
			return userService_dictionary[id].Skip((pageNo - 1) * 5).Take(5).ToList();
		}

		public IEnumerable<Alert> GetAlertByUserId(int pageNo, string id)
		{
			return alert_dictionary[id].Skip((pageNo - 1) * 5).Take(5).ToList();
		}

		private void PopulateAlertDictonary() 
		{
			alert_dictionary = new Dictionary<string, List<Alert>>();

			var alertList1 = new List<Alert>
            {
                new Alert
                {
                    Id = 114,
                    IsThreat = false,
                    UserFirstName = "Jubaer",
                    UserLastName = "Hossain",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 115,
                    IsThreat = false,
                    UserFirstName = "Jubaer",
                    UserLastName = "Hossain",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 116,
                    IsThreat = false,
                    UserFirstName = "Jubaer",
                    UserLastName = "Hossain",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 117,
                    IsThreat = false,
                    UserFirstName = "Jubaer",
                    UserLastName = "Hossain",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 118,
                    IsThreat = false,
                    UserFirstName = "Jubaer",
                    UserLastName = "Hossain",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
            };

			var alertList2 = new List<Alert>
            {
                new Alert
                {
                    Id = 214,
                    IsThreat = false,
                    UserFirstName = "Jewel",
                    UserLastName = "Tanvir",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 215,
                    IsThreat = false,
                    UserFirstName = "Jewel",
                    UserLastName = "Tanvir",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 216,
                    IsThreat = false,
                    UserFirstName = "Jewel",
                    UserLastName = "Tanvir",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                },
                new Alert
                {
                    Id = 217,
                    IsThreat = false,
                    UserFirstName = "Jewel",
                    UserLastName = "Tanvir",
                    ServiceKey = "ThreeBureauCreditMonitoring",
                    UserId = "2000001273",
                    UserIsChild = false,
                    GeneratedOn = "2020-02-22 23:09",
                    AcknowledgedOn = "2020-02-27 23:50",
                    Viewed = 1,
                    AlertTypeName = "Three Bureau Monitoring Alert",
                    Category = "CREDIT",
                    AvailableSubResource = "three-monitoring",
                    Status = "New",
                    Description = "test Desctiopin=",
                    Title = "Credit Monitoring",
                    DisplayName = "Credit Monitoring",
                    ResolveDate = "05/30/2020",
                    ThreatDate = "05/30/2020",
                    ServiceType = "CRDALRT",
                    CreatedDate = "05/19/2020",
                    CreatedTime = "08:08:42",
                    Type = "ALERT",
                    FirstViewDate = "05/19/2020",
                    HasError = false,
                    CaseId = "00000000-0000-0000-0000-000000000000",
                    AlertCategory = "credit",
                    Errors = null,
                    TitleFields = null,
                    MonitorTypes = null
                }
            };

			alert_dictionary.Add(users.ElementAt(0).Id, alertList1);
			alert_dictionary.Add(users.ElementAt(1).Id, alertList2);
		}

        
    }
}
