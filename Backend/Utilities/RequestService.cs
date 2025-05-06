using System.Runtime.Serialization;
using System.Threading.Tasks;
using lizingo_sistema.Dtos;
using lizingo_sistema.Models;

namespace lizingo_sistema.Utilities;

public class RequestService
{
    private List<Request> requests;
    private int idGenerator;
    private ValidationService _validationService;

    public RequestService(ValidationService validationService)
    {
        requests = []; // == requests = new List<Request>(); :OO
        idGenerator = 0;
        _validationService = validationService;
    }

    public bool RemoveRequest(int id)
    {
        // requests = requests.Where(x => x.RequestId != id).ToList(); one way to do it

        int removedCount = requests.RemoveAll(x => x.RequestId == id);
        return removedCount > 0;
    }

    public Task AddRequest(RequestDto request)
    {
        int ind = idGenerator++;
        Request req = new Request(ind, request.Price, request.TimeSpan, request.DownPayment);

        requests.Add(req);

        // handle the validation
        // Fire-and-forget background validation
        _ = Task.Run(() => _validationService.ValidateRequest(req));

        // update the req in list
        return Task.CompletedTask;
    }

    public List<Request> GetRequests() => requests;
}