var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string',
    Color: 'string',
    Freq: 'string',
    Depth: 'number',
    Spec: 'string',
    Prob: 'string',
    Rad: 'number'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/biome/' + this.Id; } }
  }
});
