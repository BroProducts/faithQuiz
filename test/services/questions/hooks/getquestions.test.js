'use strict';

const assert = require('assert');
const getquestions = require('../../../../src/services/questions/hooks/getquestions.js');

describe('questions getquestions hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    getquestions()(mockHook);

    assert.ok(mockHook.getquestions);
  });
});
