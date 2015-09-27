namespace AngualrJSWebAPIApp.Models
{
    public class SprintBacklog : BaseEntity<SprintBacklog>
    {
        public int ProductId { get; set; }

        public virtual Product Product { get; set; }

        public string Name { get; set; }
    }
}