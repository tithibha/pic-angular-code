using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;
using UserManagementService.Models;

namespace UserManagementService.Controllers
{
    
    public class LoginController : ApiController
    {
        [HttpGet]
        public string Login(string username, string password)
        {
            User user = new User {UserName = username, Password = password};
            return  user.UserName+1;

        }
    }
    
}
