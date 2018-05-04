class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
    	t.string :name
      t.string :klass
      t.string :rarity
      t.string :kingdom
      t.string :collection
      t.integer :collection_number
      t.string :skills
      t.integer :attack
      t.integer :hp
    	t.string :card_image
    end
  end
end
