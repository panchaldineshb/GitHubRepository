namespace AngualrJSWebAPIApp.Models
{
    public class Contact : BaseEntity<Contact>
    {
        public string Name { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }
    }
}