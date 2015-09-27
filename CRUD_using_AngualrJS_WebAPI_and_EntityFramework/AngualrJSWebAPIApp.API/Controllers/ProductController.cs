using System;
using System.Threading.Tasks;
using System.Web.Http;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.API.Concrete.SearchOptions;
using AngualrJSWebAPIApp.Models;

namespace AngualrJSWebAPIApp.Web.ApiControllers
{
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        private readonly IRepository<Product> _repProduct;

        public ProductController(IRepository<Product> repProduct)
        {
            if (repProduct == null) throw new ArgumentNullException("repProduct");
            _repProduct = repProduct;
        }

        // GET api/<controller>

        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get([FromUri] ProductSearchOptions searchOptions)
        {
            if (searchOptions.FetchAll)
            {
                var q = await _repProduct.FindAllAsync(x => x.Id > 0);

                return Ok(q);
            }

            if (searchOptions.Id > 0)
            {
                var q = await _repProduct.FindAsync(x => x.Id == searchOptions.Id);

                return Ok(new { Product = q });
            }

            if (!string.IsNullOrEmpty(searchOptions.Name))
            {
                var q = await _repProduct.FindAsync(x => x.Name == searchOptions.Name);

                return Ok(new { Product = q });
            }

            return BadRequest();
        }

        // POST api/<controller>

        [AllowAnonymous]
        public async Task<IHttpActionResult> Post([FromBody]Product user)
        {
            if (user == null) return BadRequest();

            await _repProduct.AddAsync(user);

            return Ok();
        }

        // PUT api/<controller>/5

        [AllowAnonymous]
        public async Task<IHttpActionResult> Put(int id, [FromBody]Product user)
        {
            if (user == null) return BadRequest();

            var userToRemove = _repProduct.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            _repProduct.Remove(userToRemove);

            Product updatedProduct = user;
            await _repProduct.AddAsync(updatedProduct);

            return Ok();
        }

        // DELETE api/<controller>/5
        [AllowAnonymous]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userToRemove = _repProduct.Find(x => x.Id == id);

            if (userToRemove == null) return BadRequest();

            await _repProduct.RemoveAsync(userToRemove);

            return Ok();
        }
    }
}