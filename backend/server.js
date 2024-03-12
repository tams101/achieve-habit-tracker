const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send({msg: "test"})
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})