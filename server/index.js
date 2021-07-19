const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = process.env.PORT || 2021
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/bennaProject'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

mongoose.connect(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(port, () => {
    console.log(`App server run on http://localhost:${port}/`)
  })
})

app.use(express.json())
const routes = require('./routes')
app.use('/menu', routes)
