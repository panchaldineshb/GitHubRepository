namespace AngualrJSWebAPIApp.Models
{
    public class ProductBacklog : BaseEntity<ProductBacklog>
    {
        public virtual Organization Organization { get; set; }

        public virtual Product Product { get; set; }

        public virtual User ProductOwner { get; set; }

        public virtual User ScrumMaster { get; set; }

        public string Name { get; set; }
    }
}