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


#Create Gratitudes
family =sarah.gratitudes.build(name: "Family", description: "My husband and my kids.", reason: "They keep me grounded")
family.save
home =kenz.gratitudes.build(name:"Home", description: "The house we live in currently", reason: "It keeps us warm and we have shelter so at night if it is raining or snowing we are safe.")
home.save