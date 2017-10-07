var PageView = require('./base');
var templates = require('../templates');
var PlayerView = require('../views/player');


module.exports = PageView.extend({
  pageTitle: 'Players Online',
  template: templates.pages.playersOnline,
  props: {
    isPolling: 'boolean',
    cooldown: 'number',
    baseDelay: 'number'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, PlayerView, this.queryByHook('player-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
    window.app.players.baseDelay = 4000;
    window.app.players.cooldown = 1;
    this.isPolling = true;
    this.pollForData();
  },
  fetchCollection: function () {
    if (window.app.me.hasLogin || (window.app.me.adminName != null && window.app.me.adminName !== '')) {
      this.collection.fetch({ success: this.successCallBack, error: this.errorCallBack });
    } else {
      //todo: notify of no login
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
    }, window.app.players.baseDelay * window.app.players.cooldown);
  },
  successCallBack: function (model, response, options) {
    //todo: notify of update
    model.cooldown = 1;
  },
  errorCallBack: function (model, response, options) {
    //todo: notify of error
    if (this.app.players) {
      this.app.players.reset();
    }
    model.cooldown = 10;
  }
});
