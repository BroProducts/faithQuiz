'use strict';

const assert = require('assert');
const signup = require('../../../../src/services/user/hooks/signup.js');

describe('user signup hook', function() {
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
