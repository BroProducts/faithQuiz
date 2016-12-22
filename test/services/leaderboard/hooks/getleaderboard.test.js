'use strict';

const assert = require('assert');
const getleaderboard = require('../../../../src/services/leaderboard/hooks/getleaderboard.js');

describe('leaderboard getleaderboard hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    getleaderboard()(mockHook);

    assert.ok(mockHook.getleaderboard);
  });
});
