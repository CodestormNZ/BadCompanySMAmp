var ampCollection = require('ampersand-rest-collection');
var probtemplate = require('../../gameobject/subview/probtemplate');

module.exports = ampCollection.extend({
  model: probtemplate,
  comparator: function (c) { return (c.get('MinLevel')); }
});
