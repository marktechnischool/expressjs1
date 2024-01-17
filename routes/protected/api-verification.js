const express = require('express')
const { authenticateApiKey } = require('../../lib/helpers')

const protectedVerificationRouter = express.Router()

protectedVerificationRouter.use(authenticateApiKey)

protectedVerificationRouter.get('/verify', (req, resp) => {
    resp.json({message: "App is working just fine authorized"})
})

protectedVerificationRouter.post('/verify', (req, resp) => {
    resp.json({message: `Post is working fine ${JSON.stringify(req.body)}`})
})

module.exports = protectedVerificationRouter