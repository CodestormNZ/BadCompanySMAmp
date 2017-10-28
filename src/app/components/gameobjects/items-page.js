var baseView = require('../_core/base');
var collectionView = require('../gameobject/item-view');
var GameObjectMenu = require('../gameobjects/gameobjectmenu-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Items',
  template: templates.pages.gameobjects.items,
  events: { 'click [data-hook~=fetch]': 'fetchCollection' },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('item-list'));
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
