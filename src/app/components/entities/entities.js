var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var entity = require('../entity/entity');

module.exports = ampCollection.extend({
  model: entity,
  comparator: function (c) { return (c.get('EntityId')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-le /1l /all /istype=EntityAlive' +
      ' /filter=0,1,2,3,4,9,8,6';
  }
});
