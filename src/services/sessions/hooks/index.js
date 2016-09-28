'use strict';

const findsession = require('./findsession');

var createsession = require('./createsession');

var globalHooks = require('../../../hooks');
var hooks = require('feathers-hooks');
var auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [createsession],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [findsession],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
