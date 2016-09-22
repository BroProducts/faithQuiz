'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('questions service', function() {
  it('registered the questions service', () => {
    assert.ok(app.service('questions'));
  });
});
