var ampCollection = require('ampersand-rest-collection');
var biomespawner = require('../../gameobject/subview/biomespawner');

module.exports = ampCollection.extend({
  model: biomespawner,
  comparator: function (c) { return (c.get('Group')); }
});
