class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name 
  has_many :auctions, serializer: AuctionSerializer
  attribute do |user|
    {
      city: user.city,
      state: user.state,
      country: user.country
    }
  end
end