var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var lootqt = require('../gameobject/lootqt');

module.exports = ampCollection.extend({
  model: lootqt,
  comparator: function (c) { return (c.get('Name')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-go lootqt';
  }
});
