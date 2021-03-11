# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_11_043218) do

  create_table "auctions", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.integer "user_id"
    t.string "name"
    t.string "auction_url"
    t.string "guitar"
    t.integer "likes", default: 0
  end

  create_table "guitars", force: :cascade do |t|
    t.string "brand"
    t.string "model"
    t.string "year"
    t.string "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "auction_id"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "city"
    t.string "state"
    t.string "country"
  end

end
