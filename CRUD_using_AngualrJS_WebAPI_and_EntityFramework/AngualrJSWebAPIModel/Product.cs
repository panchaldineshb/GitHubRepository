namespace AngualrJSWebAPIApp.Models
{
    public class Product : BaseEntity<Product>
    {
        public virtual Organization Organization { get; set; }

        public string Name { get; set; }
    }
}