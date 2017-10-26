var app = require('ampersand-app');
var router = require('ampersand-router');

var Home = require('../home/home-page');
var Console = require('../console/console-page');
var Login = require('../login/login-page');
var PlayersOnline = require('../players/players-online-page');
var PlayersAll = require('../players/players-all-page');
var PlayerShow = require('../player/player-show-page');

module.exports = router.extend({
  routes: {
    'static/BCM.html?home': 'home',
    'static/BCM.html?online': 'playersOnline',
    'static/BCM.html?players': 'playersAll',
    'static/BCM.html?player/:steamId': 'playerShow',
    'static/BCM.html?console': 'console',
    'static/BCM.html?login': 'login',
    'static/BCM.html(*path)': 'catchAll'
  },
  home: function () { app.trigger('page', new Home({ model: app.me })); },
  playersOnline: function () { app.trigger('page', new PlayersOnline({ model: app.me, collection: app.players })); },
  playersAll: function () { app.trigger('page', new PlayersAll({ model: app.me, collection: app.pdfs })); },
  playerShow: function (id) { app.trigger('page', new PlayerShow({ id: id })); },
  console: function () { app.trigger('page', new Console()); },
  login: function () { app.trigger('page', new Login()); },
  catchAll: function () { this.redirectTo('static/BCM.html?home'); }
});
