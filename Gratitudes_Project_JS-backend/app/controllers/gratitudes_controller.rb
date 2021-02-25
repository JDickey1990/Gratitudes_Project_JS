class GratitudesController < ApplicationController

    def index 
        gratitudes = Gratitude.all
        render json: gratitudes
    end 
    
     def create 
        gratitude = Gratitude.create(gratitude_params)
        render json: gratitude
     end 

    def destroy 
        gratitude = Gratitude.find(params[:id])
        gratitude.destroy
    end 

    private 

    def gratitude_params
        params.require(:gratitude).permit(:name, :description, :reason, :user_id, :image)
    end

end
