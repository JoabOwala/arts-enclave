Rails.application.routes.draw do
  resources :artworks
  resources :users do
    # Custom route for fetching user's artworks
    get '/artworks', to: 'artworks#user_artworks'
  end
  
  # Custom route for creating an artwork
  post '/artworks', to: 'artworks#create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
