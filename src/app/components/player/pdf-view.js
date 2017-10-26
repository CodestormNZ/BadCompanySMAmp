var ampView = require('ampersand-view');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.pdf,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.SteamId': '[data-hook~=steamid]',
    'model.IsOnlineText': '[data-hook~=isonline]',
    'model.LastOnlineLocal': '[data-hook~=lastonline]',
    'model.LastWriteLocal': '[data-hook~=lastwrite]',
    'model.LastLogPos': '[data-hook~=lastpos]'
  }
});
