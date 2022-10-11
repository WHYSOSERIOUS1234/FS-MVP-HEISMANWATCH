const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001
app.use(express.json())
app.use(cors())
app.use( '/',express.static('public'))




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})