using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/ProductBacklogItem")]
    public class ProductBacklogItemController : ApiController
    {
        private readonly IRepository<ProductBacklogItem> _repProductBacklogItem;

        public ProductBacklogItemController(IRepository<ProductBacklogItem> repProductBacklogItem)
        {
            if (repProductBacklogItem == null) throw new ArgumentNullException("repProductBacklogItem");
            _repProductBacklogItem = repProductBacklogItem;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] ProductBacklogItemSearchOptions searchOptions)
        {
            if (searchOptions.FetchAll)
            {
                var q = await _repProductBacklogItem.FindAllAsync(x => x.Id > 0);

                return Ok(q);
            }

            if (searchOptions.Id > 0)
            {
                var q = await _repProductBacklogItem.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { ProductBacklogItem = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repProductBacklogItem.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { ProductBacklogItem = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]ProductBacklogItem user)
        {
            if (user == null) return BadRequest();

            await _repProductBacklogItem.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]ProductBacklogItem user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repProductBacklogItem.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repProductBacklogItem.Remove(userToRemove);

            ProductBacklogItem updatedProductBacklogItem = user;
            await _repProductBacklogItem.AddAsync(updatedProductBacklogItem);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repProductBacklogItem.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repProductBacklogItem.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}