namespace AngualrJSWebAPIApp.API.Abstract
{
    public interface ISearchOptions<T> where T : struct
    {
        T Id { get; set; }
    }
}