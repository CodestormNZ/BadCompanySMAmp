var app = require('ampersand-app');
var ampModel = require('ampersand-model');
var xhr = require('xhr');

module.exports = ampModel.extend({
  props: {
    D: 'number',
    H: 'number',
    M: 'number',
    Ticks: 'number',
    Fps: 'number',
    Clients: 'number',
    Entities: 'number',
    EntityInst: 'number',
    Players: 'number',
    Enemies: 'number',
    Observers: 'number',
    Chunks: 'number',
    GO: 'number',
    Items: 'number',
    pollrate: ['number'],
    isPolling: ['boolean'],
    serverProtocol: ['string', true, window.location.protocol + '//'],
    serverIP: ['string', true, window.location.hostname],
    serverPort: ['string', true, window.location.port]
  },
  derived: {
    GameDay: {
      deps: ['D'],
      fn: function () { return this.D != null ? this.D : ''; }
    },
    GameTime: {
      deps: ['H', 'M'],
      fn: function () { return this.H != null ? this.lpad(this.H, 0, 2) + ':' + this.lpad(this.M, 0, 2) : ''; }
    },
    TicksInt: {
      deps: ['Ticks'],
      fn: function () { return Math.floor(this.Ticks); }
    },
    FpsInt: {
      deps: ['Fps'],
      fn: function () { return Math.floor(this.Fps); }
    },
    baseUrl: {
      deps: ['serverProtocol', 'serverIP', 'serverPort'],
      fn: function () { return this.serverProtocol + this.serverIP + ':' + this.serverPort; }
    }
  },
  initialize: function () {
    this.pollrate = 1000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();
  },
  pollForData: function () {
    var _self = this;
    setTimeout(function () {
      if (_self.isPolling) {
        _self.fetchData();
        _self.pollForData();
        if (_self.Clients === 0) {
          _self.pollrate = 10000;
        } else {
          _self.pollrate = 1000;
        }
      }
    }, _self.pollrate);
  },
  fetchData: function () {
    var url = this.baseUrl + '/api/executeconsolecommand?raw=true&command=bc-time';
    if (app.me != null && app.me.adminName != null && app.me.adminName !== '') {
      url += '&adminuser=' + app.me.adminName + '&admintoken=' + app.me.adminToken;
    } else if (app.me == null || !app.me.hasLogin) {
      return;
    }
    xhr({
      body: '',
      uri: url,
      headers: { 'Content-Type': 'application/json' }
    },
      function (err, resp, body) {
        if (resp.statusCode) {
          try {
            var stats = JSON.parse(body);
            app.gamestats.D = stats.Time.D;
            app.gamestats.H = stats.Time.H;
            app.gamestats.M = stats.Time.M;
            app.gamestats.Ticks = stats.Ticks;
            app.gamestats.Fps = stats.Fps;
            app.gamestats.Clients = stats.Clients;
            app.gamestats.Entities = stats.Entities;
            app.gamestats.EntityInst = stats.EntityInst;
            app.gamestats.Players = stats.Players;
            app.gamestats.Enemies = stats.Enemies;
            app.gamestats.Observers = stats.Observers;
            app.gamestats.Chunks = stats.Chunks;
            app.gamestats.GO = stats.GO;
            app.gamestats.Items = stats.Items;
          } catch (e) {
            console.log('gamestats-parse-error', e);
          }
        } else {
          console.log('gamestats-ajax-error', resp.error);
        }
      });
  },
  lpad: function (t, c, l) {
    while (('' + t).length < l) {
      t = '' + c + t;
    }
    return t;
  }
});
