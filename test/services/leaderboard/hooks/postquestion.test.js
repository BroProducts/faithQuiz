'use strict';

const assert = require('assert');
const postquestion = require('../../../../src/services/leaderboard/hooks/postquestion.js');

describe('leaderboard postquestion hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    postquestion()(mockHook);

    assert.ok(mockHook.postquestion);
  });
});
