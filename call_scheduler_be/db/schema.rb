# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2025_01_16_052351) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "timeslots", force: :cascade do |t|
    t.datetime "start"
    t.datetime "end"
    t.bigint "coach_id", null: false
    t.bigint "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "notes"
    t.integer "rating"
    t.text "status"
    t.index ["coach_id"], name: "index_timeslots_on_coach_id"
    t.index ["student_id"], name: "index_timeslots_on_student_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "timeslots", "users", column: "coach_id"
  add_foreign_key "timeslots", "users", column: "student_id"
end
