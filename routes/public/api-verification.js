const express = require('express')

const publicVerificationRouter = express.Router()

publicVerificationRouter.get('/verify', (req, resp) => {
    resp.json({message: "App is working just fine"})
})

module.exports = publicVerificationRouter