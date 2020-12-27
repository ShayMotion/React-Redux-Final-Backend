class AuctionSerializer
    include FastJsonapi::ObjectSerializer
   attributes :title, :start_date, :end_date

   has_many :guitars


#    has_many :guitars, serializer GuitarSerializer
end