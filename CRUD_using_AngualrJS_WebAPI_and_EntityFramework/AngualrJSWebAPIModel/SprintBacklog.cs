namespace AngualrJSWebAPIApp.Models
{
    public class SprintBacklog : BaseEntity<SprintBacklog>
    {
        public string Name { get; set; }

        public virtual Product Product { get; set; }

        public int ProductId { get; set; }
    }
}