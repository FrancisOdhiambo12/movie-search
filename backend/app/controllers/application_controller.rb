require 'sinatra'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/movies' do
    movies = Movies.all
    movies.to_json
  end

end