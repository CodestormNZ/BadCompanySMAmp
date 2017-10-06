var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    D: 'string',
    H: 'string',
    M: 'string'
  },
  derived: {
    GameTime: {
      deps: ['D', 'H', 'M'],
      fn: function () {
        return this.D + ' ' + this.H + ' ' + this.M;
      }
    }
  }
});
