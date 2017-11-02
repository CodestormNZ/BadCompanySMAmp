var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.entityclass,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Class': '[data-hook~=class]',
    'model.Archetype': '[data-hook~=archetype]',
    'model.Model': '[data-hook~=model]',
    'model.MaxHealth': '[data-hook~=maxhealth]',
    'model.Experience': '[data-hook~=experience]',
    'model.DeadHP': '[data-hook~=deadhp]',
    'model.LootListOnDeath': '[data-hook~=lootondead]',
    'model.LootListAlive': '[data-hook~=lootalive]',
    'model.BuffsList': '[data-hook~=buffs]',
    'model.SightRange': '[data-hook~=signtrange]',
    'model.Physics': '[data-hook~=physics]',
    'model.IsMale': '[data-hook~=ismale]',
    'model.IsEnemy': '[data-hook~=isenemy]',
    'model.CorpseId': '[data-hook~=corpseid]',
    'model.CorpseChance': '[data-hook~=corpsechance]',
    'model.UserInst': '[data-hook~=userinst]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
