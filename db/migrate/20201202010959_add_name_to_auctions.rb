class AddNameToAuctions < ActiveRecord::Migration[6.0]
  def change
    add_column :auctions, :name, :string
  end
end
