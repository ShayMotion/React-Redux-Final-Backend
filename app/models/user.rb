class User < ApplicationRecord
    has_secure_password
    belongs_to :hometown, class_name: "Location"
    has_many :guitars 
    has_many :auctions
 

    validates :name, :username, :hometown, presence: true
    validates :username, uniqueness: true
end
