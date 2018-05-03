class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
    before_action :authenticate_player!

protected

  def after_sign_in_path_for(resource)
  "/players/#{resource.id}"
  end

end
