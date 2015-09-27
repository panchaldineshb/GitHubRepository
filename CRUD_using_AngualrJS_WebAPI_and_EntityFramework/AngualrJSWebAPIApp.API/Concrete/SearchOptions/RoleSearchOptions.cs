using AngualrJSWebAPIApp.API.Abstract;

using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.API.Concrete.SearchOptions
{
    public class RoleSearchOptions : ISearchOptions
    {
        public int Id { get; set; }

        public bool FetchAll { get; set; }

        public string Name { get; set; }

        public string EmailId { get; set; }
    }
}