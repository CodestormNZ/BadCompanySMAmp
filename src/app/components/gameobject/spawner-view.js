var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.spawner,
  bindings: {
    'model.Key': '[data-hook~=key]',
    'model.Dynamic': '[data-hook~=dynamic]',
    'model.WrapDays': '[data-hook~=wrapdays]',
    'model.ClampDays': '[data-hook~=clampdays]',
    'model.SpawnsCount': '[data-hook~=spawns]',
    'model.ShowUrl': { type: 'attribute', hook: 'key', name: 'href' }
  }
});
