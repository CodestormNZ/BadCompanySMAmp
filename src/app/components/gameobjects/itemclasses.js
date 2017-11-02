var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var itemclass = require('../gameobject/itemclass');

module.exports = ampCollection.extend({
  model: itemclass,
  mainIndex: 'Id',
  comparator: function (c) { return (c.get('Id')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-go itemclasses';
  }
});
