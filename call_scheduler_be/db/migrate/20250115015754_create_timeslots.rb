class CreateTimeslots < ActiveRecord::Migration[7.0]
  def change
    create_table :timeslots do |t|
      t.datetime :start
      t.datetime :end
      t.references :coach, null: false, foreign_key: { to_table: :users }
      t.references :student, foreign_key: { to_table: :users }, optional: true
      t.timestamps
    end
  end
end
