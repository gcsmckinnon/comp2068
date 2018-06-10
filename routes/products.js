var express = require('express')
var router = express.Router()

// create a link to our drink model
var Product = require( '../models/product' )

// our controller action for products
router.get('/', function(req, res, next) {
  // get our model data
  Product.find( function (err, products) {
    // if we get an error
    if ( err ) {
      console.log( err )
      res.render( 'error' )
    } else {
      // load the view
      res.render( 'products/index', {
        title: 'Our Products List',
        products: products
      })
    }
  })
})

// makes our file public to the application
module.exports = router;