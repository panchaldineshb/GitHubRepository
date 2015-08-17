using System.Threading.Tasks;
using System.Web.Mvc;
using AngualrJSWebAPIApp.ViewModels;

namespace AngualrJSWebAPIApp.Web.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Admin/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Admin/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // GET: /Admin/Login

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        //
        // POST: /Admin/Login

        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Admin/Register

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Admin/Register

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> Register(RegisterViewModel model)
        {
            //var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            //var result = await UserManager.CreateAsync(user, model.Password);
            //if (!result.Succeeded) return false;
            //await SignInManager.SignInAsync(user, false, false);
            return true;
        }

        //
        // GET: /Admin/RegisterOrganization

        [AllowAnonymous]
        public ActionResult RegisterOrganization()
        {
            return View();
        }
    }
}