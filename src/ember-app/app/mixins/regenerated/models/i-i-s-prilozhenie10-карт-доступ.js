import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарт: DS.attr('string'),
  справСотр: DS.belongsTo('i-i-s-prilozhenie10-справ-сотр', { inverse: null, async: false }),
  таблЧасть: DS.hasMany('i-i-s-prilozhenie10-табл-часть', { inverse: 'картДоступ', async: false })
});

export let ValidationRules = {
  номерКарт: {
    descriptionKey: 'models.i-i-s-prilozhenie10-карт-доступ.validations.номерКарт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie10-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  таблЧасть: {
    descriptionKey: 'models.i-i-s-prilozhenie10-карт-доступ.validations.таблЧасть.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-prilozhenie10-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie10-справ-сотр', 'Ответственный', {
      фИОСтор: attr('Ответственный', { index: 1 })
    }, { index: 0 })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-prilozhenie10-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie10-справ-сотр', 'Ответственный', {
      фИОСтор: attr('Ответственный', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
