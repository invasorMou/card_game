# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Player.create!(email: 'player1@gmail.com', password: '123456', password_confirmation:'123456')
Player.create!(email: 'player2@gmail.com', password: '123456', password_confirmation:'123456')

Card.create!(name: "Woods' Owl", klass: 'Creature', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 1, skills: 'Fly', attack: 1, hp: 3 , card_image: "basic-1.jpg")
Card.create!(name: "Bramble Elf", klass: 'Creature', rarity: "Rare", kingdom: 'Faunter', collection: 'Basic', collection_number: 2, skills: 'Sweet Scent, Antitoxins', attack: 1, hp: 3 , card_image: "basic-2.jpg")
Card.create!(name: "Moniur", klass: 'Creature', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 5, skills: '', attack: 1, hp: 3 , card_image: "basic-5.jpg")
Card.create!(name: "Snow Bat", klass: 'Creature', rarity: "Common", kingdom: 'Icy', collection: 'Basic', collection_number: 6, skills: 'Fly', attack: 1, hp: 2 , card_image: "basic-6.jpg")
Card.create!(name: "Nymph of the Bramble", klass: 'Creature', rarity: "Legendary", kingdom: 'Faunter', collection: 'Basic', collection_number: 8, skills: 'Purple touch, Toxineater', attack: 1, hp: 4 , card_image: "basic-8.jpg")
Card.create!(name: "Parlizo", klass: 'Creature', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 9, skills: 'Plate, Reflect', attack: 0, hp: 3 , card_image: "basic-9.jpg")


Deck.create!(player_id: 1)
Deck.create!(player_id: 2)

CardCopy.create!(player_id: 1, card_id: 1)
CardCopy.create!(player_id: 1, card_id: 2)
CardCopy.create!(player_id: 1, card_id: 3)
CardCopy.create!(player_id: 2, card_id: 1)
CardCopy.create!(player_id: 2, card_id: 2)
CardCopy.create!(player_id: 2, card_id: 3)

CardDeck.create!(deck_id:1, card_copy_id: 1)
CardDeck.create!(deck_id:1, card_copy_id: 2)
CardDeck.create!(deck_id:1, card_copy_id: 3)
CardDeck.create!(deck_id:2, card_copy_id: 1)
CardDeck.create!(deck_id:2, card_copy_id: 2)
CardDeck.create!(deck_id:2, card_copy_id: 3)
