var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Prob: 'number',
    MinQual: 'number',
    MaxQual: 'number'
  }
});
