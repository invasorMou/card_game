class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.integer :player_id
      t.string :deck_name

      t.timestamps
    end
  end
end
