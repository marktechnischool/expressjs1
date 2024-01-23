const express = require('express')
const { authenticateApiKey } = require('../../lib/helpers')

const protectedVerificationRouter = express.Router()

protectedVerificationRouter.use(authenticateApiKey)

const names = [
    "Prywatny John Doe",
    "Prywatny John Smith",
    "Prywatny Jan Kowalski",
    "Prywatny Krystyna Nowak",
    "Prywatny Bogumiła Nowacka",
]

const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
}

protectedVerificationRouter.get('/randomName', (req, resp) => {
    resp.json({ randomName: getRandomName() })
})

module.exports = protectedVerificationRouter