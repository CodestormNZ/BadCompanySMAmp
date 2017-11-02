var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.probtemplate,
  bindings: {
    'model.MinLevel': '[data-hook~=minlevel]',
    'model.MaxLevel': '[data-hook~=maxlevel]',
    'model.ProbPerc': '[data-hook~=prob]'
  }
});
