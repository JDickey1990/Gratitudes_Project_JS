class UsersController < ApplicationController
    
    def index 
       
    end 

    def show 
     
    end 
    
    def create 
       user = User.find_by(name: params[:name])
    #    binding.pry
       render json: user, include: [:gratitudes]
        
    end 

    def destroy 

    end 
    
end
