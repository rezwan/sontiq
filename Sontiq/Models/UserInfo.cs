using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sontiq.Models
{
    public class UserInfo
    {
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string DateOfBirth { get; set; }
        public string EmailAddress { get; set; }
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }
        public string MobilePhone { get; set; }
        public string NationalId { get; set; }
        public string DrivingLicenceNo { get; set; }
        public string PassportNo { get; set; }
        public string MedicalInsuranceNo { get; set; }
        public string MothersMaidenName { get; set; }

        public UserInfo()
        {

        }

        public UserInfo(string userId, string firstName, string middleInitial, string lastName, string address1, string address2, string city, string state, string zip, string dateOfBirth, string emailAddress, string homePhone, string workPhone, string mobilePhone, string nationalId, string drivingLicenceNo, string passportNo, string medicalInsuranceNo, string mothersMaidenName)
        {
            UserId = userId;
            FirstName = firstName;
            MiddleInitial = middleInitial;
            LastName = lastName;
            Address1 = address1;
            Address2 = address2;
            City = city;
            State = state;
            Zip = zip;
            DateOfBirth = dateOfBirth;
            EmailAddress = emailAddress;
            HomePhone = homePhone;
            WorkPhone = workPhone;
            MobilePhone = mobilePhone;
            NationalId = nationalId;
            DrivingLicenceNo = drivingLicenceNo;
            PassportNo = passportNo;
            MedicalInsuranceNo = medicalInsuranceNo;
            MothersMaidenName = mothersMaidenName;
        }
    }
}
