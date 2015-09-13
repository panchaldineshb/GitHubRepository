namespace AngualrJSWebAPIApp.Models
{
    public class User : BaseEntity<User>
    {
        public Role Role { get; set; }

        public Organization Organization { get; set; }

        public string Pin { get; set; }

        public string City { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string ContactNo { get; set; }

        public string EmailId { get; set; }
    }
}