using System.Web.Mvc;

namespace AngualrJSWebAPIApp.Web.Controllers
{

    [HandleError]
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }
    }
}