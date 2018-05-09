//= require cable

console.log('hi')


App.game = App.cable.subscriptions.create("GameChannel", {
  connected: function() {
    return this.printMessage("Waiting for opponent...");
  },
  printMessage: function(message) {
    return $("#msg").append("<p>" + message + "</p>");
  },
  displayDeck: function(cardData, playerData){
    if(playerData == 1){
      return $('.d-z-1').empty().append("<img src=" + cardData.temp_url + " width='100%'>");
    } else {
      return $('.opp .d-z-1').empty().append("<img src=" + cardData.temp_url + " width='100%'>");

    }
  },
  disconnected: function() {},
  received: function(data) {
    switch (data.action) {
      case 'speak':
        this.printMessage(data.msg);
        break;
      case "game_start":
        this.printMessage(data.msg);
      case "load_deck":
        this.displayDeck(data.msg, data.player);
      default:
    }
  },
  speak: function(data) {
      this.perform('speak', {
      msg: data
    });
  },
  deck: function(data) {
      this.perform('load_deck', {
      msg: 'first card'
    });
  }
});
