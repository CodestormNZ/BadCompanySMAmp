var ampCollection = require('ampersand-rest-collection');
var qualtemplateitem = require('../../gameobject/subview/qualtemplateitem');

module.exports = ampCollection.extend({
  model: qualtemplateitem,
  comparator: function (c) { return (c.get('MinQual')); }
});
