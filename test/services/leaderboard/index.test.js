'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('leaderboard service', function() {
  it('registered the leaderboards service', () => {
    assert.ok(app.service('leaderboards'));
  });
});
