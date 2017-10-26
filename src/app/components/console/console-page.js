var app = require('ampersand-app');

var xhr = require('xhr');
var baseView = require('../_core/base');
var consoleForm = require('./console-form');
var console = require('./console');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Console',
  template: templates.pages.console,
  initialize: function () {
    var self = this;
    self.model = new console();
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
        return new consoleForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
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
