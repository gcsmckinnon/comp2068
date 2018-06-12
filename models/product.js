var mongoose = require( 'mongoose' )

// all model classes will inherit from 
// the mongoose.Schema class
var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter a product name.'
  },
  description: {
    type: String,
    required: 'Please enter a product description.'
  },
  price: {
    type: Number,
    required: 'Please enter an MSRP value.'
  }
})

// make this class public
module.exports = mongoose.model( 'Product', productSchema )