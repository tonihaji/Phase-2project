class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json" # fixed syntax error

  get "/riders" do
    riders = Rider.all
    riders.to_json # pluralized variable name
  end

  post "/riders/" do
    rider = Rider.create(
      name: params[:name],
      model_vehicle: params[:model_vehicle]
    )
    rider.to_json
  end

  patch "/riders/:id" do
    rider = Rider.find_by(id: params[:id])
    rider.update(
      name: params[:name],
      model_vehicle: params[:model_vehicle]
    )
    rider.to_json
  end

  delete "/riders/:id" do
    rider = Rider.find_by(id: params[:id])
    rider.destroy
    rider.to_json
  end
  get "/users" do
    riders = User.all
    riders.to_json # pluralized variable name
  end
  post "/users" do
    
       
    y = User.create(
      name: params[:name],
      password: params[:password],
      email: params[:email]
    )
    y.to_json
  end
  get "/bikes" do
    bikes = Bike.all
    bikes.to_json # pluralized variable name
  end
  post "/bikes" do
    bike = Bike.create(
      name: params[:name],
      price: params[:price],
      status_pay: params[:status_pay],
      image: params[:image]
    )
    bike.to_json
  end
  delete "/bikes/:id" do
    bike = Bike.find_by(id: params[:id])
    bike.destroy
    bike.to_json
  end

end
