import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../counting/levels/game';


@Component({
  selector: 'app-counting-detail',
  templateUrl: './counting-detail.component.html',
  styleUrls: ['./counting-detail.component.css']
})
export class CountingDetailComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
