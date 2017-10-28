var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.ingredient,
  bindings: {
    'model.Type': '[data-hook~=type]',
    'model.Count': '[data-hook~=count]'
  }
});
