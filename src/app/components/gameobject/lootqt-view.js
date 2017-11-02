var ampView = require('ampersand-view');
var QualTemplates = require('../gameobjects/subviews/qualtemplates-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.lootqt,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  },
  subviews: {
    div: {
      hook: 'templates',
      waitFor: 'collection',
      prepareView: function (el) {
        return new QualTemplates({
          el: el,
          collection: this.model.Templates,
          parent: this
        });
      }
    }
  }
});
