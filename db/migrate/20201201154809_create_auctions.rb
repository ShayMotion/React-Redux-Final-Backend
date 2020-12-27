class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      
    end
  end
end
