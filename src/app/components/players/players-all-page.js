var baseView = require('../_core/base');
var collectionView = require('../player/pdf-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'players all',
  template: templates.pages.playersAll,
  events: { 'click [data-hook~=fetch]': 'fetchCollection', 'click [data-hook~=reset]': 'resetCollection' },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('pdf-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
  resetCollection: function () {
    this.collection.reset();
  }
});
