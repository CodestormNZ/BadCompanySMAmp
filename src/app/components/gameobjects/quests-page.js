var baseView = require('../_core/base');
var collectionView = require('../gameobject/quest-view');
var GameObjectMenu = require('../gameobjects/gameobjectmenu-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Quests',
  template: templates.pages.gameobjects.quests,
  events: { 'click [data-hook~=fetch]': 'fetchCollection' },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('quest-list'));
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
