/**
 * Objection Model for Raags.
 * @ignore
 */

const { Model } = require( 'objection' )

class Raags extends Model {
  static get tableName() {
    return 'Raags'
  }

  static get relationMappings() {
    return {
      shabads: {
        relation: Model.HasManyRelation,
        join: {
          from: 'Raags.id',
          to: 'Shabads.raag_id',
        },
        // eslint-disable-next-line
        modelClass: require( './Shabads' )
      },
    }
  }

  static get useLimitInFirst() {
    return true
  }
}

module.exports = Raags