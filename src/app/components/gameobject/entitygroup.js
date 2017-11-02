var app = require('ampersand-app');
var ampModel = require('ampersand-model');
var entityspawns = require('../gameobjects/subviews/entityspawns');

module.exports = ampModel.extend({
  collections: {
    Entities: entityspawns
  },
  props:
  {
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/entitygroup/' + this.Name; } }
  }
});
