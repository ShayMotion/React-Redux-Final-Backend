class Api::V1::AuctionsController < ApplicationController
    before_action :set_auction, only: [:show, :update, :destroy, :like]
  
    # GET /users
    def index
      if logged_in?
        @auctions = current_user.auctions
        render json: AuctionSerializer.new(@auctions)
      else
        render json: {
            error: "You must be logged in to see auctions"
        }
      end
    end
  
    # GET /users/1
    def show
      render json: @auction
    end
  
    # POST /users
    def create
      @auction = current_user.auctions.build(auction_params)
  
      if @auction.save
        render json: AuctionSerializer.new(@auction), status: :created
      else
        error_resp = {
          error: @auction.errors.full_messages.to_sentence
        }
        render json: error_resp, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
    if @auction.update(auction_params)
      render json: AuctionSerializer.new(@auction), status: :ok
    else
      error_resp = {
        error: @auction.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

    # DELETE /users/1
    def destroy
      if @auction.destroy
        render json: { data: "Auction successfully destroyed" }, status: :ok
      else 
        error_resp = {
          error: "Auction Not Found and Not Destroyed"
        }
        render json: error_resp, status: :unprocessable_entity
    end
  end

  def like
    puts "adding like to auction #{@auction.id}..."
    @auction.likes += 1
    
    if @auction.save
      render json: AuctionSerializer.new(@auction), status: :ok
    else
      error_resp = {
        error: @auction.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_auction
        @auction = Auction.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def auction_params
        params.require(:auction).permit(:title, :start_date, :end_date)
      end
  end
  