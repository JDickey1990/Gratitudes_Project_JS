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
            newUser = User.create(name: params[:name])
            render json: newUser, include: [:gratitudes]
        end   
    end 

    def destroy 

    end 
    
end
