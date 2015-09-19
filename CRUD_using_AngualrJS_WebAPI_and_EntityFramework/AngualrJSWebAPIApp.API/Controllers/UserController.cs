using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        private readonly IRepository<User> _repUser;

        public UserController(IRepository<User> repUser)
        {
            if (repUser == null) throw new ArgumentNullException("repUser");
            _repUser = repUser;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] UserSearchOptions searchOptions)
        {
            if (searchOptions.Id > 0)
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
        public async Task<IHttpActionResult> Put(int id, [FromBody]User user)
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
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repUser.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repUser.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}