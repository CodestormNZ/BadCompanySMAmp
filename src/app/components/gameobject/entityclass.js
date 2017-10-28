var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string',
    Class: 'string',
    Archetype: 'string',
    Skin: 'string',
    IsEnemy: 'boolean',
    IsAnimal: 'boolean',
    IsMale: 'boolean',
    Model: 'string',
    Experience: 'number'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/entityclass/' + this.Name; } }
  }
});
