using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Sontiq.Implementation.Utils;
using Sontiq.Infrastructure;
using Sontiq.Models;

namespace Sontiq.Implementation
{
    public class LoginService : ILoginService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public LoginService()
        {
        }
        public LoginService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }


        public async Task<LoginDTO> login(int loginId, string provider)
        {
            LoginDTO loginDTO = new LoginDTO();
            loginDTO.Id = loginId;
            loginDTO.FirstName = "user-" + loginId;
            loginDTO.LastName = "lastName";
            loginDTO.PartnerID = "PartnerID";
            loginDTO.SubscriptionKey = "FF726263A292033847391113ZS";
            loginDTO.UserType = "UserType";
            loginDTO.WorkCaseID = "WorkCaseID";

            _httpContextAccessor.HttpContext.Session.SetComplexData( Constants.LOGIN_SESSION_KEY, loginDTO);

            return await Task.FromResult<LoginDTO>(loginDTO);
        }
    }
}
