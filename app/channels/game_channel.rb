class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "player_#{uuid}"
    Seek.create(uuid)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    Seek.remove(uuid)
  end
end
