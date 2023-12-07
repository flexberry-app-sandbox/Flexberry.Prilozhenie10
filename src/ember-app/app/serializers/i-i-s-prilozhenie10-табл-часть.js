import { Serializer as ТаблЧастьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie10-табл-часть';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТаблЧастьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
