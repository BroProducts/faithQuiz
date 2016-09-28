'use strict';

const assert = require('assert');
const getanswers = require('../../../../src/services/questions/hooks/getanswers.js');

describe('questions getanswers hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    getanswers()(mockHook);

    assert.ok(mockHook.getanswers);
  });
});
