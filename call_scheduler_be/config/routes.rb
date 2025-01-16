Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :show, :create] # For global user queries
    resources :timeslots, only: [:index, :show, :create, :update] # For global timeslot queries
  end
end
