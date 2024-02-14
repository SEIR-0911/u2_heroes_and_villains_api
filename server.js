const express = require('express')
const db = require('./db')

const bodyParser = require('body-parser');


const supersController = require('./controllers/supersController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(bodyParser.json())

app.get('/', (req,res) => res.send('I am root!'))

//HEROES ROUTES
app.get('/heroes', supersController.getAllHeroes)
app.get('/heroes/:id', supersController.getOneHero)

app.post('/heroes', supersController.createHero)
app.put('/heroes/:id', supersController.updateHero)
app.delete('/heroes/:id', supersController.deleteHero)

//VILLAINS ROUTES
app.get('/villains',supersController.getAllVillains)
app.get('/villains/:id', supersController.getOneVillain)

app.post('/villains', supersController.createVillain)
app.put('/villains/:id', supersController.updateVillain)
app.delete('/villains/:id', supersController.deleteVillain)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))