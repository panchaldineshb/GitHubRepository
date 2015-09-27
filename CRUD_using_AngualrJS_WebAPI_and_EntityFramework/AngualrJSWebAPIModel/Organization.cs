namespace AngualrJSWebAPIApp.Models
{
    public class Organization : BaseEntity<Organization>
    {
        public string City { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string ContactNo { get; set; }

        public string EmailId { get; set; }
    }
}