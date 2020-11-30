class User < ApplicationRecord
    has_secure_password
    has_many :guitars 
    has_many :auctions
 

    validates :name, :username, presence: true
    validates :username, uniqueness: true
end