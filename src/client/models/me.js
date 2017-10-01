var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  type: 'user',
  props: {
    steamId: ['string'],
    userName: ['string', false, ''],
    adminName: ['string', true, ''],
    adminToken: ['string', true, '']
  }
});
