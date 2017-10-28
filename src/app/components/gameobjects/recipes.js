var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var recipe = require('../gameobject/recipe');

module.exports = ampCollection.extend({
  model: recipe,
  comparator: function (c) { return (c.get('Type')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-go recipes';
  }
});
