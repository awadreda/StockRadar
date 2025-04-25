using Microsoft.EntityFrameworkCore;
using stockRaderApi.Data;
using stockRaderApi.interfaces;
using stockRaderApi.Models;
using stockRaderApi.Repository;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        
        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddEndpointsApiExplorer(); // ✅ ده اللي يقابل AddOpenApi
        builder.Services.AddEndpointsApiExplorer(); // مهم جداً
        builder.Services.AddSwaggerGen();


        // Add database context
        builder.Services.AddDbContext<AppDbContext>(options =>
        {
            options.UseSqlServer(builder.Configuration  .GetConnectionString("DefaultConnection")); 
        });



        // Add repository
        builder.Services.AddScoped<IStockRepository, StockRepository>();
        

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();   

            app.UseSwaggerUI();
            
            
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}