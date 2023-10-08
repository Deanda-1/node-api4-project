require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 9000
server.use(express.json())
server.use(cors)
server.use('*', (req, res) => {
    server.get('/api/hello', (req, res) => {
        res.json({ message: 'api is working' })
    })
    res.send(`<Hello, there!>`)
    server.use((err, req, res, next) => { // eslint-disable-line 
        res.status(500).json({
            message: err.message,
            stack: err.stack, 
        })
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})