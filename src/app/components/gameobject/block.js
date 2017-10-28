var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string',
    Local: 'string',
    IsBlock: 'boolean',
    Material: 'string',
    StackNumber: 'number'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/block/' + this.Id; } }
  }
});
