var ampModel = require('ampersand-model');
var actions = require('../gameobjects/subviews/idvaluepairs');
var requirements = require('../gameobjects/subviews/idvaluepairs');
var objectives = require('../gameobjects/subviews/idvaluepairs');
var rewards = require('../gameobjects/subviews/idvaluepairs');

module.exports = ampModel.extend({
  collections: {
    Actions: actions,
    Requirements: requirements,
    Objectives: objectives,
    Rewards: rewards
  },
  props:
  {
    Id: 'string',
    Name: 'string',
    Group: 'string',
    SubTitle: 'string',
    Desc: 'string',
    Offer: 'string',
    Difficulty: 'string',
    Icon: 'string',
    Repeatable: 'boolean',
    Category: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Id'], fn: function () { return '/static/BCM.html?gameobject/quest/' + this.Id; } }
  }
});
