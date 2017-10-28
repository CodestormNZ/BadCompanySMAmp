var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/ingredient-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.ingredients,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('ingredient-list'));
  }
});
