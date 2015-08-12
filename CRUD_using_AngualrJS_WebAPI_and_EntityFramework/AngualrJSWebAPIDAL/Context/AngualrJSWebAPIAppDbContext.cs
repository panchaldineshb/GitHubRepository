using System.Data.Entity;

using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Context
{
    public class AngualrJSWebAPIAppDbContext : DbContext
    {
        public AngualrJSWebAPIAppDbContext()
            : base("name=Default")
        {
        }

        public DbSet<User> Users { get; set; }
    }
}