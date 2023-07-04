class CreateArts < ActiveRecord::Migration[7.0]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.string :medium
      t.integer :year
      t.decimal :price
      t.integer :collector_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
