'use strict';

const path = require('path');

const mongoose = require('mongoose');
const service = require('feathers-mongoose');

// A module that exports your Mongoose model
const Model = require('./../../models/leaderboard');

const hooks = require('./hooks');

mongoose.Promise = global.Promise;

module.exports = function(){
  const app = this;
  const stingurl = app.get('mongodb');
  if(stingurl == "process.env.MONGODB_URI"){
    console.log("if")
    const urlstr = eval(stingurl);
    var url = urlstr.toString();
  }else{
    var url = stingurl
    console.log(url)
    console.log("esle")
  }

  mongoose.connect(url).then(function(db){
  // Connect to the db, create and register a Feathers service.
  //app.use('/leaderboards', service({ Model: lb }));

  app.use('/leaderboards', service({
    Model,
    lean: true, // set to false if you want Mongoose documents returned
    paginate: {
      default: 50,
      max: 50
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
