const express = require('express')
const app = express()
const dotenv = require('dotenv')
const handler = require('./handler')

// Set up Global Configuration Access
dotenv.config()

let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})

app.post('/user/generateToken', handler.GenerateJWT)
app.get('/user/validateToken', handler.ValidateJWT)