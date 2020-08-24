class Model < ApplicationRecord
    belongs_to: :brands, foreign_key: :model_id
    has_many :years
    has_many :prices
 end