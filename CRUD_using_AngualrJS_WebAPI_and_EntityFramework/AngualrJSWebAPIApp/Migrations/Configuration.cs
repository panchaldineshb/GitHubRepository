namespace AngualrJSWebAPIApp.Web.Migrations
{
    using System.Data.Entity.Migrations;

    using AngualrJSWebAPIApp.DAL.Context;
    using AngualrJSWebAPIApp.Models;

    using AngualrJSWebAPIApp.DAL.Seeds;

    internal sealed class Configuration : DbMigrationsConfiguration<AngualrJSWebAPIAppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "AngualrJSWebAPIApp.Models.AngualrJSWebAPIAppDbContext";
        }

        protected override void Seed(AngualrJSWebAPIAppDbContext context)
        {
            //  This method will be called after migrating to the latest version.
            var organizationSeed = new OrganizationSeed(context).Build();
            var userSeed = new UserSeed(context).Build();
            
        }
    }
}