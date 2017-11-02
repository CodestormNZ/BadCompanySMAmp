var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.buffcondition,
  bindings: {
    'model.Counter': '[data-hook~=counter]',
    'model.Type': '[data-hook~=type]',
    'model.Value': '[data-hook~=value]'
  }
});
