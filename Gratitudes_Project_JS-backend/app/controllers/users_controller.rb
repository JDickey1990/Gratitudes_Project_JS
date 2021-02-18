class UsersController < ApplicationController
    
    def index 
       
    end 

    def show 

     
    end 
    
    def create 
       user = User.find_by(name: params[:name])
        if user 
            render json: user, include: [:gratitudes]
        else 
            user = User.create(name: params[:name])
            render json: user, include: [:gratitudes]
        end   
    end 

    def destroy 

    end 
    
end
