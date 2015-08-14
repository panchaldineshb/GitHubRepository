using System;
using System.Collections.Generic;
using System.Web.Http;
using AngualrJSWebAPIApp.DAL.Context;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    public class UserController : ApiController
    {
        private readonly AngualrJSWebAPIAppDbContext _dbContext;

        public UserController(AngualrJSWebAPIAppDbContext dbContext)
        {
            if (dbContext == null) throw new ArgumentNullException("dbContext");
            _dbContext = dbContext;
        }

        // GET api/<controller>
        [AllowAnonymous]
        public IEnumerable<User> Get()
        {
            return _dbContext.Users;
        }

        // GET api/<controller>/5
        [AllowAnonymous]
        public User Get(string id)
        {
            return _dbContext.Users.Find(id);
        }

        // POST api/<controller>
        [AllowAnonymous]
        public void Post([FromBody]User customer)
        {
            _dbContext.Users.Add(customer);
            _dbContext.SaveChanges();
        }

        // PUT api/<controller>/5
        [AllowAnonymous]
        public void Put(string id, [FromBody]User customer)
        {
            User customerToRemove = _dbContext.Users.Find(customer.Id);

            _dbContext.Users.Remove(customerToRemove);
            User updatedUser = customer;
            _dbContext.Users.Add(updatedUser);

            _dbContext.SaveChanges();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public void Delete(string id)
        {
            User cust = _dbContext.Users.Find(id);
            _dbContext.Users.Remove(cust);
            _dbContext.SaveChanges();
        }
    }
}