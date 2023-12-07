import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie10-справ-сотр', 'Unit | Model | i-i-s-prilozhenie10-справ-сотр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie10-карт-доступ',
    'model:i-i-s-prilozhenie10-справ-дол',
    'model:i-i-s-prilozhenie10-справ-сотр',
    'model:i-i-s-prilozhenie10-табл-часть',
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
