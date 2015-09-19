using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/Organization")]
    public class OrganizationController : ApiController
    {
        private readonly IRepository<Organization> _repOrganization;

        public OrganizationController(IRepository<Organization> repOrganization)
        {
            if (repOrganization == null) throw new ArgumentNullException("repOrganization");
            _repOrganization = repOrganization;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] OrganizationSearchOptions searchOptions)
        {
            if (searchOptions.Id > 0)
            {
                var q = await _repOrganization.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { Organization = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repOrganization.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { Organization = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]Organization user)
        {
            if (user == null) return BadRequest();

            await _repOrganization.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]Organization user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repOrganization.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repOrganization.Remove(userToRemove);

            Organization updatedOrganization = user;
            await _repOrganization.AddAsync(updatedOrganization);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repOrganization.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repOrganization.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}