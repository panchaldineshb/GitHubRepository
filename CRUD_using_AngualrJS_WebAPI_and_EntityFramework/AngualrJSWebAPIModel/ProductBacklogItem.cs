namespace AngualrJSWebAPIApp.Models
{
    public class ProductBacklogItem : BaseEntity<ProductBacklogItem>
    {
        public int ProductBacklogId { get; set; }

        public virtual ProductBacklog ProductBacklog { get; set; }

        public int OrganizationId { get; set; }

        public virtual Organization Organization { get; set; }

        public string Name { get; set; }
    }
}