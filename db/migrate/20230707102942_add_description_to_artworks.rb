class AddDescriptionToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :description, :string
  end
end
