var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/idvaluepair-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.idvaluepairs,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('idvaluepair-list'));
    return this;
  }
});
