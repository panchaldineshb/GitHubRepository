using System.Threading.Tasks;
using System.Web.Mvc;
using AngualrJSWebAPIApp.ViewModels;

namespace AngualrJSWebAPIApp.Web.Controllers
{
    [HandleError]

    public class OrganizationController : Controller
    {
        //
        // GET: /Organization/Index

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Organization/Register

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Organization/Register

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Register(OrganizationViewModel model)
        {
            //var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);
            return true;
        }
    }
}