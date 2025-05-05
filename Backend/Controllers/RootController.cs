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

        [HttpPost("postRequest/")]
        public IActionResult PostRequest([FromBody] RequestDto request)
        {
            // some checking

            // adding the request
            _requestService.AddRequest(request);

            // returning answer to the client
            return Ok(request);
        }

        [HttpGet("getRequests/")]
        public IActionResult GetRequests()
        {
            return Ok(_requestService.GetRequests());
        }

        [HttpDelete("deleteRequest/{id}")]
        public IActionResult DeleteRequest(int id)
        {
            if (_requestService.RemoveRequest(id))
                return Ok();
            else
                return NotFound();
        }
    }
}
