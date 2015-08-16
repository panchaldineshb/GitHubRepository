using System.Web.Mvc;

using System.Linq;
using System.Threading.Tasks;

using AngualrJSWebAPIApp.ViewModels;

namespace AngualrJSWebAPIApp.Web.Controllers
{
    public class OrganizationController : Controller
    {
        //
        // GET: /Organization/Create
        //
        // GET: /Admin/Register

        [AllowAnonymous]
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Admin/Register

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Create(OrganizationViewModel model)
        {
            //var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);
            return true;
        }
    }
}