class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json" # fixed syntax error

  get "/riders" do
    riders = Rider.all
    riders.to_json # pluralized variable name
  end

  post "/riders" do
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
    rider.delete
    rider.to_json
  end
end
