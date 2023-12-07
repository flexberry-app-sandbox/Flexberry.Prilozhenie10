import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номКарт: DS.attr('number'),
  картДоступ: DS.belongsTo('i-i-s-prilozhenie10-карт-доступ', { inverse: 'таблЧасть', async: false })
});

export let ValidationRules = {
  номКарт: {
    descriptionKey: 'models.i-i-s-prilozhenie10-табл-часть.validations.номКарт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  картДоступ: {
    descriptionKey: 'models.i-i-s-prilozhenie10-табл-часть.validations.картДоступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблЧастьE', 'i-i-s-prilozhenie10-табл-часть', {
    номКарт: attr('Номер Карты', { index: 0 })
  });
};
