using Microsoft.EntityFrameworkCore;
using lizingo_sistema.Models;

namespace lizingo_sistema.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Request> Requests { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Request>()
                .Property(b => b.Status)
                .HasConversion<int>();
        }
        #endregion
    }
}