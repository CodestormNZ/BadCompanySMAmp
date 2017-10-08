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
    IsOnlineText: {
      deps: ['IsOnline'],
      fn: function () {
        return this.IsOnline ? 'Online' : 'Offline';
      }
    },
    LastOnlineLocal: {
      deps: ['LastOnline'],
      fn: function () {
        const d = this.LastOnline;
        if (d != null) {
          return this.parseDate(d);
        } else {
          return null;
        }
      }
    },
    LastWriteLocal: {
      deps: ['LastWrite'],
      fn: function () {
        const d = this.LastWrite;
        if (d != null) {
          return this.parseDate(d);
        } else {
          return null;
        }
      }
    },
    viewUrl: {
      deps: ['SteamId'],
      fn: function () {
        return `/player/${this.SteamId}`;
      }
    }
  },
  parseDate: function (d) {
    if (d == null) return null;

    return d.getDate() +
      "-" +
      (this.months(d.getMonth())) +
      "-" +
      d.getFullYear() +
      " " +
      this.lpad(d.getHours(), '0', 2) +
      ":" +
      this.lpad(d.getMinutes(), '0', 2) +
      ":" +
      this.lpad(d.getSeconds(), '0', 2);
  },
  months: function (m) {
    switch (m) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return '';
    }
  },
  lpad: function (t, c, l) {
    while (`${t}`.length < l) {
      t = `${c}${t}`;
    }

    return t;
  }
});
