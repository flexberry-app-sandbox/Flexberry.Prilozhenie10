import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправСотрMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie10-справ-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
