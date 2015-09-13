using System;

using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class UserSeed : SeedBuilder<User>
    {
        public UserSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public UserSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            var organization = _dbContext.Organizations.Single(e => e.Name == "Sarabi LLC");

            var usersToBeAdded = new MockData(_dbContext).GetUsers(organization).ToArray();

            var userSeedBuilder = new SeedBuilder<User>(_dbContext).Create(usersToBeAdded);

            return this;
        }
    }
}