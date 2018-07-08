const mongoose = require( 'mongoose' );

// simplifies building a username and password login
const passport = require( 'passport' );
const plm = require( 'passport-local-mongoose' );

// our user schema
const UserSchema = new mongoose.Schema();

// use plm to automatically define username and password fields for this model
UserSchema.plugin( plm );

// make this class public
module.exports = mongoose.model( 'User', UserSchema );