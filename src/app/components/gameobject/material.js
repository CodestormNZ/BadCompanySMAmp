var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Id: 'string',
    Experience: 'number',
    MaxDamage: 'number',
    MovementFactor: 'number',
    FertileLevel: 'number',
    Hardness: 'number',
    LightOpacity: 'number',
    Mass: 'number',
    StabilityGlue: 'number',
    StabilitySupport: 'boolean',
    DamageCategory: 'string',
    ForgeCategory: 'string',
    ParticleCategory: 'string',
    DestroyCategory: 'string',
    SurfaceCategory: 'string',
    StepSound: 'string',
    Resistance: 'number',
    IsCollidable: 'boolean',
    IsGroundCover: 'boolean',
    IsLiquid: 'boolean',
    IsPlant: 'boolean'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/material/' + this.Id; } }
  }
});
