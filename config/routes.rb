Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
  get "groups/group"
  resources :groups, only: [:new, :create]
end