class Card < ActiveRecord::Base
  has_many :card_copies
end
