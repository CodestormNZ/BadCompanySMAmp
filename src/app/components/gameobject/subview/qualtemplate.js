var ampModel = require('ampersand-model');
var qualtemplateitems = require('../../gameobjects/subviews/qualtemplateitems');

module.exports = ampModel.extend({
  collections: {
    Items: qualtemplateitems
  },
  props:
  {
    MinQual: 'number',
    MaxQual: 'number',
    MinLevel: 'number',
    MaxLevel: 'number'
  }
});
