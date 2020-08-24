class Price < ApplicationRecord
    belongs_to :guitar, foreign_key: :price_id
 end