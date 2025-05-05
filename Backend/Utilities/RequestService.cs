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


    public void AddRequest(RequestDto request)
    {
        requests.Add(new Request(idGenerator++, request.Price, request.TimeSpan, request.DownPayment));
    }

    public List<Request> GetRequests() => requests;
}