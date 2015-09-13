using System;
using System.Threading.Tasks;
using System.Web.Http;

using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    public class UserController : ApiController
    {
        private readonly IRepository<User> _repUser;

        public UserController(IRepository<User> repUser)
        {
            if (repUser == null) throw new ArgumentNullException("repUser");
            _repUser = repUser;
        }

        // GET api/<controller>

        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<IHttpActionResult> Get()
        //{
        //    var list = await _repUser.GetAllAsync();

        //    return Ok(list);
        //}

        // GET api/<controller>/5

        // GET api/products?Id=1&Name=Product1&CreatedBy=1/4/2013&StockNumber=ABC0001
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] UserSearchOptions searchOptions)
        {
            if (!string.IsNullOrEmpty(searchOptions.Id))
            {
                var q = await _repUser.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { User = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repUser.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { User = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]User user)
        {
            if (user == null) return BadRequest();

            await _repUser.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(string id, [FromBody]User user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repUser.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repUser.Remove(userToRemove);

            User updatedUser = user;
            await _repUser.AddAsync(updatedUser);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(string id)
        {
            if (id == null) return BadRequest();

            var userToRemove = _repUser.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repUser.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}