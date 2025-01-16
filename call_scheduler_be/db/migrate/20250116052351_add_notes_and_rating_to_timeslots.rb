class AddNotesAndRatingToTimeslots < ActiveRecord::Migration[7.0]
  def change
    add_column :timeslots, :notes, :text
    add_column :timeslots, :rating, :integer
    add_column :timeslots, :status, :text
  end
end
