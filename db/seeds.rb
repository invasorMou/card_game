# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Card.create(name: "", klass: '', rarity: "", mana_cost:  , type_of_card: '', collection: '', skills: '', attack: , hp:  , card_image: "")




Card.create(name: "Paragon of Light", klass: 'Paladin', rarity: "rare", mana_cost: 3 , type_of_card: 'minion', collection: 'Basic Set', skills: 'Has Taunt and Lifesteal while it has 3 or more Attack', attack: 2, hp: 5, card_image: "https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/d/d2/Paragon_of_Light%2889433%29_Gold.png/200px-Paragon_of_Light%2889433%29_Gold.png?version=c8d488378ed85d14b64fff26f2b149d7")

Card.create(name: "Hunting Mastiff", klass: 'Hunter', rarity: "common", mana_cost: 2, type_of_card: 'minion', collection: 'Basic Set', skills: 'Echo and Rush', attack: 2, hp: 1, card_image: "https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/a/a7/Hunting_Mastiff%2889361%29.png/200px-Hunting_Mastiff%2889361%29.png?version=d6fecbacc8be1f3d1dd1777fec501afb")

Card.create(name: "Ysera", klass: 'Neutral', rarity: "legendary", mana_cost: 9, type_of_card: 'minion', collection: 'Basic Set', skills: 'At the end of your turn, draw a Dream Card', attack: 4, hp: 12, card_image: "https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/6/6d/Ysera%28495%29.png/200px-Ysera%28495%29.png?version=b7017ded8990146584a8dccf481e1c1e")




# t.string "name"
# t.string "klass"
# t.string "rarity"
# t.integer "mana_cost"
# t.string "type_of_card"
# t.string "collection"
# t.integer "collection_number"
# t.string "skills"
# t.integer "attack"
# t.integer "hp"
# t.string "card_image"
