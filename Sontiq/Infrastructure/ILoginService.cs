using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sontiq.Models;

namespace Sontiq.Infrastructure
{
    public interface ILoginService
    {
        Task<LoginDTO> login(int loginId, string provider);
    }
}
