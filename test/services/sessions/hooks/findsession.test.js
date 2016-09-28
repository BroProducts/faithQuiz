'use strict';

const assert = require('assert');
const findsession = require('../../../../src/services/sessions/hooks/findsession.js');

describe('sessions findsession hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    findsession()(mockHook);

    assert.ok(mockHook.findsession);
  });
});
