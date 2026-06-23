using Microsoft.AspNetCore.Mvc;

namespace eazystore.Controllers
{
    [ApiController]
        [Route("[controller]")] 
    public class ProductController : Controller
    {
        [HttpGet(Name = "GetProducts")]
        public string GetProducts()
        {
            return "This is the list of products";
        }
    }
}
