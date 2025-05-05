namespace lizingo_sistema.Models
{
    public class Request
    {
        public RequestStatus _status { get; set; } = RequestStatus.InProgress; // default value ig?


        public Request() { }
    }
}
