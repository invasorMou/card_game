//= require game
$(function() {
  console.log('board.js loaded');
  class Decks{
    create(arr){
      this.deck1 = arr[0];
      this.deck2 = arr[1];
    }
    content(){
      console.log(this.deck1);
      console.log(this.deck2);
    }
  }
  App.decks = new Decks();

});
