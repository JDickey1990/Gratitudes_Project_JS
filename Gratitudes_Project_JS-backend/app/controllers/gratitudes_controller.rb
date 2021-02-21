class GratitudesController < ApplicationController

    def index 
        gratitudes = Gratitude.all
        render json: gratitudes
    end 

    def show 
        gratitude = Gratitude.find(params[:id])
        render json: gratitude
    end 
    
     def create 
        # binding.pry
        gratitude = Gratitude.create(name: params[:name], description: params[:description], reason: params[:reason], user_id: params[:user_id])
        render json: gratitude
     end 

    def destroy 
        gratitude = Gratitude.find(params[:id])
        gratitude.destroy
    end 
end
