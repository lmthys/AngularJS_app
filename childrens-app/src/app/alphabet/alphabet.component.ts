import { Component, OnInit } from '@angular/core';
import { Game } from './levels/game';
import { GAMES } from './levels/mock-games';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  games = GAMES;
  
  selectedGame: Game;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(game: Game): void{
    this.selectedGame = game;
  }

}
