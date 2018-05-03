class CollectionController < ApplicationController
  def index
    @cards = Card.all
  end
end
