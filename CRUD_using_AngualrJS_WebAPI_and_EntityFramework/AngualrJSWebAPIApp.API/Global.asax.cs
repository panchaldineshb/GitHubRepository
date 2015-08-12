using System.Net.Http.Headers;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using AngualrJSWebAPIApp.DAL.Context;
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

            //builder.Register<IPlanetsRepository>(c => new PlanetsRepository(c.Resolve<AngualrJSWebAPIAppDbContext>())).InstancePerApiRequest();
        }
    }
}