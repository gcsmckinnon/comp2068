var express = require('express');
var router = express.Router();

// create a link to our users controller
var usersController = require('../controllers/usersController');

// new (http://my-app.com/users/new)
router.get( '/new', usersController.new );

// create (http://my-app.com/users)
router.post( '/', usersController.create )

// makes our file public to the application
module.exports = router;