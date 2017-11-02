var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'number',
    Name: 'string',
    Localized: 'string',
    ExpGainMult: 'number',
    Group: 'string',
    ExpToNext: 'number',
    Level: 'number',
    IsLocked: 'boolean',
    TitleKey: 'string',
    DescKey: 'string',
    Icon: 'string',
    MaxLevel: 'number',
    BaseExpTo: 'number',
    ExpMult: 'number',
    IsPassive: 'boolean',
    IsPerk: 'boolean',
    IsCrafting: 'boolean',
    AlwaysFire: 'boolean',
    CostPer: 'number',
    CostMult: 'number',
    SkillReqs: 'any',
    LockedItems: 'any',
    Effects: 'any'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/skill/' + this.Name; } },
    SkillReqsCount: { deps: ['SkillReqs'], fn: function () { return this.SkillReqs.length; } },
    LockedItemsCount: { deps: ['LockedItems'], fn: function () { return this.LockedItems.length; } },
    EffectsCount: { deps: ['Effects'], fn: function () { return this.Effects.length; } }
  }
});
