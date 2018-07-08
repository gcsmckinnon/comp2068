var express = require('express');
var router = express.Router();

// create a link to our sessions controller
var sessionsController = require('../controllers/sessionsController');

// new (http://my-app.com/sessions/new)
router.get( '/new', sessionsController.new );

// create (http://my-app.com/sessions/create)
router.post( '/', sessionsController.create )

// delete (http://my-app.com/sessions/12345/delete)
router.get( '/delete', sessionsController.delete );

// makes our file public to the application
module.exports = router;