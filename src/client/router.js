var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var Console = require('./pages/console');
var Login = require('./pages/login');
var PlayersOnline = require('./pages/players-online');
var PlayersAll = require('./pages/players-all');
var PlayerShowPage = require('./pages/player-show');

module.exports = Router.extend({
  routes: {
    'static/BCM.html?home': 'home',
    'static/BCM.html?online': 'playersOnline',
    'static/BCM.html?players': 'playersAll',
    'static/BCM.html?player/:id': 'playerView',
    'static/BCM.html?console': 'console',
    'static/BCM.html?login': 'login',
    'static/BCM.html(*path)': 'catchAll'
  },
  home: function () { app.trigger('page', new HomePage({ model: app.me })); },
  playersOnline: function () { app.trigger('page', new PlayersOnline({ model: app.me, collection: app.players })); },
  playersAll: function () { app.trigger('page', new PlayersAll({ model: app.me, collection: app.pdfs })); },
  playerView: function (id) { app.trigger('page', new PlayerShowPage({ id: id })); },
  console: function () { app.trigger('page', new Console()); },
  login: function () { app.trigger('page', new Login()); },
  catchAll: function () { this.redirectTo('static/BCM.html?home'); }
});
