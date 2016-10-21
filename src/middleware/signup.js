'use strict';
const errors = require('feathers-errors');

module.exports = function(app) {
  return function(req, res, next) {
    const body = req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
      username: body.username,
      password: body.password
    })
    // Then redirect to the login page
    .then(user => res.redirect('/pages/login.html'))
    // On errors, just call our error middleware
    .catch(function(err){
      console.log("err"+err)
      const validationErrors = new errors.BadRequest('Invalid Parameters', {errors: {username: 'Username already taken'} });
      next(validationErrors)
    });
  };
};
