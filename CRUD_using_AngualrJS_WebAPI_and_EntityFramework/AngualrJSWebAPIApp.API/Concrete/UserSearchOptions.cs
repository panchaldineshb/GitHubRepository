using AngualrJSWebAPIApp.API.Abstract;

namespace AngualrJSWebAPIApp.API.Concrete
{
    public class UserSearchOptions : ISearchOptions<string>
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string EmailId { get; set; }
    }
}