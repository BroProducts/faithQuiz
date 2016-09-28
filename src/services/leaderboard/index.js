'use strict';

const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  MongoClient.connect('mongodb://localhost:27017/faithgame').then(function(db){
  // Connect to the db, create and register a Feathers service.
  app.use('/leaderboards', service({
    Model: db.collection('leaderboards'),
    paginate: {
      default: 5,
      max: 25
    }
  }));

  // Get our initialize service to that we can bind hooks
  const leaderboardService = app.service('/leaderboards');

  // Set up our before hooks
  leaderboardService.before(hooks.before);

  // Set up our after hooks
  leaderboardService.after(hooks.after);
  });
};
