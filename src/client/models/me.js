var AmpersandModel = require('ampersand-model');
var xhr = require("xhr");
var _ = require('lodash');


module.exports = AmpersandModel.extend({
  type: 'user',
  props: {
    adminName: ['string'],
    adminToken: ['string'],

    hasLogin: ['boolean'],
    steamId: ['string'],
    permissions: ['object'],

    pollrate: ['number'],
    isPolling: ['boolean'],

    serverProtocol: ['string', true, 'http://'],
    //todo: location.hostname
    serverIP: ['string', true, '192.168.145.240'],//location.hostname
    serverPort: ['string', true, '8082'],
    apiEndPoint: ['string', true, '/userstatus']
  },
  derived: {
    urlEndPoint: {
      fn: function () {
        return this.serverProtocol + this.serverIP + ':' + this.serverPort + this.apiEndPoint;
      }
    },
    hasCredentials: {
      deps: ['adminUser', 'hasLogin', 'steamId'],
      fn: function () {
        if (this.hasLogin) {
          return `SteamId: ${this.steamId}`;
        } else if (this.adminName !== '') {
          return `AdminName: ${this.adminName}`;
        }
        return '';
      }
    },
    login: {
      deps: ['hasLogin'],
      fn: function () {
        if (this.hasLogin) {
          return "display:" + "none";
        } else {
          return "display:" + "unset";
        }
      }
    },
    logout: {
      deps: ['hasLogin'],
      fn: function () {
        if (this.hasLogin) {
          return "display:" + "unset";
        } else {
          return "display:" + "none";
        }
      }
    }
  },
  initialize() {
    this.debouncedWriteToCache = _.debounce(this.writeToCache, 250);

    console.log(window.location);

    this.pollrate = 5000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();
  },
  writeToCache() {
    const data = JSON.stringify(this);
    localStorage.setItem('me', data);
  },
  load() {
    const data = localStorage.getItem('me');
    if (data) {
      const loaded = JSON.parse(data);
      this.set(loaded);
    }

    return this;
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
    const _self = this;
    xhr({
      body: '',
      uri: _self.urlEndPoint,
      headers: {
        "Content-Type": "application/json"
      }
    }, function (err, resp, body) {
      if (resp.statusCode) {
        try {
          const _usr = JSON.parse(body);
          window.app.me.steamId = _usr.username;
          window.app.me.hasLogin = _usr.loggedin;
          window.app.me.permissions = _usr.permissions;
        } catch (e) {
          console.log("error", e);
        }
      } else {
        console.log("error", resp.error);
      }
    });
  }
});
