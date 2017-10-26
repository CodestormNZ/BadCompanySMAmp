var ampModel = require('ampersand-model');
var _ = require('lodash');
var xhr = require('xhr');

module.exports = ampModel.extend({
  type: 'user',
  props: {
    adminName: ['string'],
    adminToken: ['string'],
    hasLogin: ['boolean'],
    steamId: ['string'],
    permissions: ['object'],
    pollrate: ['number'],
    isPolling: ['boolean'],
    apiEndPoint: ['string', true, '/userstatus']
  },
  derived: {
    apiBaseUrl: {
      fn: function () {
        return window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
      }
    },
    urlEndPoint: {
      fn: function () {
        return this.apiBaseUrl + this.apiEndPoint;
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
  initialize: function () {
    this.debouncedWriteToCache = _.debounce(this.writeToCache, 250);
    this.pollrate = 5000;
    this.isPolling = true;
    this.fetchData();
    this.pollForData();
  },
  writeToCache: function () {
    var data = JSON.stringify(this);
    localStorage.setItem('me', data);
  },
  load: function () {
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
            //todo: this.var?
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
