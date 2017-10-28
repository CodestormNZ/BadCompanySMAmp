var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.gamestats,
  bindings: {
    'model.GameDay': '[data-hook~=game-day]',
    'model.GameTime': '[data-hook~=game-time]',
    'model.TicksInt': '[data-hook~=game-ticks]',
    'model.FpsInt': '[data-hook~=game-fps]',
    'model.Clients': '[data-hook~=game-clients]',
    'model.EntityStats': '[data-hook~=game-entities]',
    'model.Players': '[data-hook~=game-players]',
    'model.Enemies': '[data-hook~=game-enemies]',
    'model.Observers': '[data-hook~=game-observers]',
    'model.ChunkStats': '[data-hook~=game-chunks]',
    'model.Objects': '[data-hook~=game-objects]',
    'model.Items': '[data-hook~=game-items]',
    'model.Heap': '[data-hook~=game-heap]',
    'model.Max': '[data-hook~=game-max]',
    'model.Rss': '[data-hook~=game-rss]'
  },
  render: function () {
    this.renderWithTemplate(this);
  }
});
