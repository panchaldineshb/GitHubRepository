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

            var userSeedBuilder = new SeedBuilder<User>(_dbContext).Create(
                new User() { Id = "1", Organization = organization, Name = "Jane Austen", Address = "", City = "", CreatedOn = DateTime.Now, Active = true },
                new User() { Id = "3", Organization = organization, Name = "Miguel de Cervantes" },
                new User() { Id = "2", Organization = organization, Name = "Charles Dickens" },
                new User() { Id = "2", Organization = organization, Name = "Shoya Bali" }
            );

            return this;
        }
    }
}