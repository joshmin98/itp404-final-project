import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | labels', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /labels', async function(assert) {
    await visit('/labels');

    assert.equal(currentURL(), '/labels');
  });
});
