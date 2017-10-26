var app = require('ampersand-app');
var baseView = require('../_core/base');
var loginForm = require('./login-form');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'login',
  template: templates.pages.login,
  initialize: function () {
    var self = this;
    self.model = app.me;
  },
  bindings: {
    'model.adminName': { hook: 'adminName' },
    'model.adminToken': { hook: 'adminToken' },
    'model.hasCredentials': { hook: 'credentials' },
    'model.login': { type: 'attribute', hook: 'steam-login', name: 'style' },
    'model.logout': { type: 'attribute', hook: 'steam-logout', name: 'style' }
  },
  subviews: {
    form: {
      container: 'form',
      waitFor: 'model',
      prepareView: function (el) {
        var model = this.model;
        return new loginForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            model.adminName = data.adminName;
            model.adminToken = data.adminToken;
          }
        });
      }
    }
  },
  events: {
    'click [data-hook~=clear-button]': 'resetToken'
  },
  resetToken: function () {
    app.me.adminName = '';
    app.me.adminToken = '';
  }
});
