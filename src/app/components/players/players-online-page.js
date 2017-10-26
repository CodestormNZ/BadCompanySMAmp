var app = require('ampersand-app');
var baseView = require('../_core/base');
var collectionView = require('../player/player-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Players Online',
  template: templates.pages.playersOnline,
  props: { isPolling: 'boolean', cooldown: 'number', baseDelay: 'number' },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('player-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
    app.players.baseDelay = 4000;
    app.players.cooldown = 1;
    this.isPolling = true;
    this.pollForData();
  },
  fetchCollection: function () {
    if (app.me.hasLogin || (app.me.adminName != null && app.me.adminName !== '')) {
      this.collection.fetch({ success: this.successCallBack, error: this.errorCallBack });
    } else {
      app.me.hasLogin = app.me.hasLogin;
    }
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
    },
      window.app.players.baseDelay * window.app.players.cooldown);
  },
  successCallBack: function (model) { model.cooldown = 1; },
  errorCallBack: function (model) {
    if (this.app.players) {
      this.app.players.reset();
    }
    model.cooldown = 10;
  }
});
