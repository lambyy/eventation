class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.string :image_url, null: false
      t.string :description, null: false
      t.string :category, null: false

      t.timestamps
    end

    add_index :events, :organizer_id
  end
end
