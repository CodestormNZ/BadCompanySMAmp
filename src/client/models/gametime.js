var AmpersandModel = require('ampersand-model');
var xhr = require("xhr");
//var _ = require('lodash');


module.exports = AmpersandModel.extend({
  props: {
    D: 'number',
    H: 'number',
    M: 'number',
    Ticks: 'number',
    Fps: 'number',
    Clients: 'number',
    Entities: 'number',

    pollrate: ['number'],
    isPolling: ['boolean'],

    serverProtocol: ['string', true, 'http://'],
    //todo: location.hostname
    serverIP: ['string', true, '192.168.145.240'],//location.hostname
    serverPort: ['string', true, '8082']
  },
  derived: {
    GameTime: {
      deps: ['D', 'H', 'M'],
      fn: function () {
        return this.D + ' ' + this.H + ' ' + this.M;
      }
    },
    baseUrl: {
      deps: ['serverProtocol', 'serverIP', 'serverPort'],
      fn: function () {
        return this.serverProtocol + this.serverIP + ':' + this.serverPort;
      }
    }
  },
  initialize() {
    this.pollrate = 5000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();

    this.queryByHook('game-time');

  },
  pollForData: function () {
    var _self = this;
    setTimeout(function () {
      if (_self.isPolling) {
        _self.fetchData();
        _self.pollForData();
      }
    }, _self.pollrate);
  },
  fetchData: function () {
    var url = this.baseUrl + '/api/executeconsolecommand?raw=true&command=bc-time';
    if (window.app.me != null && window.app.me.adminName != null && window.app.me.adminName !== '') {
      url += `&adminuser=${window.app.me.adminName}&admintoken=${window.app.me.adminToken}`;
    } else if (window.app.me == null || !window.app.me.hasLogin) {
      return;
    }

    xhr({
      body: '',
      uri: url,
      headers: {
        "Content-Type": "application/json"
      }
    }, function (err, resp, body) {
      if (resp.statusCode) {
        try {
          const _time = JSON.parse(body);
          //{"Time":{"D":1,"H":10,"M":26},"Ticks":533150.5,"Fps":19.96,"Clients":0,"Entities":0}
          window.app.gametime.D = _time.Time.D;
          window.app.gametime.H = _time.Time.H;
          window.app.gametime.M = _time.Time.M;
          window.app.gametime.Ticks = _time.Ticks;
          window.app.gametime.Fps = _time.Fps;
          window.app.gametime.Clients = _time.Clients;
          window.app.gametime.Entities = _time.Entities;
        } catch (e) {
          console.log("error", e);
        }
      } else {
        //todo: display error
        console.log("error", resp.error);
      }
    });
  }
});
