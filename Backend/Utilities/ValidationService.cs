using lizingo_sistema.Models;

namespace lizingo_sistema.Utilities
{
    public class ValidationService
    {
        // rnd numb genr.
        public Random random;
        public ValidationService()
        {
            random = new Random();
        }

        public async Task ValidateRequest(Request request)
        {
            await Task.Delay(random.Next(3000, 8000)); // simulate checking
            request.Status = (random.Next(1, 3) == 1) ? RequestStatus.Success : RequestStatus.Failed;
        }
    }
}