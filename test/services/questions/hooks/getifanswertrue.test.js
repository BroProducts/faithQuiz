'use strict';

const assert = require('assert');
const getifanswertrue = require('../../../../src/services/questions/hooks/getifanswertrue.js');

describe('questions getifanswertrue hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    getifanswertrue()(mockHook);

    assert.ok(mockHook.getifanswertrue);
  });
});
