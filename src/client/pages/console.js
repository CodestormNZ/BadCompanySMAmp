var PageView = require('./base');
var templates = require('../templates');
var ConsoleForm = require('../forms/console');
var ConsoleModel = require('../models/console');
var xhr = require('xhr');

module.exports = PageView.extend({
  pageTitle: 'console',
  template: templates.pages.console,
  initialize: function () {
    var self = this;
    self.model = new ConsoleModel();
  },
  bindings: {
    'model.command': { hook: 'command' },
    'model.response': { hook: 'response' }
  },
  subviews: {
    form: {
      container: 'form',
      waitFor: 'model',
      prepareView: function (el) {
        var model = this.model;
        return new ConsoleForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            model.adminName = window.app.me.adminName;
            model.adminToken = window.app.me.adminToken;
            model.command = data.command;
            xhr({ body: '', uri: model.urlEndPoint, headers: { "Content-Type": 'application/json' } },
              function (err, resp, body) {
                if (resp.statusCode) {
                  model.response = body;
                } else {
                  console.log('error', resp.error);
                }
              });
          }
        });
      }
    }
  }
});
