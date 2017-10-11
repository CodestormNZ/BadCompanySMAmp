var Collection = require('ampersand-rest-collection');
var Pdf = require('./pdf');

module.exports = Collection.extend({
  model: Pdf,
  comparator: function (collection) { return -(collection.get('LastOnline')); },
  url: function () {
    if (window.app.me.adminName !== '') {
      return '/api/executeconsolecommand?raw=true' +
        '&adminuser=' + window.app.me.adminName +
        '&admintoken=' + window.app.me.adminToken +
        '&command=bc-pdf';
    } else {
      return '/api/executeconsolecommand?raw=true&command=bc-pdf';
    }
  }
});
