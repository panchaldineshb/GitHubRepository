using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/Role")]
    public class RoleController : ApiController
    {
        private readonly IRepository<Role> _repRole;

        public RoleController(IRepository<Role> repRole)
        {
            if (repRole == null) throw new ArgumentNullException("repRole");
            _repRole = repRole;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] RoleSearchOptions searchOptions)
        {
            if (searchOptions.FetchAll)
            {
                var q = await _repRole.FindAllAsync(x => x.Id > 0);

                return Ok(q);
            }

            if (searchOptions.Id > 0)
            {
                var q = await _repRole.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { Role = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repRole.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { Role = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]Role user)
        {
            if (user == null) return BadRequest();

            await _repRole.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]Role user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repRole.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repRole.Remove(userToRemove);

            Role updatedRole = user;
            await _repRole.AddAsync(updatedRole);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repRole.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repRole.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}