var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var archetype = require('../gameobject/archetype');

module.exports = ampCollection.extend({
  model: archetype,
  comparator: function (c) { return (c.get('Name')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-go archetypes' +
      ' /filter=0,1,2,3,4,5';
  }
});
