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

// Show
exports.show = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Product'
  };

  Product.findById({
    _id: req.params.id
  })
  .then( function ( product ) {
    // add the products to our locals
    locals.product = product;

    // render our view
    res.render( 'products/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Product'
  };

  res.render( 'products/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Edit Product'
  };

  Product.findById({
    _id: req.params.id
  })
  .then( function ( product ) {
    // add the products to our locals
    locals.product = product;

    // render our view
    res.render( 'products/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
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

// Update
exports.update = function ( req, res, next ) {
  Product.findById( req.params.id )
  .then(function ( product ) {
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;

    product.save()
    .then(  function () {
      res.redirect( '/products' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};

// Delete
exports.delete = function ( req, res ) {
  Product.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/products' )
  })
  .catch( function ( err ) {
    next( err )
  })
};