var ampView = require('ampersand-view');
var collectionView = require('../../gameobject/subview/qualtemplateitem-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.pages.gameobjects.subviews.qualtemplateitems,
  render: function () {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, collectionView, this.queryByHook('qualtemplateitem-list'));
    return this;
  }
});
