var Collection = require('ampersand-rest-collection');
var Player = require('./player');

module.exports = Collection.extend({
  model: Player,
  comparator: function(collection) { return (collection.get('EntityId')); },
  url: function() {
    var mode = 'all';
    if (window.app.me.adminName != null && window.app.me.adminName !== '') {
      return '/api/executeconsolecommand?raw=true' +
        '&adminuser=' +
        window.app.me.adminName +
        '&admintoken=' +
        window.app.me.adminToken +
        '&command=bc-lp /1l /' +
        mode +
        ' /filter=0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,19,23,24,25,26,27,28,29,30,31,32,33,34,35';
    } else {
      return '/api/executeconsolecommand?raw=true&command=bc-lp /1l /' +
        mode +
        ' /filter=0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,19,23,24,25,26,27,28,29,30,31,32,33,34,35';
    }
  }
});