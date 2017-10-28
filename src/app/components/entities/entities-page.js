var app = require('ampersand-app');
var baseView = require('../_core/base');
var collectionView = require('../entity/entity-view');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Entities',
  template: templates.pages.entities,
  props: { isPolling: 'boolean', cooldown: 'number', baseDelay: 'number' },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, collectionView, this.queryByHook('entity-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
    app.entities.baseDelay = 4000;
    app.entities.cooldown = 1;
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
      window.app.entities.baseDelay * window.app.entities.cooldown);
  },
  successCallBack: function (model) { model.cooldown = 1; },
  errorCallBack: function (model) {
    if (this.app.entities) {
      this.app.entities.reset();
    }
    model.cooldown = 10;
  }
});
