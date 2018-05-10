class Deck < ApplicationRecord
  belongs_to :player
  has_many :card_decks
  
  def list_of_cards
    CardDeck.where(deck_id: id).map(&:data)
  end
end
