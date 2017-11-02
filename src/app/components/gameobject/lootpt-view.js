var ampView = require('ampersand-view');
var ProbTemplates = require('../gameobjects/subviews/probtemplates-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.lootpt,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  },
  subviews: {
    div: {
      hook: 'templates',
      waitFor: 'collection',
      prepareView: function (el) {
        return new ProbTemplates({
          el: el,
          collection: this.model.Templates,
          parent: this
        });
      }
    }
  }
});
