var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/probtemplate-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.probtemplates,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('probtemplate-list'));
    return this;
  }
});
