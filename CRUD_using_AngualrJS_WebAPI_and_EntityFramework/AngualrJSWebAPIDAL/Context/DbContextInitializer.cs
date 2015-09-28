using System.Data.Entity;
using System.Linq;

using AngualrJSWebAPIApp.DAL.Seeds;

namespace AngualrJSWebAPIApp.DAL.Context
{
    public class DbContextInitializer : DropCreateDatabaseAlways<AngualrJSWebAPIAppDbContext>
    {
        protected override void Seed(AngualrJSWebAPIAppDbContext dbContext)
        {
            var mockData = new MockData(dbContext);

            // Roles
            var roles = mockData.GetRoles();
            dbContext.Roles.AddRange(roles);

            // Organizations
            var organizations = mockData.GetOrganizations();
            dbContext.Organizations.AddRange(organizations);

            // Users
            var userRole = roles.Single(e => e.Name == "Default User");
            var administratorRole = roles.Single(e => e.Name == "Administrator");
            var organizationToBeAdded = organizations.FirstOrDefault();
            var users = mockData.GetUsers(organizationToBeAdded, userRole);
            dbContext.Users.AddRange(users);

            // Products
            var products = mockData.GetProducts(organizationToBeAdded);
            dbContext.Products.AddRange(products);

            // Sprints
            var jane = users.Single(e => e.Name == "Jane Austen");
            var miguel = users.Single(e => e.Name == "Miguel de Cervantes");
            var sprints = mockData.GetSprints(jane, miguel);
            dbContext.Sprints.AddRange(sprints);

            base.Seed(dbContext);
        }
    }
}