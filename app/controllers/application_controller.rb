class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
    before_action :authenticate_player!
    before_action :cookie_set

   def cookie_set
       @user = current_player
       return unless current_player
       cookies.signed[:player_id] = @user.id
     end
  protected

  def after_sign_in_path_for(resource)
  "/players/#{resource.id}"
  end

end
