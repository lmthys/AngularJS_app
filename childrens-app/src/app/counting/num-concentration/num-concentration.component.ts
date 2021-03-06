import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { Card } from './card';
import { CARDS } from './Cards';

@Component({
  selector: 'app-num-concentration',
  templateUrl: './num-concentration.component.html',
  styleUrls: ['./num-concentration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NumConcentrationComponent implements OnInit {

  cards = CARDS;
  memcards = [];
  memory_values = [];
  memory_tile_ids = [];
  numFlipped = 0;
  attempts = 0;

  constructor() { }

  ngOnInit() {
    this.newBoard();
  }

  newBoard(){
    document.getElementById('placecards').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('attempts').innerHTML = "";
    this.memcards = [];
    this.cards = CARDS;
    this.numFlipped = 0;
    this.cards = this.shuffle(this.cards);
    this.attempts = 0;
	  var that = this;

    for(var i = 0; i < 8; i++){
      this.memcards.push(this.cards[i]);
      this.memcards.push(this.cards[i]);
    }

    this.memcards = this.shuffle(this.memcards);
    var output = '';

    this.memcards.forEach(function(memory_values, index){
      // console.log(index + "," + memory_values.id);
      var d = document.getElementById('placecards');
      var node = document.createElement("button");
      node.classList.add('tile');
      node.id =  memory_values.id +index;
      d.appendChild(node);
      node.addEventListener("click", function(){
        that.memoryFlipTile(this,memory_values.id);
      });
    });
    // console.log(output);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  setCardAsFlipped(tile, value) {
    this.memory_values.push(value);
    this.memory_tile_ids.push(tile.id);
	  console.log(this.memory_tile_ids);
  }
  
  matchCards() {
    this.numFlipped += 2;
    // Clear both arrays
    this.memory_values = [];
    this.memory_tile_ids = [];
  }
  
  isGameOver() {
    // Check to see if the whole board is cleared
    console.log(this.numFlipped + "/" + this.cards.length + " match!");
    return this.numFlipped == this.memcards.length;
  }
  
  gameIsOver() {
    if(this.attempts == 8){
      document.getElementById('result').innerHTML = "Nice job! You completed the game in " + this.attempts + " turns! You're a pro!";
    }
    else{
      document.getElementById('result').innerHTML = "Nice job! You completed the game in " + this.attempts + " turns! Think you can do better?";
    }
  }
  
  cardsDoNotMatch() {
    var that = this;
	  setTimeout(function(){that.flipCardBack()}, 700);
  }
  
  flipCard(tile, value) {
    tile.style.background = '#FFF';
    tile.innerHTML = value;
	  console.log(tile.id);
  }
  
  flipCardBack() {
    // Flip the 2 tiles back over
	  console.log(this.memory_tile_ids);
    var tile_1 = document.getElementById(this.memory_tile_ids[0]);
    var tile_2 = document.getElementById(this.memory_tile_ids[1]);
    tile_1.style.background = '#825e9e';
    tile_1.innerHTML = "";
    tile_2.style.background = '#825e9e';
    tile_2.innerHTML = "";
  
    // Clear both arrays
    this.memory_values = [];
    this.memory_tile_ids = [];
  }
  
  memoryFlipTile(tile, value) {
    console.log(value);

    //if can flip card
    if (tile.innerHTML == "" && this.memory_values.length < 2) {
      this.flipCard(tile, value);
      
      //if no cards flipped
      if (this.memory_values.length == 0) {
        this.setCardAsFlipped(tile, value);
      } 
      //else if there is one card flipped
      else if(this.memory_values.length == 1) {
        this.setCardAsFlipped(tile, value);
        
        //if there is a match
        if(this.memory_values[0] == this.memory_values[1]) {
          this.matchCards();
          this.attempts++;
          console.log(this.attempts);
          document.getElementById('attempts').innerHTML = "Turns: " + this.attempts;

          //check if game is over
          if (this.isGameOver()) {
            this.gameIsOver();
          }
        } 
        else {
          this.cardsDoNotMatch();
          this.attempts++;
          //console.log(this.attempts);
          document.getElementById('attempts').innerHTML = "Turns: " + this.attempts;
        }
      }
    }
  }

}
