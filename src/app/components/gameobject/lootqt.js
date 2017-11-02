var ampModel = require('ampersand-model');
var qualtemplates = require('../gameobjects/subviews/qualtemplates');

module.exports = ampModel.extend({
  collections: {
    Templates: qualtemplates
  },
  props:
  {
    Name: 'string'
  },
  derived: {
    ShowUrl: { deps: ['Name'], fn: function () { return '/static/BCM.html?gameobject/lootqt/' + this.Name; } }
  }
});
