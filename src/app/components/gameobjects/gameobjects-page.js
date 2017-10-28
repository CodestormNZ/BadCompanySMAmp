var baseView = require('../_core/base');
var templates = require('../../templates');
var GameObjectMenu = require('../gameobjects/gameobjectmenu-view');

module.exports = baseView.extend({
  pageTitle: 'Game Objects',
  template: templates.pages.gameobjects.gameobjects,
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
