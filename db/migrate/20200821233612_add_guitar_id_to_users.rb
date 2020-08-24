class AddGuitarIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :guitar_id. :integer
  end
end
