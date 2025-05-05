using System.Runtime.Serialization;
using lizingo_sistema.Dtos;
using lizingo_sistema.Models;

namespace lizingo_sistema.Utilities;

public class RequestService
{
    private List<Request> requests;
    private int idGenerator;

    public RequestService()
    {
        requests = []; // == requests = new List<Request>(); :OO
        idGenerator = 0;
    }

    public bool RemoveRequest(int id)
    {
        // requests = requests.Where(x => x.RequestId != id).ToList(); one way to do it

        int removedCount = requests.RemoveAll(x => x.RequestId == id);
        return removedCount > 0;
    }

    public void AddRequest(RequestDto request)
    {
        requests.Add(new Request(idGenerator++, request.Price, request.TimeSpan, request.DownPayment));
    }

    public List<Request> GetRequests() => requests;
}