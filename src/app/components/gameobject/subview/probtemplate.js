var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    MinLevel: 'number',
    MaxLevel: 'number',
    Prob: 'number'
  },
  derived: {
    ProbPerc: { deps: ['Prob'], fn: function () { return Math.round(this.Prob * 1000) / 10 + '%'; } }
  }
});
