var app = require('ampersand-app');
var baseView = require('../_core/base');
var collectionView = require('../gameobject/recipe-view');
var GameObjectMenu = require('../gameobjects/gameobjectmenu-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Recipes',
  template: templates.pages.gameobjects.recipes,
  events: { 'click [data-hook~=fetch]': 'fetchCollection' },
  render: function () {
    if (!app.itemclasses.length) {
      app.itemclasses.fetch();
    };
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('recipe-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    };
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
