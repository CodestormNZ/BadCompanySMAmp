var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var PlayersOnline = require('./pages/players-online');
var PlayerAddPage = require('./pages/player-add');
var PlayerEditPage = require('./pages/player-edit');
var PlayerShowPage = require('./pages/player-show');


module.exports = Router.extend({
  routes: {
    '': 'home',
    'players': 'playersOnline',
    'player/add': 'playerAdd',
    'player/:id': 'playerView',
    'player/:id/edit': 'playerEdit',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    app.trigger('page', new HomePage({
      model: app.me
    }));
  },

  playersOnline: function () {
    app.trigger('page', new PlayersOnline({
      model: app.me,
      collection: app.players
    }));
  },

  playerAdd: function () {
    app.trigger('page', new PlayerAddPage());
  },

  playerEdit: function (id) {
    app.trigger('page', new PlayerEditPage({
      id: id
    }));
  },

  playerView: function (id) {
    app.trigger('page', new PlayerShowPage({
      id: id
    }));
  },

  catchAll: function () {
    this.redirectTo('');
  }
});
