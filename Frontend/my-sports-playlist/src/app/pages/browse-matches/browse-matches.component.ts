import { Component, OnInit } from '@angular/core';
import { Match } from '../../Models/match';
import { MatchService } from '../../services/match.service';
import { PlaylistService } from '../../services/playlist.service';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-browse-matches',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './browse-matches.component.html',
  styleUrls: ['./browse-matches.component.css']
})
export class BrowseMatchesComponent implements OnInit {
  matches: Match[] = [];
  filter: 'All' | 'Live' | 'Replay' = 'All';
addedMatchIds: number[] = [];

  constructor(
    private matchService: MatchService,
    private playlistService: PlaylistService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.getMatches().subscribe({
      next: (data) => this.matches = data,
      error: () => this.notify.error('Failed to load matches')
    });
  }

  addToPlaylist(matchId: number) {
  this.playlistService.addToPlaylist(matchId).subscribe({
    next: () => {
      this.addedMatchIds.push(matchId); // 👈 نحفظ ID الماتش بعد الإضافة
      this.notify.success('Added to playlist');
    },
    error: (err) => {
      if (err.error === 'Already in playlist.') {
this.notify.warn('Match is already in your playlist.');
        this.addedMatchIds.push(matchId); // 👈 نحفظه حتى لو كان مضاف من قبل
      } else {
        this.notify.error('Failed to add match.');
      }
    }
  });
}


  filteredMatches(): Match[] {
    if (this.filter === 'All') return this.matches;
    return this.matches.filter(m => m.status === this.filter);
  }

  setFilter(value: 'All' | 'Live' | 'Replay') {
    this.filter = value;
  }
}
