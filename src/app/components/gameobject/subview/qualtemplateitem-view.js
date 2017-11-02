var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.qualtemplateitem,
  bindings: {
    'model.Prob': '[data-hook~=prob]',
    'model.MinQual': '[data-hook~=minqual]',
    'model.MaxQual': '[data-hook~=maxqual]'
  }
});
