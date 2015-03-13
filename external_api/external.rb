require 'sinatra'
require 'json'


lessons = (1..20).map do |i|
  {
    :id => i,
    :name => "lesson-#{i}",
    :expert_id => i
  }
end

experts = (1..20).map do |i|
  {
    :id => i,
    :name => "mentor-name-#{i}",
    :age => 20 + i
  }
end

def process_headers h
  h['Access-Control-Allow-Origin'] = '*'
  h['Content-Type'] = 'application/json'
end

get '/experts' do
  process_headers response.headers
  experts.to_json
end

get '/lessons' do
  process_headers response.headers
  lessons.to_json
end

get '/experts/:id' do
  process_headers response.headers
  i = params[:id].to_i - 1
  experts[i].to_json
end
