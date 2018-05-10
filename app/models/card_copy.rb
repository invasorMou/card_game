class CardCopy < ApplicationRecord
  has_many :card_decks
  belongs_to :player
  belongs_to :card
  
  def data
    Card.find(card_id)
  end
end
