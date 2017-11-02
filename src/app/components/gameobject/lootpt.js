var ampModel = require('ampersand-model');
var probtemplates = require('../gameobjects/subviews/probtemplates');

module.exports = ampModel.extend({
  collections: {
    Templates: probtemplates
  },
  props:
  {
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/lootpt/' + this.Name; } }
  }
});
