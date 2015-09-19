using System.Collections.Generic;
using System.Linq;

using AngualrJSWebAPIApp.DAL.Context;

using AngualrJSWebAPIApp.Models;

using AngualrJSWebAPIApp.API.Abstract;

namespace AngualrJSWebAPIApp.API.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly AngualrJSWebAPIAppDbContext _dbContext;

        public UsersRepository(AngualrJSWebAPIAppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _dbContext.Users.ToArray();
        }

        public User GetById(int id)
        {
            return _dbContext.Users.FirstOrDefault(p => p.Id == id);
        }

        public void Save(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
        }
    }
}