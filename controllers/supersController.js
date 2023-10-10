const Hero = require('../models/hero')
const Villain = require('../models/villain')

module.exports = {
    getAllHeroes, getAllVillains, getOneHero, getOneVillain, createHero, createVillain, updateHero, updateVillain, deleteHero, deleteVillain
}

async function getAllHeroes(req, res) {
    try{
        const heroes = await Hero.find()
        res.json(heroes)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getAllVillains(req, res) {
    try{
        const villains = await Villain.find()
        res.json(villains)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOneHero(req, res) {
    try {
        const id = req.params.id    
        const hero = await Hero.findById(id)
        if (hero) {
            return res.json(hero)
        }
        return res.status(404).send('Hero with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneVillain(req, res) {
    try {
        const id = req.params.id    
        const villain = await Villain.findById(id)
        if (villain) {
            return res.json(villain)
        }
        return res.status(404).send('Villain with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createHero(req,res){
    try{
        const hero= await new Hero(req.body)
        await hero.save()
        return res.status(201).json({
            hero
        })
    } catch (error) {
        return res.status(500).json({error: e.message})
    }
}

async function createVillain(req,res){
    try{
        const villain= await new Villain(req.body)
        await villain.save()
        return res.status(201).json({
            villain
        })
    } catch (error) {
        return res.status(500).json({error: e.message})
    }
}

async function updateHero(req, res){
    try{
        const id = req.params.id
        const hero = await Hero.findByIdAndUpdate(id, req.body, {new:true})
        if (hero) {
            return res.status(200).json(hero)
        }
        throw new Error("Hero not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateVillain(req, res){
    try{
        const id = req/params.id
        const villain = await Villain.findByIdAndUpdate(id, req.body, {new: true})
        if (villain){
            return res.status(200).json(villain)
        }
        throw new Error("Villain not found.")
    } catch (error) {
        return res.status(500).send(err.message)
    }
}

async function deleteHero(req, res){
    try{
        const id = req.params.id
        let hero = await Hero.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Hero deleted.")
        }
        throw new Error("Hero not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteVillain(req, res){
    try{
        const id = req.params.id
        let villain = await Villain.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Villain deleted.")
        }
        throw new Error("Villain not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}