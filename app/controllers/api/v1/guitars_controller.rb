class Api::V1::GuitarsController < ApplicationController
    before_action :set_guitar, only: [:show, :update, :destroy]
  
    # GET /users
    def index
      if logged_in?
        @guitars = current_user.guitars
        render json: GuitarSerializer.new(@guitars)
      else
        render json: {
            error: "You must be logged in to see guitars"
        }
      end
    end
  
    # GET /users/1
    def show
      render json: @guitar
    end
  
    # POST /users
    def create
      @guitar = current_user.guitars.build(guitar_params)
  
      if @guitar.save
        render json: GuitarSerializer.new(@guitar), status: :created
      else
        error_resp = {
          error: @guitar.errors.full_messages.to_sentence
        }
        render json: error_resp, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
    if @guitar.update(guitar_params)
      render json: guitarSerializer.new(@guitar), status: :ok
    else
      error_resp = {
        error: @guitar.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

    # DELETE /users/1
    def destroy
      if @guitar.destroy
        render json: { data: "guitar successfully destroyed" }, status: :ok
      else 
        error_resp = {
          error: "guitar Not Found and Not Destroyed"
        }
        render json: error_resp, status: :unprocessable_entity
    end
  end

  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_guitar
        @guitar = guitar.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def guitar_params
        params.require(:guitar).permit(:brand, :model, :year, :price)
      end
  end
