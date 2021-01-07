class Auction < ApplicationRecord
    belongs_to :user
    has_many :guitars
    has_many :brands, through: :guitars
    has_many :models

    validates :title, :user, presence: true 
end
