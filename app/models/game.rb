class Game
  def self.start(current_player1, current_player2)
    first, second = [current_player1.to_s, current_player2].shuffle

    Game.set_players(first,second)

    Game.msg_player('first', "game_start", "You are going first")
    Game.msg_player('second', "game_start", "You are going second")

    REDIS.set("opponent_for:#{first}", second)
    REDIS.set("opponent_for:#{second}", first)
  end

  def self.set_players(p1,p2)
    REDIS.set("first", p1)
    REDIS.set("second", p2)
  end

  def self.get_players
    first = REDIS.get("first")
    second = REDIS.get("second")
    [first, second]
  end

  def self.msg_player(player,action,msg)
    player = REDIS.get("#{player}")
    ActionCable.server.broadcast "player_#{player}", {action: action, msg: msg}
  end

  def self.msg_both(action, msg)
    arr = Game.get_players
    arr.map do |player_id|
      ActionCable.server.broadcast "player_#{player_id}", {action: action, msg: msg}
    end
  end

  def self.opponent_for(current_player)
    REDIS.get("opponent_for:#{current_player}")
  end

  def self.speak(data)
    Game.msg_both("speak", data['msg'])
  end

  def self.load_decks
    players = Game.get_players
    decks = []
    players.each do |player_id|
      deck = Game.deck(player_id)
      decks.push(deck)
    end
    Game.msg_both('load_deck', decks)
    #
    #
    # player1 = REDIS.get("first")
    # deck1 = Game.deck(player1)
    # player2 = REDIS.get("second")
    # deck2 = Game.deck(player2)
    #
    # Game.msg_both('load_deck', deck2)

  end

  def self.deck(player)
    player_id = REDIS.get("#{player}")
    player = Player.find(player_id)
    deck = player.deck.map do |card|
      card_obj = card.card_copy.card
      card_data = card_obj.serializable_hash
      card_data['temp_url'] = card_obj.url
      card_data
    end
    deck
  end

  # def self.card(card_obj)
  #     card_data = card_obj.serializable_hash
  #     card_data['temp_url'] = card_obj.url
  #     card_data
  # end
end
