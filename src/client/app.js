var app = require('ampersand-app');
var _ = require('lodash');
var config = require('clientconfig');
var Router = require('./router');
var MainView = require('./views/main');
var Me = require('./models/me');
var Players = require('./models/players');
var Pdfs = require('./models/pdfs');
var domReady = require('domready');

window.app = app;

app.extend({
  me: new Me(),
  players: new Players(),
  pdfs: new Pdfs(),
  router: new Router(),
  init: function () {
    this.mainView = new MainView({
      model: this.me,
      el: document.body
    });

    this.router.history.start({ pushState: true });
  },

  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, {
      trigger: true
    });
  }
});

domReady(_.bind(app.init, app));
