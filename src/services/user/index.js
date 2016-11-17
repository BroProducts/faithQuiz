'use strict';

const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;
  const stingurl = app.get('mongodb');
  const url = eval(stingurl)
  MongoClient.connect(url).then(function(db){
  // Connect to the db, create and register a Feathers service.
  app.use('/users', service({
    Model: db.collection('users'),
    paginate: {
      default: 5,
      max: 25
    }
  }));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(hooks.before);

  // Set up our after hooks
  userService.after(hooks.after);

  });
};
