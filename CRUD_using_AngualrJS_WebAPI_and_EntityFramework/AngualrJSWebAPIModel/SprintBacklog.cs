namespace AngualrJSWebAPIApp.Models
{
    public class SprintBacklog : BaseEntity<SprintBacklog>
    {
        public Product Product { get; set; }

        public string Name { get; set; }
    }
}