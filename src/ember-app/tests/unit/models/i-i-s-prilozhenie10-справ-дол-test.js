import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie10-справ-дол', 'Unit | Model | i-i-s-prilozhenie10-справ-дол', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie10-справ-дол',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
