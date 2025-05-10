﻿namespace ClubberTV.MySportsPlaylist.Models
{
    public class Playlist
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int MatchId { get; set; }
        public Match Match { get; set; }
    }
}
