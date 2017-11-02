var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/buffmodifier-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.buffmodifiers,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('buffmodifier-list'));
    return this;
  }
});
