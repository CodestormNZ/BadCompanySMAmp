var app = require('ampersand-app');
var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.ingredient,
  bindings: {
    'model.ItemClassName': '[data-hook~=type]',
    'model.Count': '[data-hook~=count]'
  }
  //,
  //subviews: {
  //  itemClassName: {
  //    hook: 'type',
  //    waitFor: 'app.itemclasses',
  //    prepareView: function (el) {
  //      var itemclass = app.itemclasses.get(this.Type);
  //      return itemclass != null ? itemclass.Name : '';
  //    }
  //  }
  //}
});
