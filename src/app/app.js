var app = require('ampersand-app');
var _ = require('lodash');
var config = require('clientconfig');
var domReady = require('domready');

var Router = require('./components/_core/router');
var Me = require('./components/_core/me');
var MainView = require('./components/_core/main-view');
var GameStats = require('./components/gamestats/gamestats');
var Players = require('./components/players/players');
var Pdfs = require('./components/players/pdfs');

window.app = app;

app.extend({
  me: new Me().load(),
  players: new Players(),
  pdfs: new Pdfs(),
  gamestats: new GameStats(),
  router: new Router(),
  init: function () {
    this.mainView = new MainView({ model: this.me, el: document.body });
    this.router.history.start({ pushState: true });
    this.me.on('change', this.me.debouncedWriteToCache);
  },
  navigate: function (page) {
    var url = page.charAt(0) === '?' ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true });
  }
});

domReady(_.bind(app.init, app));
