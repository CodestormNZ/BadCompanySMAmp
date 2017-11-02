var ampCollection = require('ampersand-rest-collection');
var qualtemplate = require('../../gameobject/subview/qualtemplate');

module.exports = ampCollection.extend({
  model: qualtemplate,
  comparator: function (c) { return (c.get('MinLevel')); }
});
