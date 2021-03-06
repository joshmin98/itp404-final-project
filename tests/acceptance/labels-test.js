import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | labels', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /labeled-images displays a list of labels', async function(assert) {
    server.createList('label', 10);
    await visit('/labeled-images');

    assert.equal(currentURL(), '/labeled-images');
    assert.dom('[data-test="label"]').exists({ count: 10 });
  });

  test(`viewing the contents of a label`, async function(assert) {
    server.create('label', {
      label: 'test',
      images: ['data:image/png;base64,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']
    });
    await visit('labeled-images/1');
    assert.dom('[data-test="image"]').exists();
  });

  test('deleting a label', async function(assert) {
    server.create('label', {
      label: 'test',
      images: []
    });
    await visit('/labeled-images');
    await click('[data-test="trash"]');
    assert.dom('[data-test="label"]').exists({ count: 0});
  });
});
