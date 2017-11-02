var ampCollection = require('ampersand-rest-collection');
var condition = require('../../gameobject/subview/buffcondition');

module.exports = ampCollection.extend({
  model: condition,
  comparator: function (c) { return (c.get('Counter')); }
});
