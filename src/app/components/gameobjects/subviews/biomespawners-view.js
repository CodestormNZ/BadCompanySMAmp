var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/biomespawner-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.biomespawners,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('biomespawner-list'));
    return this;
  }
});
