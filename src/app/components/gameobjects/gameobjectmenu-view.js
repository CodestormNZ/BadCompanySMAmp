var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobjectmenu,
  render: function () {
    this.renderWithTemplate(this);
  }
});
