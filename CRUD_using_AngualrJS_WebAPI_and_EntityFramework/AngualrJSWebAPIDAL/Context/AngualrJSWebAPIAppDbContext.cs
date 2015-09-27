using System.Data.Entity;

using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Context
{
    public class AngualrJSWebAPIAppDbContext : DbContext
    {
        public AngualrJSWebAPIAppDbContext()
            : base("name=Default")
        {
            Database.SetInitializer(new DbContextInitializer());
        }

        public DbSet<Organization> Organizations { get; set; }

        public DbSet<Attachment> Attachments { get; set; }

        public DbSet<Address> Addresses { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Sprint> Sprints { get; set; }

        public DbSet<SprintBacklog> SprintBacklogs { get; set; }

        public DbSet<ProductBacklog> ProductBacklogs { get; set; }

        public DbSet<DefinitionOfDone> DefinitionOfDones { get; set; }

        public DbSet<ProductBacklogItem> ProductBacklogItems { get; set; }

        public DbSet<Retrospection> Retrospections { get; set; }

        public DbSet<SprintGoal> SprintGoals { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }
    }
}