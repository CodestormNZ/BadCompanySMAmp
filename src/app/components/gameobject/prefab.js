var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/prefab/' + this.Name; } }
  }
});
