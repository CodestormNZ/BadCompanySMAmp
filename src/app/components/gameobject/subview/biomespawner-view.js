var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.biomespawner,
  bindings: {
    'model.Group': '[data-hook~=group]',
    'model.Time': '[data-hook~=time]',
    'model.Max': '[data-hook~=max]',
    'model.Delay': '[data-hook~=delay]',
    'model.Dead': '[data-hook~=dead]'
  }
});
