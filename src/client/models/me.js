var _ = require('lodash');
var AmpersandModel = require('ampersand-model');
var xhr = require('xhr');

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
    serverProtocol: ['string', true, window.location.protocol + '//'],
    serverIP: ['string', true, window.location.hostname],
    serverPort: ['string', true, window.location.port],
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
          return 'SteamId: ' + this.steamId;
        } else if (this.adminName !== '') {
          return 'AdminName: ' + this.adminName;
        }
        return '';
      }
    },
    login: {
      deps: ['hasLogin'],
      fn: function () {
        if (this.hasLogin) {
          return 'display:' + 'none';
        } else {
          return 'display:' + 'unset';
        }
      }
    },
    logout: {
      deps: ['hasLogin'],
      fn: function () {
        if (this.hasLogin) {
          return 'display:' + 'unset';
        } else {
          return 'display:' + 'none';
        }
      }
    }
  },
  initialize() {
    this.debouncedWriteToCache = _.debounce(this.writeToCache, 250);
    this.pollrate = 5000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();
  },
  writeToCache() {
    var data = JSON.stringify(this);
    localStorage.setItem('me', data);
  },
  load() {
    var data = localStorage.getItem('me');
    if (data) {
      var loaded = JSON.parse(data);
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
    var _self = this;
    xhr({
      body: '',
      uri: _self.urlEndPoint,
      headers: { "Content-Type": 'application/json' }
    },
      function (err, resp, body) {
        if (resp.statusCode) {
          try {
            var _usr = JSON.parse(body);
            window.app.me.steamId = _usr.username;
            window.app.me.hasLogin = _usr.loggedin;
            window.app.me.permissions = _usr.permissions;
          } catch (e) {
            console.log('error', e);
          }
        } else {
          console.log('error', resp.error);
        }
      });
  }
});
