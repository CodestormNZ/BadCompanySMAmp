var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  type: 'user',
  props: {
    id: ['string'],
    userName: ['string', true, ''],
    adminName: ['string', true, ''],
    adminToken: ['string', true, '']
  }
});
