var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/qualtemplate-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.qualtemplates,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('qualtemplate-list'));
    return this;
  }
});
