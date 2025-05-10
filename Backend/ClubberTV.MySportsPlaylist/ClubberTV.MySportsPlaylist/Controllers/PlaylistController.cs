using ClubberTV.MySportsPlaylist.Data;
using ClubberTV.MySportsPlaylist.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace ClubberTV.MySportsPlaylist.Controllers
{
    [Authorize]

    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PlaylistController(ApplicationDbContext context)
        {
            _context = context;
        }

        private int GetUserId()
        {
            var userIdStr = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userIdStr))
                throw new UnauthorizedAccessException("User ID is missing from token.");

            return int.Parse(userIdStr);
        }




        [HttpPost("{matchId}")]
        public async Task<IActionResult> AddToPlaylist(int matchId)
        {
            var userId = GetUserId();

            if (await _context.Playlists.AnyAsync(p => p.UserId == userId && p.MatchId == matchId))
                return BadRequest("Already in playlist.");

            _context.Playlists.Add(new Playlist { UserId = userId, MatchId = matchId });
            await _context.SaveChangesAsync();
            return Ok("Match added to playlist.");
        }


        [HttpDelete("{matchId}")]
        public async Task<IActionResult> RemoveFromPlaylist(int matchId)
        {
            var userId = GetUserId();
            var entry = await _context.Playlists.FindAsync(userId, matchId);
            if (entry == null) return NotFound();

            _context.Playlists.Remove(entry);
            await _context.SaveChangesAsync();
            return Ok("Removed.");
        }

        [HttpGet]
        public async Task<IActionResult> GetPlaylist()
        {
            var userId = GetUserId();
            var playlist = await _context.Playlists
                .Where(p => p.UserId == userId)
                .Include(p => p.Match)
                .Select(p => p.Match)
                .ToListAsync();

            return Ok(playlist);
        }
    }
}
