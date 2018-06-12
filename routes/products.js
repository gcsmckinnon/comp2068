var express = require('express')
var router = express.Router()

// create a link to our drink model
var productsController = require('../controllers/productsController')

// index
router.get( '/', productsController.index )

// new
router.get( '/new', productsController.new )

// show
router.get( '/:id', productsController.show )

// edit
router.get( '/:id/edit', productsController.edit )

// create
router.post( '/', productsController.create )

// update
router.post( '/:id', productsController.update )

// delete
router.post( '/:id/delete', productsController.delete )

// makes our file public to the application
module.exports = router;