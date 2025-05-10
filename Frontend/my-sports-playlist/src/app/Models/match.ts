export interface Match {
  id: number;
  title: string;
  competition: string;
  date: string;
  status: 'Live' | 'Replay';
}
