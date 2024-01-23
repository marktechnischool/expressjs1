const express = require('express')

const publicVerificationRouter = express.Router()

const names = [
    "John Doe",
    "John Smith",
    "Jan Kowalski",
    "Krystyna Nowak",
    "Bogumiła Nowacka",
]

const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
}

publicVerificationRouter.get('/randomName', (req, resp) => {
    resp.json({ message: getRandomName() })
})

module.exports = publicVerificationRouter