var express = require('express');
var router = express.Router();

// create a link to our products controller
var productsController = require('../controllers/productsController');

// index (http://my-app.com/products)
router.get( '/', productsController.index );

// new (http://my-app.com/products/new)
router.get( '/new', productsController.new );

// show (http://my-app.com/products/12345)
router.get( '/:id', productsController.show );

// edit (http://my-app.com/products/12345/edit)
router.get( '/:id/edit', productsController.edit );

// create (http://my-app.com/products)
router.post( '/', productsController.create );

// update (http://my-app.com/products/12345)
router.post( '/:id', productsController.update );

// delete (http://my-app.com/products/12345/delete)
router.post( '/:id/delete', productsController.delete );

// makes our file public to the application
module.exports = router;