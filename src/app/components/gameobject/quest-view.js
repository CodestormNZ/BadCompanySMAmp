var ampView = require('ampersand-view');
var IdValuePair = require('../gameobjects/subviews/idvaluepairs-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.quest,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Group': '[data-hook~=group]',
    'model.SubTitle': '[data-hook~=subtitle]',
    'model.Desc': '[data-hook~=desc]',
    'model.Offer': '[data-hook~=offer]',
    'model.Difficulty': '[data-hook~=difficulty]',
    'model.Icon': '[data-hook~=icon]',
    'model.Repeatable': '[data-hook~=repeatable]',
    'model.Category': '[data-hook~=category]',
    'model.ShowUrl': { type: 'attribute', hook: 'id', name: 'href' }
  },
  subviews: {
    actions: {
      hook: 'actions',
      waitFor: 'collection',
      prepareView: function (el) {
        return new IdValuePair({
          el: el,
          parent: this,
          collection: this.model.Actions
        });
      }
    },
    requirements: {
      hook: 'requirements',
      waitFor: 'collection',
      prepareView: function (el) {
        return new IdValuePair({
          el: el,
          parent: this,
          collection: this.model.Requirements
        });
      }
    },
    objectives: {
      hook: 'objectives',
      waitFor: 'collection',
      prepareView: function (el) {
        return new IdValuePair({
          el: el,
          parent: this,
          collection: this.model.Objectives
        });
      }
    },
    rewards: {
      hook: 'rewards',
      waitFor: 'collection',
      prepareView: function (el) {
        return new IdValuePair({
          el: el,
          parent: this,
          collection: this.model.Rewards
        });
      }
    }
  }
});
