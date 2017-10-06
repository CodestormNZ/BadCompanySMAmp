var PageView = require('./base');
var templates = require('../templates');
var PlayerView = require('../views/player');


module.exports = PageView.extend({
  pageTitle: 'Players Online',
  template: templates.pages.playersOnline,
  events: {
    'click [data-hook~=fetch]': 'fetchCollection',
    'click [data-hook~=sort]': 'sortCollection'
  },
  props: {
    isPolling: 'boolean'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, PlayerView, this.queryByHook('player-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
    this.isPolling = true;
    this.pollForData();
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
  sortCollection: function () {
    this.collection.sort();
    return false;
  },
  pollForData: function () {
    var _self = this;
    setTimeout(function () {
      if (_self.isPolling) {
        _self.fetchCollection();
        _self.pollForData();
      }
    }, 1000);
  }
});
