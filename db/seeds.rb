# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.create(name: "Woods' Owl", klass: 'Creature', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 1, skills: 'Fly', attack: 1, hp: 3 , card_image: "basic-1.jpg")

Card.create(name: "Bramble Elf", klass: 'Creature', rarity: "Rare", kingdom: 'Faunter', collection: 'Basic', collection_number: 2, skills: 'Sweet Scent, Antitoxins', attack: 1, hp: 3 , card_image: "basic-2.jpg")

Card.create(name: "Miracle Vine", klass: 'QuickSpell', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 3, skills: 'Return an ally to the hand', attack: '', hp: '', card_image: "basic-3.jpg")

Card.create(name: "Moniur", klass: 'Creature', rarity: "Common", kingdom: 'Faunter', collection: 'Basic', collection_number: 5, skills: '', attack: 1, hp: 3 , card_image: "basic-5.jpg")
