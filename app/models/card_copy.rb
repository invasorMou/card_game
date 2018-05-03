class CardCopy < ApplicationRecord
  has_many :card_decks
  belongs_to :player
  belongs_to :card
end
