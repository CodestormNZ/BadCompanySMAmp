var ampCollection = require('ampersand-rest-collection');
var idvaluepair = require('../../gameobject/subview/idvaluepair');

module.exports = ampCollection.extend({
  model: idvaluepair,
  comparator: function (c) { return (c.get('Id')); }
});
