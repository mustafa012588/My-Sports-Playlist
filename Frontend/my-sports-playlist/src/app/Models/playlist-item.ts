export interface PlaylistItem {
  matchId: number;
  title: string;
  competition: string;
  date: string;
  status: 'Live' | 'Replay';
}
