//= require cable
//= require board
console.log('game.js loaded')


App.game = App.cable.subscriptions.create("GameChannel", {
  connected: function() {
    return this.printMessage("Waiting for opponent...");
  },
  printMessage: function(message) {
    return $("#msg").append("<p>" + message + "</p>");
  },
  displayDeck: function(cardData){
      return $('.d-z-1').empty().append("<img src=" + cardData['temp_url'] + " width='100%'>");
  },
  disconnected: function() {},
  received: function(data) {
    switch (data.action) {
      case 'speak':
        App.test.say(data);
        this.printMessage(data.msg);
        break;
      case "game_start":
        this.printMessage(data.msg);
      case "load_deck":
        App.decks.create(data.msg);
        App.decks.content()
        // this.displayDeck(data.msg[0]);
      default:
    }
  },
  speak: function(data) {
      this.perform('speak', {
      msg: data
    });
  },
  deck: function(data) {
      this.perform('load_decks', {
      msg: 'load decks'
    });
  }
});
