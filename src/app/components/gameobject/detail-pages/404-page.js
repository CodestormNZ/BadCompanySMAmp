var baseView = require('../../_core/base');
var GameObjectMenu = require('../../gameobjects/gameobjectmenu-view');
var templates = require('../../../templates');

module.exports = baseView.extend({
  pageTitle: '404',
  template: templates.pages.notimplemented,
  render: function () {
    this.renderWithTemplate();
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
