class AuctionSerializer
    include FastJsonapi::ObjectSerializer
   attributes :start_date, :end_date, guitars_json


   has_many :guitars, serializer GuitarSerializer
end
