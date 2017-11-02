var ampCollection = require('ampersand-rest-collection');
var entityspawn = require('../../gameobject/subview/entityspawn');

module.exports = ampCollection.extend({
  model: entityspawn,
  comparator: function (c) { return (c.get('EntityClassId')); }
});
