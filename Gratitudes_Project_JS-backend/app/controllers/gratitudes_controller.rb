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

     end 

    def destroy 
        gratitude = Gratitude.find(params[:id])
        gratitude.destroy
    end 
end
