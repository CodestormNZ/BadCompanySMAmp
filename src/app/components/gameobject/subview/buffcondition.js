var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Counter: 'string',
    Type: 'string',
    Value: 'number'
  }
});
