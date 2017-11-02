var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Stat: 'string',
    Type: 'string',
    Cat: 'string',
    Max: 'number',
    IDur: 'number',
    UID: 'number',
    FDur: 'number',
    ValStart: 'number',
    ValEnd: 'number',
    Freq: 'number',
    ApplyTime: 'number',
    Target: 'string'
  }
});
