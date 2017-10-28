var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.itemclass,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  }
});
