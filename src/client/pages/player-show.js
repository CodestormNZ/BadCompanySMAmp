/*global alert*/
var app = require('ampersand-app');
var PageView = require('./base');
var templates = require('../templates');
var PlayerForm = require('../forms/player');


module.exports = PageView.extend({
  pageTitle: 'view player',
  template: templates.pages.playerView,
  bindings: {
    'model.fullName': {
      hook: 'name'
    },
    'model.avatar': {
      type: 'attribute',
      hook: 'avatar',
      name: 'src'
    }
  },
  initialize: function (spec) {
    var self = this;
    app.players.getOrFetch(spec.id, { all: true }, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
    });
  }
});
