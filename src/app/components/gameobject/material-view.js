var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.material,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Experience': '[data-hook~=experience]',
    'model.MaxDamage': '[data-hook~=maxdamage]',
    'model.MovementFactor': '[data-hook~=movementfactor]',
    'model.FertileLevel': '[data-hook~=fertilelevel]',
    'model.Hardness': '[data-hook~=hardness]',
    'model.LightOpacity': '[data-hook~=lightopacity]',
    'model.Mass': '[data-hook~=mass]',
    'model.StabilityGlue': '[data-hook~=stabilityglue]',
    'model.StabilitySupport': '[data-hook~=stabilitysupport]',
    'model.DamageCategory': '[data-hook~=damagecategory]',
    'model.ForgeCategory': '[data-hook~=forgecategory]',
    'model.ParticleCategory': '[data-hook~=particlecategory]',
    'model.DestroyCategory': '[data-hook~=destroycategory]',
    'model.SurfaceCategory': '[data-hook~=surfacecategory]',
    'model.StepSound': '[data-hook~=stepsound]',
    'model.Resistance': '[data-hook~=resistance]',
    'model.IsCollidable': '[data-hook~=iscollidable]',
    'model.IsGroundCover': '[data-hook~=isgroundCover]',
    'model.IsLiquid': '[data-hook~=isliquid]',
    'model.IsPlant': '[data-hook~=isplant]',
    'model.ShowUrl': { type: 'attribute', hook: 'id', name: 'href' }
  }
});
