var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.entityspawn,
  bindings: {
    'model.EntityClassName': '[data-hook~=entityclass]',
    'model.ProbPerc': '[data-hook~=prob]',
    'model.ReqMin': '[data-hook~=reqmin]',
    'model.ReqMax': '[data-hook~=reqmax]'
  }
});
