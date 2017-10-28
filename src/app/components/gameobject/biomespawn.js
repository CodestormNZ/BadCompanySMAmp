var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Name: 'string',
    Spawns: 'any'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/biomespawn/' + this.Name; } }
  }
});
