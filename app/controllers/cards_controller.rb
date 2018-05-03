class CardsController < ApplicationController
  def index
  	@cards = Card.all
  end
  def new
  	@card = Card.new()
  end
  def create
  	Card.create!(card_params)
  end
  def show
    @card = Card.find(params[:id])
  end
  private
 	def card_params
 		params.require(:card).permit(:name, :klass, :rarity, :mana_cost, :type_of_card, :collection, :collection_number, :skills, :attack, :hp)
 	end
end
