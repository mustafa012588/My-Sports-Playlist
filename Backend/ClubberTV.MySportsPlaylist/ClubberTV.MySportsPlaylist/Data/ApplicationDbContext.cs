using ClubberTV.MySportsPlaylist.Models;
using Microsoft.EntityFrameworkCore;

namespace ClubberTV.MySportsPlaylist.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Playlist> Playlists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Playlist>()
                .HasKey(p => new { p.UserId, p.MatchId });

            modelBuilder.Entity<Playlist>()
                .HasOne(p => p.User)
                .WithMany(u => u.Playlists)
                .HasForeignKey(p => p.UserId);

            modelBuilder.Entity<Playlist>()
                .HasOne(p => p.Match)
                .WithMany(m => m.Playlists)
                .HasForeignKey(p => p.MatchId);
            var fixedDate = new DateTime(2025, 5, 9);
            modelBuilder.Entity<Match>().HasData(
      new Match { Id = 1, Title = "Barcelona vs Real Madrid", Competition = "Football", Date = fixedDate.AddDays(1), Status = "Live" },
      new Match { Id = 2, Title = "Lakers vs Celtics", Competition = "Basketball", Date = fixedDate.AddDays(-1), Status = "Replay" },
      new Match { Id = 3, Title = "Liverpool vs Man City", Competition = "Football", Date = fixedDate, Status = "Live" }
  );
        }
    }
}
