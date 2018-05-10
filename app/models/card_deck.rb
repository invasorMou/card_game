class CardDeck < ApplicationRecord
  belongs_to :deck
  belongs_to :card_copy
  
  def data
    CardCopy.find(card_copy_id).data
  end
end
