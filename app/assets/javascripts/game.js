//= require cable

console.log('hi')


App.game = App.cable.subscriptions.create("GameChannel", {
  connected: function() {
    return this.printMessage("Waiting for opponent...");
  },
  printMessage: function(message) {
    return $("#msg").append("<p>" + message + "</p>");
  },
  disconnected: function() {},
  received: function(data) {
    switch (data.action) {
      case "game_start":
        return this.printMessage("Game started!");
    }
  }
});
