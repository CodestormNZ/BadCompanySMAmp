var ampCollection = require('ampersand-rest-collection');
var modifier = require('../../gameobject/subview/buffmodifier');

module.exports = ampCollection.extend({
  model: modifier,
  comparator: function (c) { return (c.get('UID')); }
});
