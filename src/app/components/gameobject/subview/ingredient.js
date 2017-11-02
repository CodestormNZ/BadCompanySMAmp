var app = require('ampersand-app');
var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    Type: 'number',
    Count: 'number'
  },
  derived: {
    ItemClassName: {
      deps: ['Type'], fn: function () {
        var itemclass = app.itemclasses.get(this.Type);
        return itemclass != null ? itemclass.Name : '';
      },
      cache: false
    }
  }
});
