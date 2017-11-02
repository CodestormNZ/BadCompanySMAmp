var app = require('ampersand-app');
var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    EntityClassId: 'number',
    Prob: 'number',
    ReqMin: 'number',
    ReqMax: 'number'
  },
  derived: {
    ProbPerc: { deps: ['Prob'], fn: function () { return Math.round(this.Prob * 1000) / 10 + '%'; } },
    EntityClassName: {
      deps: ['EntityClassId'], fn: function () {
        var entityclass = app.entityclasses.get(this.EntityClassId);
        return entityclass != null ? entityclass.Name : '';
      },
      cache: false
    }
  }
});
