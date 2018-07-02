const mongoose = require( 'mongoose' );

// all model classes will inherit from 
// the mongoose.Schema class
const SpecificationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: 'You must have a key.'
  },
  value: {
    type: String,
    required: 'You must have a value.'
  }
});

const ProductSchema = new mongoose.Schema({
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
  },
  specifications: [SpecificationSchema],
  image: {
    type: String
  }
});

// make this class public
module.exports = mongoose.model( 'Product', ProductSchema );