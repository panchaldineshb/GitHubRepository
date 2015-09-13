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
            var organizations = mockData.GetOrganizations().ToArray();

            foreach (var organization in organizations)
            {
                dbContext.Set<Organization>().Add(organization);
            }

            var organizationToBeAdded = organizations.FirstOrDefault();

            var usersToBeAdded = mockData.GetUsers(organizationToBeAdded).ToArray();

            foreach (var user in usersToBeAdded)
            {
                dbContext.Set<User>().Add(user);
            }

            base.Seed(dbContext);
        }
    }
}