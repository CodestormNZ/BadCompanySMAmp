var app = require('ampersand-app');
var ampView = require('ampersand-view');
var Ingredients = require('../gameobjects/subviews/ingredients-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.recipe,
  bindings: {
    'model.ItemClassName': '[data-hook~=type]',
    'model.Count': '[data-hook~=count]',
    'model.CraftArea': '[data-hook~=craftarea]',
    'model.CraftExp': '[data-hook~=craftexp]',
    'model.CraftTime': '[data-hook~=crafttime]',
    'model.CraftTool': '[data-hook~=crafttool]',
    'model.IsMatBased': '[data-hook~=ismatbased]',
    'model.IsWildForge': '[data-hook~=iswildforge]',
    'model.SkillGroup': '[data-hook~=skillgroup]',
    'model.ShowUrl': { type: 'attribute', hook: 'type', name: 'href' }
  },
  subviews: {
    div: {
      hook: 'ingredients',
      waitFor: 'collection',
      prepareView: function (el) {
        return new Ingredients({
          el: el,
          collection: this.model.Ingredients,
          parent: this
        });
      }
    }
  }
});
