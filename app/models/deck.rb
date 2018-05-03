class Deck < ApplicationRecord
  belongs_to :player
  has_many :card_decks
end
