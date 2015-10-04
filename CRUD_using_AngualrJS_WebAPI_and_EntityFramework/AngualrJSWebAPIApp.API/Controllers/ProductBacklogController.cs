using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/ProductBacklog")]
    public class ProductBacklogController : ApiController
    {
        private readonly IRepository<ProductBacklog> _repProductBacklog;

        public ProductBacklogController(IRepository<ProductBacklog> repProductBacklog)
        {
            if (repProductBacklog == null) throw new ArgumentNullException("repProductBacklog");
            _repProductBacklog = repProductBacklog;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] ProductBacklogSearchOptions searchOptions)
        {
            if (searchOptions.FetchAll)
            {
                var q = await _repProductBacklog.FindAllAsync(x => x.Id > 0);

                return Ok(q);
            }

            if (searchOptions.Id > 0)
            {
                var q = await _repProductBacklog.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { ProductBacklog = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repProductBacklog.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { ProductBacklog = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]ProductBacklog user)
        {
            if (user == null) return BadRequest();

            await _repProductBacklog.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]ProductBacklog user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repProductBacklog.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repProductBacklog.Remove(userToRemove);

            ProductBacklog updatedProductBacklog = user;
            await _repProductBacklog.AddAsync(updatedProductBacklog);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repProductBacklog.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repProductBacklog.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}