using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using stockRaderApi.Models;



namespace stockRaderApi.Data
{
    public class AppDbContext : DbContext
    {


        public AppDbContext(DbContextOptions options)
        : base(options)
        {

        }

        public DbSet<Stock> Stocks { get; set; }

        public DbSet<Comment> Comments { get; set; }

    }
}