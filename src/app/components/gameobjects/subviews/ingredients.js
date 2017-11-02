var ampCollection = require('ampersand-rest-collection');
var ingredient = require('../../gameobject/subview/ingredient');

module.exports = ampCollection.extend({
  model: ingredient,
  comparator: function (c) { return (c.get('Type')); }
});
