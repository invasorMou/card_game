class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "player_#{current_player.id}"
    Seek.create(current_player)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    Seek.remove(current_player.id)
  end

  def speak(data)
    Game.speak(data)
    REDIS.set("msgFromConsole", data['msg'])
  end

  def load_decks
    Game.load_decks
  end
end
