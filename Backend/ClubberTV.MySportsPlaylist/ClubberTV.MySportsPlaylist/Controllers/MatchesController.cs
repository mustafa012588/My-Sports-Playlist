using ClubberTV.MySportsPlaylist.Data;
using ClubberTV.MySportsPlaylist.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClubberTV.MySportsPlaylist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MatchesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMatches()
        {
            return Ok(await _context.Matches.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddMatch(Match match)
        {
            _context.Matches.Add(match);
            await _context.SaveChangesAsync();
            return Ok(match);
        }
    }
}
