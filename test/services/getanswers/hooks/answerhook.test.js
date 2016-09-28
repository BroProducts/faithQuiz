'use strict';

const assert = require('assert');
const answerhook = require('../../../../src/services/getanswers/hooks/answerhook.js');

describe('getanswers answerhook hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    answerhook()(mockHook);

    assert.ok(mockHook.answerhook);
  });
});
