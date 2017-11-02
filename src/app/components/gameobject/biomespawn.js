var ampModel = require('ampersand-model');
var biomespawners = require('../gameobjects/subviews/biomespawners');

module.exports = ampModel.extend({
  collections: {
    Spawns: biomespawners
  },
  props:
  {
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/biomespawn/' + this.Name; } }
  }
});
