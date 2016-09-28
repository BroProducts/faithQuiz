'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('sessions service', function() {
  it('registered the sessions service', () => {
    assert.ok(app.service('sessions'));
  });
});
