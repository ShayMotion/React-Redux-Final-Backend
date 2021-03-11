class AddLikesToAuction < ActiveRecord::Migration[6.0]
  def change
    add_column :auctions, :likes, :integer, default: 0
  end
end
