class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :name
      t.references :rider, foreign_key: true
      t.references :user, foreign_key: true
       t.integer :rating
       t.string :status
       
      t.timestamps
      end
  end
end
