namespace AngualrJSWebAPIApp.Models
{
    public class Product : BaseEntity<Product>
    {
        public Organization Organization { get; set; }

        public string Name { get; set; }
    }
}