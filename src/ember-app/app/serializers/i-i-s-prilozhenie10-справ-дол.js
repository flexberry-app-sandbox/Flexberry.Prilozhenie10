import { Serializer as СправДолSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie10-справ-дол';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправДолSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
