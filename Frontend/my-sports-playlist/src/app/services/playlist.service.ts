import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistItem } from '../Models/playlist-item';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'https://localhost:7166/api/Playlist';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
  }

  getPlaylist(): Observable<PlaylistItem[]> {
    return this.http.get<PlaylistItem[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  addToPlaylist(matchId: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/${matchId}`, null, {
    headers: this.getAuthHeaders()
  });
}


  removeFromPlaylist(matchId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${matchId}`, {
      headers: this.getAuthHeaders()
    });
  }
}
