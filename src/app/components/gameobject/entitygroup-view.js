var ampView = require('ampersand-view');
var EntitySpawn = require('../gameobjects/subviews/entityspawns-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.entitygroup,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  },
  subviews: {
    entities: {
      hook: 'entityspawns',
      waitFor: 'collection',
      prepareView: function (el) {
        return new EntitySpawn({
          el: el,
          parent: this,
          collection: this.model.Entities
        });
      }
    }
  }
});
