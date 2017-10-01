var Collection = require('ampersand-rest-collection');
var Pdf = require('./pdf');

//todo:dynamic url
module.exports = Collection.extend({
  model: Pdf,
  url: '/api/executeconsolecommand?adminuser=stompynz&admintoken=thisisatoken&raw=true&' + 'command=bc-pdf'
});
