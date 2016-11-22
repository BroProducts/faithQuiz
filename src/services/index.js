'use strict';
const sessions = require('./sessions');
const leaderboard = require('./leaderboard');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(leaderboard);
  app.configure(sessions);
};
