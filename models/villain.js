const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const villainSchema = new Schema(
    {
        alias: { type: String, required: true},
        name: { type: String, required: true},
        powers: [],
        heightInInches: { type: Number, required: true},
        forGood: { type: Boolean, required: true},
    }
)
module.exports = mongoose.model('Villain', villainSchema)