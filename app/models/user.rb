class User < ApplicationRecord
    has_secure_password
    has_many :guitars 
    has_many :brands through :guitars
    has_many :models through :guitars
    has_many :years through :guitars
    has_many :prices through :guitars
end
