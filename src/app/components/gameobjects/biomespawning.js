var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var biomespawn = require('../gameobject/biomespawn');

module.exports = ampCollection.extend({
  model: biomespawn,
  comparator: function (c) { return (c.get('Id')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-go biomespawning' +
      ' /filter=0,1';
  }
});
