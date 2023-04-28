class CreateBikes < ActiveRecord::Migration[6.1]
  def change
    create_table :bikes do |t|
      t.string :name
      t.string :price
      t.string :status_pay
      t.string  :image
    end  
  end
end
