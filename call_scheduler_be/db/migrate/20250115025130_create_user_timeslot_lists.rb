class CreateUserTimeslotLists < ActiveRecord::Migration[7.0]
  def change
    create_table :user_timeslot_lists do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :timeslots, array: true, default: []
      
      t.timestamps
    end
  end
end
