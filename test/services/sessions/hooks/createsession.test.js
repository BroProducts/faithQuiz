'use strict';

const assert = require('assert');
const createsession = require('../../../../src/services/sessions/hooks/createsession.js');

describe('sessions createsession hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    createsession()(mockHook);

    assert.ok(mockHook.createsession);
  });
});
