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
    ChunkInst: 'number',
    Objects: 'number',
    Items: 'number',
    Heap: 'number',
    Max: 'number',
    Rss: 'number',
    pollrate: ['number'],
    isPolling: ['boolean']
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
      fn: function () { return this.Ticks != null ? this.timespan(Math.floor(this.Ticks)) : '' ; }
    },
    FpsInt: {
      deps: ['Fps'],
      fn: function () { return Math.floor(this.Fps); }
    },
    EntityStats: {
      deps: ['Entities', 'EntityInst'],
      fn: function () { return this.Entities != null ? this.Entities + ' (' + this.EntityInst + ')' : ''; }
    },
    ChunkStats: {
      deps: ['Chunks', 'ChunkInst'],
      fn: function () { return this.Chunks != null ? this.Chunks + ' (' + this.ChunkInst + ')' : ''; }
    }
  },
  initialize: function () {
    this.pollrate = 1000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();
  },
  pollForData: function () {
    var self = this;
    setTimeout(function () {
      if (self.isPolling) {
        self.fetchData();
        self.pollForData();
        if (self.Clients === 0) {
          self.pollrate = 10000;
        } else {
          self.pollrate = 1000;
        }
      }
    }, self.pollrate);
  },
  fetchData: function () {
    var url = '';
    if (app.me != null && app.me.adminName != null && app.me.adminName !== '') {
      url = app.me.apiBaseUrl + '/api/executeconsolecommand?raw=true&command=bc-time /mem';
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
            app.gamestats.ChunkInst = stats.ChunkInst;
            app.gamestats.Objects = stats.Objects;
            app.gamestats.Items = stats.Items;
            app.gamestats.Heap = stats.Heap;
            app.gamestats.Max = stats.Max;
            app.gamestats.Rss = stats.Rss;
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
  },
  timespan: function(i) {
      var t = parseInt(i, 10);
      var h = Math.floor(t / 3600);
      var m = Math.floor((t - (h * 3600)) / 60);
      var s = t - (h * 3600) - (m * 60);

      return this.lpad(h, 0, 2) + ':' + this.lpad(m, 0, 2) + ':' + this.lpad(s, 0, 2);
  }
});
