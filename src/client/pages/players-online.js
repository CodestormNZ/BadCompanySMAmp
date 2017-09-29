var PageView = require('./base');
var templates = require('../templates');
var PlayerView = require('../views/player');


module.exports = PageView.extend({
  pageTitle: 'players online',
  template: templates.pages.playersOnline,
  events: {
    'click [data-hook~=shuffle]': 'shuffle',
    'click [data-hook~=fetch]': 'fetchCollection',
    'click [data-hook~=reset]': 'resetCollection',
    'click [data-hook~=add]': 'addRandom'
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
  resetCollection: function () {
    this.collection.reset();
  },
  shuffle: function () {
    this.collection.comparator = function () {
      return !Math.round(Math.random());
    };
    this.collection.sort();
    delete this.collection.comparator;
    return false;
  },
  addRandom: function () {
    function getRandom(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
    var firstNames = 'Joe Harry Larry Sue Bob Rose Angela Tom Merle Joseph Josephine'.split(' ');
    var lastNames = 'Smith Jewel Barker Stephenson Rossum Crockford'.split(' ');

    this.collection.create({
      firstName: firstNames[getRandom(0, firstNames.length - 1)],
      lastName: lastNames[getRandom(0, lastNames.length - 1)],
      coolnessFactor: getRandom(0, 11)
    });
  }
});
