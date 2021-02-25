Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :gratitudes, only: [:create, :index, :destroy]

  post '/users', to: 'users#create'
end
