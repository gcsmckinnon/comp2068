var User = require( '../models/user' );
var passport = require( 'passport' );

/* VIEWS */
exports.new = function ( req, res, next ) {
  console.log('attempting to login again')
  // check for invalid login messages in the session object
  let messages = req.session.messages || [];

  // clear the session messages
  req.session.messages = [];

  res.render( 'sessions/new', {
    title: 'User Login',
    messages: messages
  });
};

/* ACTIONS */
exports.create = function ( req, res, next ) {
  passport.authenticate( 'local', {
    successRedirect: '/products',
    failureRedirect: '/sessions/new',
    failureMessage: 'Invalid Login'
  })( req, res, next )
};

exports.delete = function ( req, res, next ) {
  // clear out any session messages
  req.session.messages = [];

  // end the user's session
  req.logout();

  // redirect to login
  res.redirect( '/sessions/new' );
};
