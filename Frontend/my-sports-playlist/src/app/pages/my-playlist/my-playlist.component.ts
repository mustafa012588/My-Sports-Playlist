import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { NotificationService } from '../../services/notification.service';
import { PlaylistItem } from '../../Models/playlist-item';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-playlist',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {
  playlist: PlaylistItem[] = [];

  constructor(
    private playlistService: PlaylistService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadPlaylist();
  }

  loadPlaylist() {
    this.playlistService.getPlaylist().subscribe({
      next: (data) => this.playlist = data,
      error: () => this.notify.error('Failed to load playlist')
    });
  }

  removeFromPlaylist(matchId: number) {
    this.playlistService.removeFromPlaylist(matchId).subscribe({
      next: () => {
        this.playlist = this.playlist.filter(item => item.matchId !== matchId);
        this.notify.success('Removed from playlist');
      },
      error: () => this.notify.error('Failed to remove from playlist')
    });
  }
}
