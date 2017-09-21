class AddEventTypeToEventsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :event_type, :string, null: false
  end
end
