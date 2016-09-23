'use strict';

const assert = require('assert');
const questionhook = require('../../../../src/services/questions/hooks/questionhook.js');

describe('questions questionhook hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    questionhook()(mockHook);

    assert.ok(mockHook.questionhook);
  });
});
