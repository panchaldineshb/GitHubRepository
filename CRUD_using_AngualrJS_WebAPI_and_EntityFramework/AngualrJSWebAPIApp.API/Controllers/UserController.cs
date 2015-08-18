using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
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

        [AllowAnonymous]
        public async Task<IHttpActionResult> Get()
        {
            var list = await _repUser.GetAllAsync();

            return Ok(list);
        }

        // GET api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Get(string id)
        {
            if (id == null) return BadRequest();

            var q = await _repUser.FindAsync(x => x.Id == id);

            return Ok(new { User = q });
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