using System.Text.Json.Serialization;
using lizingo_sistema.Utilities;

var builder = WebApplication.CreateBuilder(args);

// https://www.c-sharpcorner.com/article/cross-origin-resource-sharing-cors-in-net-8/
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin() // when prod phase, domain can be added
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers(); // Enable MVC Controllers

builder.Services.AddSingleton<RequestService>(); // for testing now


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.MapControllers();

app.Run();
