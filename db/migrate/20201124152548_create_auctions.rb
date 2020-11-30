class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :name
      t.string :start_date
      t.string :end_date
      
      t.timestamps
    end
  end
end
