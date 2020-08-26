class Api::V1::SessionsController < ApplicationController
    def create
        @user = User.find(username: params[:session][:username])

        if @user && @user.authenticate(params[:session][:username])
           session[:user_id] = @user.id 
            render json: @user
        else
            render json: {
                error: "Invalid Credentials"
            }
    end

    def 
    end

end
