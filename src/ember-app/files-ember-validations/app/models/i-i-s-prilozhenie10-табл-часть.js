import {
  defineNamespace,
  defineProjections,
  Model as ТаблЧастьMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie10-табл-часть';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблЧастьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
