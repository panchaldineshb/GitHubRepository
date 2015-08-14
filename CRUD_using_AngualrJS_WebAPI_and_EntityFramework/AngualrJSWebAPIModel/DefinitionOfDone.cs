namespace AngualrJSWebAPIApp.Models
{
    public class DefinitionOfDone : BaseEntity<DefinitionOfDone>
    {
        public string Name { get; set; }

        public User ProductOwner { get; set; }

        public User ScrumMaster { get; set; }
    }
}