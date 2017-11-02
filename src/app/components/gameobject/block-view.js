var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.block,
  bindings: {
    'model.Id': '[data-hook~=id]',
    'model.Name': '[data-hook~=name]',
    'model.Local': '[data-hook~=local]',
    'model.IsBlock': '[data-hook~=isblock]',
    'model.Material': '[data-hook~=material]',
    'model.StackNumber': '[data-hook~=stacknumber]',
    'model.ShowUrl': { type: 'attribute', hook: 'id', name: 'href' }
  }
});
