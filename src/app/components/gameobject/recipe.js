var ampModel = require('ampersand-model');
var ingredients = require('../gameobjects/subviews/ingredients');

module.exports = ampModel.extend({
  props:
  {
    Type: 'number',
    Count: 'number',
    CraftArea: 'string',
    CraftExp: 'number',
    CraftTime: 'number',
    CraftTool: 'number',
    IsMatBased: 'boolean',
    //IsScrappable: 'boolean',
    //IsWildCamp: 'boolean',
    IsWildForge: 'boolean',
    SkillGroup: 'string',
    //Tooltip: 'string',
  },
  collections: {
    Ingredients: ingredients
  },
  derived: {
    ShowUrl: { deps: ['Type'], fn: function () { return '/static/BCM.html?gameobject/recipe/' + this.Type; } }
  }
});
