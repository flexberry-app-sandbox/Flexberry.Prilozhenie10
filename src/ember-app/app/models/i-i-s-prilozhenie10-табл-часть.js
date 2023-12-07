import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТаблЧастьMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie10-табл-часть';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТаблЧастьMixin, Validations, {
});

defineProjections(Model);

export default Model;
