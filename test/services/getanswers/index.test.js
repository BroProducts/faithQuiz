'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('getanswers service', function() {
  it('registered the getanswers service', () => {
    assert.ok(app.service('getanswers'));
  });
});
