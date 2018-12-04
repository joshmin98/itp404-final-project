import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | webcam-view', function(hooks) {
  setupRenderingTest(hooks);

  test('webcam renders with children', async function(assert) {
    await render(hbs`{{webcam-view}}`);
    assert.equal(this.element.textContent.trim(), '');
    await render(hbs`
      {{#webcam-view}}
        template block text
      {{/webcam-view}}
    `);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('webcam renders without children', async function(assert) {
    await render(hbs`{{webcam-view}}`);
    assert.equal(this.element.textContent.trim(), '');
    await render(hbs`
      {{#webcam-view}}
      {{/webcam-view}}
    `);
    assert.equal(this.element.textContent.trim(), '');
  });

});
