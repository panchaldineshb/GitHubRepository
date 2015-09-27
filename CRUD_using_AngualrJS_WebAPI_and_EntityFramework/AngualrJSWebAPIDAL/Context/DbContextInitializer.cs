using System.Data.Entity;
using System.Linq;

using AngualrJSWebAPIApp.DAL.Seeds;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Context
{
    public class DbContextInitializer : DropCreateDatabaseAlways<AngualrJSWebAPIAppDbContext>
    {
        protected override void Seed(AngualrJSWebAPIAppDbContext dbContext)
        {
            var mockData = new MockData(dbContext);

            // Roles
            var roles = mockData.GetRoles().ToArray();
            foreach (var role in roles)
            {
                dbContext.Set<Role>().Add(role);
            }

            // Organizations
            var organizations = mockData.GetOrganizations().ToArray();
            foreach (var organization in organizations)
            {
                dbContext.Set<Organization>().Add(organization);
            }

            // Users
            var userRole = roles.Single(e => e.Name == "Default User");
            var administratorRole = roles.Single(e => e.Name == "Administrator");
            var organizationToBeAdded = organizations.FirstOrDefault();
            var usersToBeAdded = mockData.GetUsers(organizationToBeAdded, userRole).ToArray();
            foreach (var user in usersToBeAdded)
            {
                user.Role = userRole;
                user.Organization = organizationToBeAdded;
                dbContext.Set<User>().Add(user);
            }

            // Products
            var productsToBeAdded = mockData.GetProducts(organizationToBeAdded).ToArray();
            foreach (var product in productsToBeAdded)
            {
                product.Organization = organizationToBeAdded;
                dbContext.Set<Product>().Add(product);
            }

            base.Seed(dbContext);
        }
    }
}