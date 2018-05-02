class CreateCardCopies < ActiveRecord::Migration[5.1]
  def change
    create_table :card_copies do |t|
      t.integer :player_id
      t.integer :card_id

      t.timestamps
    end
  end
end
