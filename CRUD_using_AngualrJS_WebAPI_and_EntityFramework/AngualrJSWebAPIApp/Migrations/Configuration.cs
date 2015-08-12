namespace AngualrJSWebAPIApp.Web.Migrations
{
    using System.Data.Entity.Migrations;

    using AngualrJSWebAPIApp.DAL.Context;
    using AngualrJSWebAPIApp.Models;

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

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Users.AddOrUpdate(x => x.Id,
                new User() { Id = "1", Name = "Jane Austen" },
                new User() { Id = "2", Name = "Charles Dickens" },
                new User() { Id = "3", Name = "Miguel de Cervantes" }
                );

            context.SaveChanges();
        }
    }
}