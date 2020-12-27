class Guitar < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :auction, optional: true
end