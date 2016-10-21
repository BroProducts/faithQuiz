'use strict';

const assert = require('assert');
const signup = require('../../../../src/services/signup/hooks/signup.js');

describe('signup signup hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    signup()(mockHook);

    assert.ok(mockHook.signup);
  });
});
