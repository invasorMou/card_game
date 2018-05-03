class CardDeck < ApplicationRecord
  belongs_to :deck
  belongs_to :card_copy
end
