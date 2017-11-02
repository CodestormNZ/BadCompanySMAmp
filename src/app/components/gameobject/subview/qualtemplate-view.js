var ampView = require('ampersand-view');
var QualTemplateItems = require('../../gameobjects/subviews/qualtemplateitems-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.qualtemplate,
  bindings: {
    'model.MinQual': '[data-hook~=minqual]',
    'model.MaxQual': '[data-hook~=maxqual]',
    'model.MinLevel': '[data-hook~=minlevel]',
    'model.MaxLevel': '[data-hook~=maxlevel]'
  },
  subviews: {
    items: {
      hook: 'items',
      waitFor: 'collection',
      prepareView: function(el) {
        return new QualTemplateItems({
          el: el,
          parent: this,
          collection: this.model.Items
        });
      }
    }
  }
});
