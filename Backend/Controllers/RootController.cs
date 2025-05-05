using Microsoft.AspNetCore.Mvc;

namespace lizingo_sistema.Controllers
{
    [ApiController]
    [Route("/")]
    public class RootController : ControllerBase
    {
        [HttpGet("green/")]
        public int GetTestInfo()
        {
            return 69;
        }
    }
}
