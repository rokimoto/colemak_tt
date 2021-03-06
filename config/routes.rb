Rails.application.routes.draw do
  root 'pages#index'

  get 'levels' => "levels#index"
  get 'levels/list' => 'levels#list'
  get 'levels/new' => 'levels#new'
  post 'levels' => 'levels#create'
  # get 'levels/item' => 'levels#item'
  get 'levels/:id/item' => 'levels#item', as: :levels_item
  get 'levels/:id' => "levels#show", as: :level
  get 'levels/:id/edit' => 'levels#edit', as: :edit_level
  patch 'levels/:id' => 'levels#update'
  delete 'levels/:id' => 'levels#destroy'

  get 'login' => "sessions#new"
  post 'login' => "sessions#create"
  delete 'sessions' => "sessions#destroy"

  get 'pages/loggedin' => "pages#loggedin"
  get 'pages' => "pages#index"

  get 'signup' => "users#new"
  post 'users' => "users#create"
  get 'users/:id' => "users#show", as: :profile
  get 'users/:id/edit' => "users#edit", as: :edit_user
  patch 'users/:id' => "users#update", as: :user
  delete 'users/:id' => "users#destroy"

  post 'user/scores' => "scores#create"

  match 'auth/:provider/callback', to: 'sessions#create_facebook', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'signout', to: 'sessions#destroy_facebook', as: 'signout', via: [:get, :post]

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
