var ampView = require('ampersand-view');
var BiomeSpawners = require('../gameobjects/subviews/biomespawners-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.biomespawn,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  },
  subviews: {
    div: {
      hook: 'biomespawners',
      waitFor: 'collection',
      prepareView: function (el) {
        return new BiomeSpawners({
          el: el,
          collection: this.model.Spawns,
          parent: this
        });
      }
    }
  }
});
