# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Create Users
sarah = User.create(name: "Sarah")
kenz = User.create(name: "Kenz")

gratitudes = ["Money In The Bank", "Good Friends", "Freedom Of Religion", "Parents", "Weekends", "Pets", "Learning From Mistakes", "Opportunity To Get An Education", 
"Having A Home", "The Ability To Read", "Breathing Fresh Air", "Laughter", "Sunshine", "Time", "Clean Water", "Books", "Kindness Of A Stranger","Campfires", "Art", 
"Mountains", "Grocery Stores", "Sunsets", "Moon & Stars", "Air Conditioning", "Oceans", "Modern Medicine", "Music", "Modern Medicine", "Entrpreneurs", "Inventors"
]

#Create Gratitudes

gratitudes.each do |gratitude|
    new_gratitude = sarah.gratitudes.build(name: gratitude)
    new_gratitude.save
end
# family =sarah.gratitudes.build(name: "Family", description: "My husband and my kids.", reason: "They keep me grounded")
# family.save
home =kenz.gratitudes.build(name:"Home", description: "The house we live in currently", reason: "It keeps us warm and we have shelter so at night if it is raining or snowing we are safe.")
home.save

# goodhealth = sarah.gratitudes.build(name: "Good Health")