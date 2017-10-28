var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/entitygroup/' + this.Id; } }
  }
});
