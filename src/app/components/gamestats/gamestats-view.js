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
    'model.Entities': '[data-hook~=game-entities]',
    'model.EntityInst': '[data-hook~=game-entityinst]',
    'model.Players': '[data-hook~=game-players]',
    'model.Enemies': '[data-hook~=game-enemies]',
    'model.Observers': '[data-hook~=game-observers]',
    'model.Chunks': '[data-hook~=game-chunks]',
    'model.GO': '[data-hook~=game-go]',
    'model.Items': '[data-hook~=game-items]'
  },
  render: function () {
    this.renderWithTemplate(this);
  }
});
