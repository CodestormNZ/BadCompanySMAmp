var app = require('ampersand-app');
var ampModel = require('ampersand-model');
var ingredients = require('../gameobjects/subviews/ingredients');

module.exports = ampModel.extend({
  collections: {
    Ingredients: ingredients
  },
  props:
  {
    Type: 'number',
    Count: 'number',
    CraftArea: 'string',
    CraftExp: 'number',
    CraftTime: 'number',
    CraftTool: 'number',
    IsMatBased: 'boolean',
    IsWildForge: 'boolean',
    SkillGroup: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Type'], fn: function () { return '/static/BCM.html?gameobject/recipe/' + this.Type; } },
    ItemClassName: {
      deps: ['Type'], fn: function () {
        var itemclass = app.itemclasses.get(this.Type);
        return itemclass != null ? itemclass.Name : '';
      },
      cache: false
    }
  }
});
