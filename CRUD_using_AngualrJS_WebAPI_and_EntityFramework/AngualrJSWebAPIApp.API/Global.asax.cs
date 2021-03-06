﻿using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.Repositories;
using AngualrJSWebAPIApp.DAL.Context;
using Autofac;
using Autofac.Integration.WebApi;
using System.Net.Http.Headers;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngualrJSWebAPIApp.API
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode,
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //To enable CORS for all Web API controllers in your application, pass an EnableCorsAttribute instance to the EnableCors method:
            //var enableCorsAttribute = new EnableCorsAttribute("*", "Origin, Content-Type, Accept", "GET, PUT, POST, DELETE, OPTIONS");
            //Earlier we had specified certain details for CORS (as you can see above), but then as per following link we stopped constraining
            //https://github.com/mattmeisinger/ebay-watcher/blob/e141dcda6d97054d3e376b3fdf012589000350d0/eBayWatcher.WebAPI/App_Start/WebApiConfig.cs

            var enableCorsAttribute = new EnableCorsAttribute("*", "*", "*");
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

            //builder.RegisterType<ApplicationRepository<User>>().As<IRepository<User>>().InstancePerRequest();
            //builder.RegisterType<ApplicationRepository<Role>>().As<IRepository<Role>>().InstancePerRequest();
            //builder.RegisterType<ApplicationRepository<Product>>().As<IRepository<Product>>().InstancePerRequest();
            //builder.RegisterType<ApplicationRepository<Organization>>().As<IRepository<Organization>>().InstancePerRequest();
            //builder.RegisterType<ApplicationRepository<Sprint>>().As<IRepository<Sprint>>().InstancePerRequest();

            builder
                .RegisterGeneric(typeof(ApplicationRepository<>))
                .As(typeof(IRepository<>))
                .InstancePerRequest();

            //builder.Register<IUsersRepository>(c => new UsersRepository(c.Resolve<AngualrJSWebAPIAppDbContext>())).InstancePerRequest();
        }
    }
}