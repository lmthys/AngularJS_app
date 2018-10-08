import { Component, OnInit } from '@angular/core';
import { Game } from './levels/game';
import { GAMES } from './levels/mock-games';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  //count number of things in sequence
  //match number with word
  games = GAMES;

  selectedGame: Game;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(game: Game): void{
    this.selectedGame = game;
  }
}
