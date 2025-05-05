using lizingo_sistema.Dtos;
using lizingo_sistema.Models;
using lizingo_sistema.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace lizingo_sistema.Controllers
{
    [ApiController]
    [Route("/")]
    public class RootController : ControllerBase
    {
        private RequestService _requestService;
        public RootController(RequestService requestService)
        {
            _requestService = requestService;
        }

        [HttpGet("green/")]
        public IActionResult GetTestInfo()
        {
            return Ok(69);
        }

        [HttpPost("postRequest/")]
        public IActionResult PostRequest([FromBody] RequestDto request)
        {
            // some checking

            // adding the request
            _requestService.AddRequest(request);

            // returning answer to the client
            foreach (var item in _requestService.GetRequests())
            {
                Console.WriteLine($"{item.Price}, {item.TimeSpan}, {item.DownPayment}");
            }
            Console.WriteLine();

            return Ok(request);
        }

        [HttpGet("getRequests/")]
        public IActionResult GetRequests()
        {
            return Ok(_requestService.GetRequests());
        }
    }
}
