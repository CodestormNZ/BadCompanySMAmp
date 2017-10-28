var app = require('ampersand-app');
var ampCollection = require('ampersand-rest-collection');
var player = require('../player/player');

module.exports = ampCollection.extend({
  model: player,
  comparator: function (c) { return (c.get('EntityId')); },
  url: function () {
    return '/api/executeconsolecommand?raw=true' +
      (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
      (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
      '&command=bc-lp /1l /all' +
      ' /filter=0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,19,23,24,25,26,27,28,29,30,31,32,33,34,35';
  }
});
