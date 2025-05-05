var builder = WebApplication.CreateBuilder(args);

// https://www.c-sharpcorner.com/article/cross-origin-resource-sharing-cors-in-net-8/
builder.Services.AddCors(options =>
{
    options.AddPolicy("CustomPolicy", builder =>
        builder.WithOrigins()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers(); // Enable MVC Controllers


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CustomPolicy");
app.UseHttpsRedirection();
app.MapControllers();

app.Run();
