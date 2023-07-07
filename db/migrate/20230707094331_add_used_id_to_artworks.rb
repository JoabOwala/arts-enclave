class AddUsedIdToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :user_id, :integer
  end
end
