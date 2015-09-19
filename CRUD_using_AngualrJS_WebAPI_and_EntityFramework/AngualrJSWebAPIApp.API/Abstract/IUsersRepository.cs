using System.Collections.Generic;

using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.API.Abstract
{
    internal interface IUsersRepository
    {
        IEnumerable<User> GetAllUsers();

        User GetById(int id);

        void Save(User user);
    }
}