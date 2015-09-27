using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.DAL.Seeds
{
    public static class BaseRepository
    {
        public static T Save<T>(this T baseEntity) where T : BaseEntity<T>
        {
            //Db.Session.SaveOrUpdate(baseEntity);

            return baseEntity;
        }
    }
}