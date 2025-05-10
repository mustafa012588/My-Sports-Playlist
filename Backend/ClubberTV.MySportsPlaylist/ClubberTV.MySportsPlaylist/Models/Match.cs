namespace ClubberTV.MySportsPlaylist.Models
{
    public class Match
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Competition { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; } 
        public ICollection<Playlist> Playlists { get; set; }
    }
}
