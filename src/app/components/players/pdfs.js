var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var pdf = require('../player/pdf');

module.exports = ampCollection.extend({
  model: pdf,
  comparator: function (c) { return -(c.get('LastOnline')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-pdf';
  }
});
