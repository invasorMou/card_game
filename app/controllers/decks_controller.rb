class DecksController < ApplicationController
  def index
    @cards = CardCopy.where(player_id: params[:player_id])
    
  end
end
