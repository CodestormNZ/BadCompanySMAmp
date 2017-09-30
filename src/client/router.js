var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var Console = require('./pages/console');
var Login = require('./pages/login');
var PlayersOnline = require('./pages/players-online');
var PlayerAddPage = require('./pages/player-add');
var PlayerEditPage = require('./pages/player-edit');
var PlayerShowPage = require('./pages/player-show');


module.exports = Router.extend({
  routes: {
    'static/BCM.html': 'home',
    'static/BCM.html/players': 'playersOnline',
    'static/BCM.html/player/:id': 'playerView',
    'static/BCM.html/console': 'console',
    'static/BCM.html/login': 'login',
    'static/BCM.html/player/add': 'playerAdd',
    'static/BCM.html/player/:id/edit': 'playerEdit',
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

  playerView: function (id) {
    app.trigger('page', new PlayerShowPage({
      id: id
    }));
  },

  console: function () {
    app.trigger('page', new Console());
  },

  login: function () {
    app.trigger('page', new Login());
  },

  playerAdd: function () {
    app.trigger('page', new PlayerAddPage());
  },

  playerEdit: function (id) {
    app.trigger('page', new PlayerEditPage({
      id: id
    }));
  },

  catchAll: function () {
    this.redirectTo('static/BCM.html');
  }
});
