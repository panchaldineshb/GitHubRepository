namespace AngualrJSWebAPIApp.Models
{
    public class User : BaseEntity<User>
    {
        //
        // http://www.ladislavmrnka.com/2011/05/foreign-key-vs-independent-associations-in-ef-4/
        // http://stackoverflow.com/questions/5281974/code-first-independent-associations-vs-foreign-key-associations
        // Example of code-first entity using Foreign key association:
        // Make your entity references virtual to allow for lazy loading
        //

        public virtual Role Role { get; set; }

        public virtual Organization Organization { get; set; }

        public string Pin { get; set; }

        public string City { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string ContactNo { get; set; }

        public string EmailId { get; set; }
    }
}