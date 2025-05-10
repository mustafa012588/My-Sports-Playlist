import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  standalone: true,
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  matchId: number = 0;

  constructor(private route: ActivatedRoute) {
    this.matchId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
