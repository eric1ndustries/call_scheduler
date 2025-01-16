class DropUserTimeslotLists < ActiveRecord::Migration[6.1]
  def change
    drop_table :user_timeslot_lists
  end
end