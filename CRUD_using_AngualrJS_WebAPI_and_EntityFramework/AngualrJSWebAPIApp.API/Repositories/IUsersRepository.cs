using System.Collections.Generic;

using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.API.Repositories
{
    internal interface IUsersRepository
    {
        IEnumerable<User> GetAllUsers();

        User GetById(string id);

        void Save(User user);
    }
}