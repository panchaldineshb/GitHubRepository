using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class ProductSeed : SeedBuilder<Product>
    {
        public ProductSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public ProductSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var organization = _dbContext.Organizations.Single(e => e.Name == "Sarabi LLC");

            var productsToBeAdded = new MockData(_dbContext).GetProducts(organization).ToArray();
            foreach (var product in productsToBeAdded)
                product.Organization = organization;

            var productSeedBuilder = new SeedBuilder<Product>(_dbContext).Create(productsToBeAdded);

            return this;
        }
    }
}