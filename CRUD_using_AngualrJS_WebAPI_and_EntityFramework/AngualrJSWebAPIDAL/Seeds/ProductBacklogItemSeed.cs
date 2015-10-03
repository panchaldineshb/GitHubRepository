using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class ProductBacklogItemSeed : SeedBuilder<ProductBacklogItem>
    {
        public ProductBacklogItemSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public ProductBacklogItemSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var userRole = _dbContext.Roles.Single(e => e.Name == "Default ProductBacklogItem");
            var administratorRole = _dbContext.Roles.Single(e => e.Name == "Administrator");
            var organization = _dbContext.Organizations.Single(e => e.Name == "Sarabi LLC");
            var productBacklog = _dbContext.ProductBacklogs.Single(e => e.Name == "Sarabi LLC");

            var productBacklogItemsToBeAdded = new MockData(_dbContext).GetProductBacklogItems(productBacklog).ToArray();
            foreach (var productBacklogItem in productBacklogItemsToBeAdded)
            {
                productBacklogItem.ProductBacklog = productBacklog;
            }

            var productBacklogItemSeedBuilder = new SeedBuilder<ProductBacklogItem>(_dbContext).Create(productBacklogItemsToBeAdded);

            return this;
        }
    }
}