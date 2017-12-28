require "sinatra"
require "sinatra/json"
require 'pry'

QUOTE_LIST_PATH = File.join(File.dirname(__FILE__), 'quotes.json')
CUSTOM_QUOTES_PATH = File.join(File.dirname(__FILE__), 'custom_quotes.json')

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

get "/" do
  erb :home
end

get "/random_quote" do
  famous_quotes = JSON.parse(File.read(QUOTE_LIST_PATH))
  custom_quotes = JSON.parse(File.read(CUSTOM_QUOTES_PATH))
  json (famous_quotes + custom_quotes).sample
end

post '/quotes' do
  result = {
    quoteAuthor: params[:quoteAuthor],
    quoteText: params[:quoteText]
  }
  json = JSON.parse(File.read(CUSTOM_QUOTES_PATH))
  json << result
  File.write(CUSTOM_QUOTES_PATH, 'w', JSON.pretty_generate(json))
  status 201
  json result
end
