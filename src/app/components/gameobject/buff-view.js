var ampView = require('ampersand-view');
var Modifiers = require('../gameobjects/subviews/buffmodifiers-view');
var Conditions = require('../gameobjects/subviews/buffconditions-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.buff,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Duration': '[data-hook~=duration]',
    'model.DurMode': '[data-hook~=durmode]',
    'model.StackMode': '[data-hook~=stackmode]',
    'model.StackMax': '[data-hook~=stackmax]',
    'model.Icon': '[data-hook~=icon]',
    'model.DebuffBuff': '[data-hook~=debuffbuff]',
    'model.DebuffBuffChance': '[data-hook~=debuffbuffchance]',
    'model.ExpiryBuff': '[data-hook~=expirybuff]',
    'model.ExpiryBuffChance': '[data-hook~=expirybuffchance]',
    'model.Description': '[data-hook~=description]',
    'model.Tooltip': '[data-hook~=tooltip]',
    'model.Descriptor': '[data-hook~=descriptor]',
    'model.Smell': '[data-hook~=smell]',
    'model.CastSound': '[data-hook~=castsound]',
    'model.DebuffSound': '[data-hook~=debuffsound]',
    'model.ExpiredSound': '[data-hook~=expiredsound]',
    'model.CritOnly': '[data-hook~=critonly]',
    'model.FFCheck': '[data-hook~=ffcheck]',
    'model.ActionsList': '[data-hook~=actions]',
    'model.DebuffActionsList': '[data-hook~=debuffactions]',
    //'model.BuffConditionsList': '[data-hook~=buffconditions]',
    //'model.DebuffConditionsList': '[data-hook~=debuffconditions]',
    'model.RequiresList': '[data-hook~=requires]',
    'model.HitMasksList': '[data-hook~=hitmasks]',
    'model.MutexList': '[data-hook~=mutex]',
    'model.CuresList': '[data-hook~=cures]',
    'model.CausesList': '[data-hook~=causes]',
    'model.ShowUrl': { type: 'attribute', hook: 'id', name: 'href' }
  },
  subviews: {
    modifiers: {
      hook: 'modifiers',
      waitFor: 'collection',
      prepareView: function (el) {
        return new Modifiers({
          el: el,
          parent: this,
          collection: this.model.Modifiers
        });
      }
    },
    buffconditions: {
      hook: 'buffconditions',
      waitFor: 'collection',
      prepareView: function (el) {
        return new Conditions({
          el: el,
          parent: this,
          collection: this.model.BuffConditions
        });
      }
    },
    debuffconditions: {
      hook: 'debuffconditions',
      waitFor: 'collection',
      prepareView: function (el) {
        return new Conditions({
          el: el,
          parent: this,
          collection: this.model.DebuffConditions
        });
      }
    }
  }
});
