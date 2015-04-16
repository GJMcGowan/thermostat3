require 'sinatra'

set :public_folder, proc { File.join(root) }

# get '/' do
#   { 'temperature':'20' }
# end
