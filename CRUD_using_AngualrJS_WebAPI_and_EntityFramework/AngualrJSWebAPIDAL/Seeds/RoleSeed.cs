using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class RoleSeed : SeedBuilder<Role>
    {
        public RoleSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public RoleSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var organizations = new MockData(_dbContext).GetRoles().ToArray();

            var organizationSeedBuilder = new SeedBuilder<Role>(_dbContext).Create(organizations);

            return this;
        }
    }
}