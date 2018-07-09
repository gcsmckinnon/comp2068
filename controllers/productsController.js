var Product = require( '../models/product' );

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Products List'
  };

  Product.find()
  .then( function ( products ) {
    // add the products to our locals
    locals.products = products;

    // render our view
    res.render( 'products/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Product'
  };

  res.render( 'products/new', locals )
};

/* ACTIONS */
// Create 
exports.create = function ( req, res, next ) {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  })
  .then( function () {
    res.redirect( '/products' )
  })
  .catch( function ( err ) {
    next( err )
  })
};