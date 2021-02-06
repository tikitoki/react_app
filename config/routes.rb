Rails.application.routes.draw do
  get 'index/test'
  # get 'tools/bpm_test'
  get 'user/index'
  
  #direct every route dont match any routes in this file to top#home
  get '*page' , to: 'top#home' ,constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'top#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
