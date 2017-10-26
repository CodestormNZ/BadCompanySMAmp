var app = require('ampersand-app');
var baseView = require('../_core/base');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Player Details',
  template: templates.pages.playerShow,
  bindings: {
    'model.steamId': { hook: 'steamId' },
    'model.name': { hook: 'name' }
  },
  initialize: function (spec) {
    var self = this;
    app.players.getOrFetch(spec.steamId,
      { all: true },
      function (err, model) {
        if (err) alert('Couldnt find a player with steamId: ' + spec.steamId);
        self.model = model;
      });
  }
});
