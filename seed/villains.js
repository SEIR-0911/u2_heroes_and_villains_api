const db = require('../db')
const Villain = require('../models/villain')

//CONNECT TO DATABASE
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const villains = [
        {
            alias: 'Catwoman',
            name: 'Selina Kyle',
            powers: ['acrobatics', 'stealth', 'weaponry', 'super senses'],
            heightInInches: 67,
            forGood: 'no',
        },
        {
            alias: 'Cheetah',
            name: 'Barbara Ann Minerva',
            powers: ['super strength', 'super durability', 'transformation', 'agility'],
            heightInInches: 69,
            forGood: 'no',
        },
        {
            alias: 'Giganta',
            name: 'Doris Zeul',
            powers: ['size alteration', 'super strength', 'durability'],
            heightInInches: 78,
            forGood: 'no',
        },
        {
            alias: 'Poison Ivy',
            name: ' Pamela Lillian Isley',
            powers: [ 'toxikinesis', '', 'flight', 'super speed'],
            heightInInches: 68,
            forGood: 'no',
        },
        {
            alias: 'Silver Swan',
            name: 'Vanessa Kapatelis',
            powers: ['flight', 'sonic cry', 'super strength'],
            heightInInches: 71,
            forGood: 'no',
        },
    ]
    await Villain.insertMany(villains)
    console.log("Created some villains!")
}
const run = async () => {
    await main()
    db.close()
}
run()