namespace AngualrJSWebAPIApp.API.Abstract
{
    public interface ISearchOptions<T> where T : class
    {
        T Id { get; set; }
    }
}