var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.biome,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Color': '[data-hook~=color]',
    'model.Freq': '[data-hook~=freq]',
    'model.Depth': '[data-hook~=depth]',
    'model.Spec': '[data-hook~=spec]',
    'model.Prob': '[data-hook~=prob]',
    'model.Rad': '[data-hook~=rad]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
