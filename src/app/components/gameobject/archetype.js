﻿var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Name: 'string',
    Type: 'string',
    IsMale: 'boolean',
    HairColor: 'string',
    EyeColor: 'string',
    SkinColor: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/archetype/' + this.Name; } }
  }
});
