var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    Name: 'string',
    SteamId: 'string',
    IsOnline: 'boolean',
    LastOnline: 'date',
    LastWrite: 'date'
  },
  derived: {
    LastOnlineLocal: {
      deps: ['LastOnline'],
      fn: function () {
        var d = this.LastOnline;
        if (d != null) {
          return d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds();
        } else {
          return null;
        }
      }
    },
    LastWriteLocal: {
      deps: ['LastWrite'],
      fn: function () {
        var d = this.LastWrite;
        if (d != null) {
          return d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds();
        } else {
          return null;
        }
      }
    },
    viewUrl: {
      deps: ['SteamId'],
      fn: function () {
        return '/player/' + this.SteamId;
      }
    }
  }
});
