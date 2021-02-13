const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.static(__dirname + '/client/dist'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const port = 5000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 