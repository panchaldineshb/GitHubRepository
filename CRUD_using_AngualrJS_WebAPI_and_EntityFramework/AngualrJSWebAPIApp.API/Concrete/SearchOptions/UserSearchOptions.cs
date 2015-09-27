using AngualrJSWebAPIApp.API.Abstract;

namespace AngualrJSWebAPIApp.API.Concrete.SearchOptions
{
    public class UserSearchOptions : ISearchOptions
    {
        public int Id { get; set; }

        public bool FetchAll { get; set; }

        public string Name { get; set; }

        public string EmailId { get; set; }
    }
}