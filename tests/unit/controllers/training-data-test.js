import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | training-data', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:training-data');
    assert.ok(controller);
  });
});
