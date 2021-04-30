Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    namespace 'api' do
      namespace 'v1' do
        get "users" => "users#index"
      end
    end
    namespace :api do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/auth/registrations'
      }
    end
  end
