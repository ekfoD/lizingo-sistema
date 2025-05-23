using System.Runtime.Serialization;
using System.Threading.Tasks;
using lizingo_sistema.Data;
using lizingo_sistema.Dtos;
using lizingo_sistema.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update.Internal;
using Microsoft.Identity.Client;

namespace lizingo_sistema.Utilities;

public class RequestService
{
    private readonly AppDbContext _appDbContext;
    private readonly ValidationService _validationService;
    private readonly IServiceProvider _serviceProvider;

    public RequestService(AppDbContext appDbContext, ValidationService validationService, IServiceProvider serviceProvider)
    {
        _appDbContext = appDbContext;
        _validationService = validationService;
        _serviceProvider = serviceProvider;
    }

    public async Task<bool> RemoveRequestAsync(int id)
    {
        var request = await _appDbContext.Requests.FindAsync(id);
        if (request != null)
        {
            _appDbContext.Requests.Remove(request);
            await _appDbContext.SaveChangesAsync();
            return true;
        }

        return false;
    }

    public async Task AddRequestAsync(RequestDto request)
    {
        Request req = new(request.Price, request.TimeSpan, request.DownPayment);

        _appDbContext.Requests.Add(req);
        await _appDbContext.SaveChangesAsync();

        // handle the validation -> Fire-and-forget background validation
        _ = Task.Run(async () =>
        {
            using var scope = _serviceProvider.CreateScope(); // need to get valid context, so that it would not be disposed
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            await _validationService.ValidateRequest(req);
            db.Requests.Update(req);
            await db.SaveChangesAsync();
        });
    }

    public async Task UpdateRequestAsync(Request req)       // if someday we need this
    {
        var request = await _appDbContext.Requests.FindAsync(req.RequestId);

        if (request != null)
        {
            request.DownPayment = req.DownPayment;
            request.Price = req.Price;
            request.Status = req.Status;
            request.TimeSpan = req.TimeSpan;

            await _appDbContext.SaveChangesAsync();
        }

        _appDbContext.Requests.Update(req);
    }

    public async Task<List<Request>> GetRequestsAsync()
    {
        return await _appDbContext.Requests.ToListAsync();  // Asynchronous operation
    }

}