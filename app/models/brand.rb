class Brand < ApplicationRecord
    belongs_to :guitars, foreign_key: :brand_id
    has_many :models
    has_many :years
    has_many :prices
 end