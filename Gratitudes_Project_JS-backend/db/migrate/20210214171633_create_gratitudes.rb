class CreateGratitudes < ActiveRecord::Migration[6.0]
  def change
    create_table :gratitudes do |t|
      t.belongs_to :user
      t.string :name 
      t.string :description
      t.string :reason
      t.string :image
      t.timestamps
    end
  end
end
