var PageView = require('./base');
var templates = require('../templates');
var LoginForm = require('../forms/login');


module.exports = PageView.extend({
  pageTitle: 'login',
  template: templates.pages.login,
  initialize: function (spec) {
    var self = this;
    self.model = window.app.me;
  },
  bindings: {
    'model.adminName': {
      hook: 'adminName'
    },
    'model.adminToken': {
      hook: 'adminToken'
    }
  },
  subviews: {
    form: {
      container: 'form',
      waitFor: 'model',
      prepareView: function (el) {
        var model = this.model;
        return new LoginForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            model.adminName = data.adminName;
            model.adminToken = data.adminToken;
          }
        });
      }
    }
  }
});
