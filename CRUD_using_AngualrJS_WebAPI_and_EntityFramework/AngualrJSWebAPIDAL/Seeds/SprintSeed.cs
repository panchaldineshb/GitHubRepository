using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class SprintSeed : SeedBuilder<Sprint>
    {
        public SprintSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public SprintSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var jane = _dbContext.Users.Single(e => e.Name == "Jane Austen");
            var miguel = _dbContext.Users.Single(e => e.Name == "Miguel de Cervantes");

            var usersToBeAdded = new MockData(_dbContext).GetSprints(jane, miguel).ToArray();

            var userSeedBuilder = new SeedBuilder<Sprint>(_dbContext).Create(usersToBeAdded);

            return this;
        }
    }
}