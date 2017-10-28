var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.biomespawn,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.Spawns': '[data-hook~=spawns]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
