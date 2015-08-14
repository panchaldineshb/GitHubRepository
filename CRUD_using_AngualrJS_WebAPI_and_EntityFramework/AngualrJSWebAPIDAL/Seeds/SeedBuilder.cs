using System;

using System.Data.Entity.Migrations;

using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public class SeedBuilder<T>
           where T : BaseEntity<T>
    {
        protected readonly AngualrJSWebAPIAppDbContext _dbContext;

        public SeedBuilder(AngualrJSWebAPIAppDbContext dbContext)
        {
            if (dbContext == null) throw new ArgumentNullException("dbContext");
            _dbContext = dbContext;
        }

        public SeedBuilder<T> Create(params T[] entities)
        {
            _dbContext.Set<T>().AddOrUpdate<T>(entities);

            _dbContext.SaveChanges();

            return this;
        }
    }
}