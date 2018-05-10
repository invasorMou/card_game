class DecksController < ApplicationController
  def index
    @cards = CardCopy.where(player_id: params[:player_id])
    @decks = Player.find(params[:player_id]).decks
  end
  
  def deckdata
    deck = Deck.find(params[:deck_id])
    cards = deck.list_of_cards.map(&:url)
    render json: {:payload => cards}.to_json 
  end
end
