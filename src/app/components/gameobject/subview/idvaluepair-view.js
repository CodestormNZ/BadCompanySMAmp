var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.idvaluepair,
  bindings: {
    'model.Type': '[data-hook~=type]',
    'model.Id': '[data-hook~=id]',
    'model.Value': '[data-hook~=value]'
  }
});
