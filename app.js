require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const protectedVerificationRouter = require('./routes/protected/api-verification')
const publicVerificationRouter = require('./routes/public/api-verification')

const app = express()
app.use(bodyParser.json())

app.use('/protected/verification', protectedVerificationRouter)
app.use('/public/verification', publicVerificationRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})