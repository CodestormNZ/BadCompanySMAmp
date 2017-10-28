var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.skill,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Localized': '[data-hook~=localized]',
    'model.ExpGainMult': '[data-hook~=expgainmult]',
    'model.Group': '[data-hook~=group]',
    'model.ExpToNext': '[data-hook~=exptonext]',
    'model.Level': '[data-hook~=level]',
    'model.IsLocked': '[data-hook~=islocked]',
    'model.TitleKey': '[data-hook~=titlekey]',
    'model.DescKey': '[data-hook~=desckey]',
    'model.Icon': '[data-hook~=icon]',
    'model.MaxLevel': '[data-hook~=maxlevel]',
    'model.BaseExpTo': '[data-hook~=baseexpto]',
    'model.ExpMult': '[data-hook~=expmult]',
    'model.IsPassive': '[data-hook~=ispassive]',
    'model.IsPerk': '[data-hook~=isperk]',
    'model.IsCrafting': '[data-hook~=iscrafting]',
    'model.AlwaysFire': '[data-hook~=alwaysfire]',
    'model.CostPer': '[data-hook~=costper]',
    'model.CostMult': '[data-hook~=costmult]',
    'model.SkillReqsCount': '[data-hook~=skillreqs]',
    'model.LockedItemsCount': '[data-hook~=lockeditems]',
    'model.EffectsCount': '[data-hook~=effects]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
