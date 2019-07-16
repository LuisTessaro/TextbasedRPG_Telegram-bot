const express = require('express'),
    router = express.Router()

const Player = require('../model/mongoose-models/Player')
const AdventureProgress = require('../model/mongoose-models/AdventureProgress')

router.get('/', async (req, res) => {
    const registeredPlayers = await Player.find()
    res.status(200).send(registeredPlayers.map(p => p.username))
})

router.get('/dropPlayers', async (req, res) => {
    await Player.deleteMany({})
    console.log('[INFO] Registered Players dropped')
    res.status(200).send('Registered Players dropped')
})

router.get('/dropProgress', async (req, res) => {
    await AdventureProgress.deleteMany({})
    console.log('[INFO] Adventure Progress dropped')
    res.status(200).send('Adventure Progress dropped')
})

router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router