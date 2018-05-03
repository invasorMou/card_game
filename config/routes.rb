Rails.application.routes.draw do
  devise_for :players
  resources :cards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_scope :player do
    root to: "devise/sessions#new"
  end

  resources :players do
    resources :decks
    resources :collection
    resources :battle do
      get "room1", to: 'battle#show'
    end
  end
end
