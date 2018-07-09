var express = require('express');
var router = express.Router();

// create a link to our drink model
var productsController = require('../controllers/productsController');

// index (http://my-app.com/products)
router.get( '/', productsController.index );

// new (http://my-app.com/products/new)
router.get( '/new', productsController.new );

// create (http://my-app.com/products)
router.post( '/', productsController.create );

// makes our file public to the application
module.exports = router;