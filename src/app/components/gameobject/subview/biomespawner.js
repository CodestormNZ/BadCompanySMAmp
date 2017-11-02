var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Group: 'string',
    Time: 'string',
    Max: 'number',
    Delay: 'number',
    Dead: 'number'
  }
});
