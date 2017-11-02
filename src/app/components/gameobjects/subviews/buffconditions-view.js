var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/buffcondition-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.buffconditions,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('buffcondition-list'));
    return this;
  }
});
