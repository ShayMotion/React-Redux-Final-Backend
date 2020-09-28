class Api::V1::AuctionsController < ApplicationController
    before_action :set_auction, only: [:show, :update, :destroy]
  
    # GET /users
    def index

        if logged_in?

        end

      @auctions = current_user.auctions
  
      render json: AuctionSerializer.new(@auctions)
    else
        render json: {
            error: "You must be logged in to see auctions"
        }
    end
  
    # GET /users/1
    def show
      render json: @auction
    end
  
    # POST /users
    def create
      @auction = Auction.new(auction_params)
  
      if @auction.save
        render json: @auction, status: :created, location: @auction
      else
        render json: @auction.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
      if @auction.update(auction_params)
        render json: @auction
      else
        render json: @auction.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @auction.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_auction
        @auction = auction.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def auction_params
        params.require(:user).permit(:name, :username, :password_digest)
      end
  end
  