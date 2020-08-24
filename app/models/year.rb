class Year < ApplicationRecord
    belongs_to :brand, foreign_key: :year_id
    has_many :guitars
 end