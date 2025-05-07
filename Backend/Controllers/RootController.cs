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
        public async Task<IActionResult> PostRequest([FromBody] RequestDto request)
        {
            // some checking

            // adding the request
            await _requestService.AddRequestAsync(request);

            // returning answer to the client
            return Ok(request);
        }

        [HttpGet("getRequests/")]
        public async Task<IActionResult> GetRequests()
        {
            return Ok(await _requestService.GetRequestsAsync());
        }

        [HttpDelete("deleteRequest/{id}")]
        public async Task<IActionResult> DeleteRequest(int id)
        {
            if (await _requestService.RemoveRequestAsync(id))
                return Ok();
            else
                return NotFound();
        }
    }
}
