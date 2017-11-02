var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/entityspawn-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.entityspawns,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('entityspawn-list'));
    return this;
  }
});
