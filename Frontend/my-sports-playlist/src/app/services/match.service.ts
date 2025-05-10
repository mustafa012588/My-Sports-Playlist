import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../Models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'https://localhost:7166/api/Matches';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }
}
