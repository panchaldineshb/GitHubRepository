using System.Net.Http.Headers;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete;
using AngualrJSWebAPIApp.API.Repositories;
using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;
using Autofac;
using Autofac.Integration.WebApi;

namespace AngualrJSWebAPIApp.API
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode,
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //To enable CORS for all Web API controllers in your application, pass an EnableCorsAttribute instance to the EnableCors method:
            var enableCorsAttribute = new EnableCorsAttribute("*", "Origin, Content-Type, Accept", "GET, PUT, POST, DELETE, OPTIONS");
            GlobalConfiguration.Configuration.EnableCors(enableCorsAttribute);

            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            SetupJson();
            SetWebApiDependencyResolver();

            GlobalConfiguration.Configuration.MapHttpAttributeRoutes();
            GlobalConfiguration.Configuration.EnsureInitialized();
        }

        private void SetupJson()
        {
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
        }

        private void SetWebApiDependencyResolver()
        {
            var builder = new ContainerBuilder();
            RegisterDependencies(builder);

            var config = GlobalConfiguration.Configuration;
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        private void RegisterDependencies(ContainerBuilder builder)
        {
            builder.RegisterType<AngualrJSWebAPIAppDbContext>().AsSelf().InstancePerRequest();

            builder.RegisterType<ApplicationRepository<User>>().As<IRepository<User>>().InstancePerRequest();

            builder.Register<IUsersRepository>(c => new UsersRepository(c.Resolve<AngualrJSWebAPIAppDbContext>())).InstancePerRequest();
        }
    }
}