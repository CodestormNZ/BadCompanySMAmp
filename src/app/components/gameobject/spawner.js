var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Key: 'string',
    Dynamic: 'boolean',
    WrapDays: 'boolean',
    ClampDays: 'boolean',
    Spawns: 'any'
  },
  derived: {
    ShowUrl: { deps: ['Key'], fn: function () { return '/static/BCM.html?gameobject/spawner/' + this.Key; } },
    SpawnsCount: { deps: ['Spawns'], fn: function () { return this.Spawns.length;  } }
  }
});
