using AngualrJSWebAPIApp.API.Abstract;

namespace AngualrJSWebAPIApp.API.Concrete.SearchOptions
{
    public class SprintSearchOptions : ISearchOptions
    {
        public int Id { get; set; }

        public bool FetchAll { get; set; }

        public string Name { get; set; }
    }
}