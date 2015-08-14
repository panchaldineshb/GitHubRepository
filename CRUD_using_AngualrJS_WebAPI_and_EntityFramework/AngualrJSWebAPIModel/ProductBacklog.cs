namespace AngualrJSWebAPIApp.Models
{
    public class ProductBacklog : BaseEntity<ProductBacklog>
    {
        public Product Product { get; set; }

        public User ProductOwner { get; set; }

        public User ScrumMaster { get; set; }

        public string Name { get; set; }
    }
}