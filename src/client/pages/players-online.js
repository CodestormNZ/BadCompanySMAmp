var _ = require("lodash");
//var $ = require("jquery");
var PageView = require('./base');
var templates = require('../templates');
var PlayerView = require('../views/player');


module.exports = PageView.extend({
  pageTitle: 'players online',
  template: templates.pages.playersOnline,
  events: {
    'click [data-hook~=fetch]': 'fetchCollection',
    'click [data-hook~=sort]': 'sortCollection',
    'click [data-hook~=clipboard]': 'copyToClipboard'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, PlayerView, this.queryByHook('player-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
  sortCollection: function () {
    this.collection.sort();
    return false;
  },
  copyToClipboard: function (element) {
    console.log(element);

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    return false;
  }
});
