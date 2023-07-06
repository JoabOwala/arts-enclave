class DropTableName < ActiveRecord::Migration[7.0]
  def change
    drop_table :collectors
    drop_table :arts
    drop_table :artists
    
  end
end
