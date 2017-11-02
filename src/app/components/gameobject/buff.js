var ampModel = require('ampersand-model');
var modifiers = require('../gameobjects/subviews/buffmodifiers');
var conditions = require('../gameobjects/subviews/buffconditions');

module.exports = ampModel.extend({
  collections: {
    Modifiers: modifiers,
    BuffConditions: conditions,
    DebuffConditions: conditions
  },
  props:
  {
    Id: 'string',
    Name: 'string',
    Duration: 'number',
    DurMode: 'string',
    StackMode: 'string',
    StackMax: 'number',
    Icon: 'string',
    DebuffBuff: 'string',
    DebuffBuffChance: 'number',
    ExpiryBuff: 'string',
    ExpiryBuffChance: 'number',
    Description: 'string',
    Tooltip: 'string',
    Descriptor: 'string',
    Smell: 'string',
    CastSound: 'string',
    DebuffSound: 'string',
    ExpiredSound: 'string',
    CritOnly: 'boolean',
    FFCheck: 'boolean',
    Actions: 'array',
    DebuffActions: 'array',
    Requires: 'array',
    HitMasks: 'array',
    Mutex: 'array',
    Cures: 'array',
    Causes: 'array'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/buff/' + this.Id; } },
    ActionsList: { deps: ['Actions'], fn: function () { return this.Actions != null ? this.Actions.join("\n") : ""; } },
    DebuffActionsList: { deps: ['DebuffActions'], fn: function () { return this.DebuffActions != null ? this.DebuffActions.join("\n") : ""; } },
    //BuffConditionsList: { deps: ['BuffConditions'], fn: function () { return this.BuffConditions != null ? this.BuffConditions.join("\n") : ""; } },
    //DebuffConditionsList: { deps: ['DebuffConditions'], fn: function () { return this.DebuffConditions != null ? this.DebuffConditions.join("\n") : ""; } },
    RequiresList: { deps: ['Requires'], fn: function () { return this.Requires != null ? this.Requires.join("\n") : ""; } },
    HitMasksList: { deps: ['HitMasks'], fn: function () { return this.HitMasks != null ? this.HitMasks.join("\n") : ""; } },
    MutexList: { deps: ['Mutex'], fn: function () { return this.Mutex != null ? this.Mutex.join("\n") : ""; } },
    CuresList: { deps: ['Cures'], fn: function () { return this.Cures != null ? this.Cures.join("\n") : ""; } },
    CausesList: { deps: ['Causes'], fn: function () { return this.Causes != null ? this.Causes.join("\n") : ""; } }
  }
});
