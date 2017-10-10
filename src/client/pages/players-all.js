var PageView = require('./base');
var templates = require('../templates');
var PdfView = require('../views/pdf');

module.exports = PageView.extend({
  pageTitle: 'players all',
  template: templates.pages.playersAll,
  events: { 'click [data-hook~=fetch]': 'fetchCollection', 'click [data-hook~=reset]': 'resetCollection' },
  render: function() {
    this.renderWithTemplate();
    this.renderCollection(this.collection, PdfView, this.queryByHook('pdf-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function() {
    this.collection.fetch();
    return false;
  },
  resetCollection: function() {
    this.collection.reset();
  }
});
