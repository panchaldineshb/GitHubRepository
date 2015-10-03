using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class ProductBacklogSeed : SeedBuilder<ProductBacklog>
    {
        public ProductBacklogSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public ProductBacklogSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var userRole = _dbContext.Roles.Single(e => e.Name == "Default ProductBacklog");
            var administratorRole = _dbContext.Roles.Single(e => e.Name == "Administrator");
            var organization = _dbContext.Organizations.Single(e => e.Name == "Sarabi LLC");
            var product = _dbContext.Products.Single(e => e.Name == "Egg Curry");

            var productBacklogToBeAdded = new MockData(_dbContext).GetProductBacklogs(organization, product).ToArray();
            foreach (var productBacklogItem in productBacklogToBeAdded)
            {
                productBacklogItem.Organization = organization;
                productBacklogItem.Product = product;
            }

            var productBacklogItemSeedBuilder = new SeedBuilder<ProductBacklog>(_dbContext).Create(productBacklogToBeAdded);

            return this;
        }
    }
}