module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_player

    def connect
      self.current_player = Player.find(cookies.signed[:player_id])
    end

  end
end
