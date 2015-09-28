using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/Sprint")]
    public class SprintController : ApiController
    {
        private readonly IRepository<Sprint> _repSprint;

        public SprintController(IRepository<Sprint> repSprint)
        {
            if (repSprint == null) throw new ArgumentNullException("repSprint");
            _repSprint = repSprint;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] SprintSearchOptions searchOptions)
        {
            if (searchOptions.FetchAll)
            {
                var q = await _repSprint.FindAllAsync(x => x.Id > 0);

                return Ok(q);
            }

            if (searchOptions.Id > 0)
            {
                var q = await _repSprint.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { Sprint = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repSprint.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { Sprint = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]Sprint user)
        {
            if (user == null) return BadRequest();

            await _repSprint.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]Sprint user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repSprint.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repSprint.Remove(userToRemove);

            Sprint updatedSprint = user;
            await _repSprint.AddAsync(updatedSprint);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repSprint.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repSprint.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}