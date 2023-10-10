const db = require('../db')
const Hero = require('../models/hero')

//CONNECT TO DATABASE
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const heroes = [
        {
            alias: 'Wonder Woman',
            name: 'Diana Prince',
            powers: ['super strength', 'speed', 'agility', 'wisdom', 'flight',],
            heightInInches: 74,
            forGood: 'yes',
        },
        {
            alias: 'Hawkgirl',
            name: 'Shayera Hol',
            powers: ['super strength', 'flight', 'healing factor', 'enhanced vision'],
            heightInInches: 69,
            forGood: 'yes',
        },
        {
            alias: 'Bumblebee',
            name: 'Karen Beecher',
            powers: ['flight', 'super strength', 'shrinking power', 'body armor'],
            heightInInches: 67,
            forGood: 'yes',
        },
        {
            alias: 'Supergirl',
            name: 'Kara Zor-El',
            powers: ['super strength', 'enhanced vision', 'flight', 'super speed'],
            heightInInches: 65,
            forGood: 'yes',
        },
        {
            alias: 'Raven',
            name: 'Rachel Roth',
            powers: ['empathy', 'telekinesis', 'soul-manipulation ability'],
            heightInInches: 71,
            forGood: 'yes',
        },
    ]
    await Hero.insertMany(heroes)
    console.log("Created some heroes!")
}
const run = async () => {
    await main()
    db.close()
}
run()