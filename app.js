require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const protectedVerificationRouter = require('./routes/protected/random-name')
const publicVerificationRouter = require('./routes/public/random-name')

const app = express()
app.use(bodyParser.json())

app.use('/protected', protectedVerificationRouter)
app.use('/public', publicVerificationRouter)

app.get('/', (req, resp) => {
    resp.json({ message: "Hello World!" })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})