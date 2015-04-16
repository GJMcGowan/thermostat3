require 'sinatra'

set :public_folder, proc { File.join(root) }

get '/' do
  redirect('/temperature_change.html')
end

# { 'temperature':'20' }
