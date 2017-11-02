var app = require('ampersand-app');
var baseView = require('../_core/base');
var collectionView = require('../gameobject/entitygroup-view');
var GameObjectMenu = require('../gameobjects/gameobjectmenu-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Entity Group',
  template: templates.pages.gameobjects.entitygroups,
  events: { 'click [data-hook~=fetch]': 'fetchCollection' },
  render: function () {
    var self = this;
    if (!app.entityclasses.length) {
      app.entityclasses.fetch({
        success: function (coll, resp) {
          self.redraw();
        }
      });
    };

    self.redraw();
  },
  redraw: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('entitygroup-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
  subviews: {
    div: {
      hook: 'game-object-menu',
      prepareView: function (el) {
        return new GameObjectMenu({
          el: el,
          parent: this
        });
      }
    }
  }
});
