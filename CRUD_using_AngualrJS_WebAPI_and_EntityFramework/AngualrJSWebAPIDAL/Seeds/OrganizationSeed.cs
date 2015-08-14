using System;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public static class BaseRepository
    {
        public static T Save<T>(this T baseEntity) where T : BaseEntity<T>
        {
            //Db.Session.SaveOrUpdate(baseEntity);

            return baseEntity;
        }
    }

    public class OrganizationSeed : SeedBuilder<Organization>
    {
        public OrganizationSeed(AngualrJSWebAPIAppDbContext dbContext)
            : base(dbContext)
        {
        }

        public OrganizationSeed Build()
        {
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //

            var organization = new Organization { Id = "1", Name = "Sarabi LLC", Address = "39 Henry Street", City = "Edison", CreatedOn = DateTime.Now, Active = true };

            var organizationSeedBuilder = new SeedBuilder<Organization>(_dbContext).Create(organization);

            return this;
        }
    }
}