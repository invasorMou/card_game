App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    @printMessage("Waiting for opponent...")
    # Called when the subscription is ready for use on the server

  printMessage: (message) ->
    $("#msg").append("<p>#{message}</p>")

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    switch data.action
      when "game_start"
        App.board.position("start")
        App.board.orientation(data.msg)
    # Called when there's incoming data on the websocket for this channel
