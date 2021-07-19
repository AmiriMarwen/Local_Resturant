const mongoose = require('mongoose')

const foodschema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  dileveryCoast: {
    type: String,
    required: false
  },
  foodimage: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Food', foodschema)
