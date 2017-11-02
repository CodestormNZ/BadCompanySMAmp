var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string',
    Class: 'string',
    Archetype: 'string',
    Model: 'string',
    MaxHealth: 'number',
    Experience: 'number',
    DeadHP: 'number',
    LootListOnDeath: 'number',
    LootListAlive: 'number',
    Buffs: 'array',
    SightRange: 'number',
    Physics: 'string',
    IsMale: 'boolean',
    IsEnemy: 'boolean',
    CorpseId: 'string',
    CorpseChance: 'number',
    UserInst: 'boolean'
    //Explosion: { "Particle": 0,"BlockR" : 1,"EntityR": 0,"BuffsR": 0,"BlastPower": 200,"EntityDam": 0.0,"BlockDam": 1.0,"Buffs": [] }
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/entityclass/' + this.Name; } },
    BuffsList: { deps: ['Buffs'], fn: function () { return this.Buffs != null ? this.Buffs.join("\n") : ""; } }
  }
});
