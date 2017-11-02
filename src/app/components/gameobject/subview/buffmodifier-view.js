var ampView = require('ampersand-view');
var templates = require('../../../templates');

module.exports = ampView.extend({
  template: templates.includes.gameobject.subview.buffmodifier,
  bindings: {
    'model.Stat': '[data-hook~=stat]',
    'model.Type': '[data-hook~=type]',
    'model.Cat': '[data-hook~=cat]',
    'model.Max': '[data-hook~=max]',
    'model.IDur': '[data-hook~=idur]',
    'model.UID': '[data-hook~=uid]',
    'model.FDur': '[data-hook~=fdur]',
    'model.ValStart': '[data-hook~=valstart]',
    'model.ValEnd': '[data-hook~=valend]',
    'model.Freq': '[data-hook~=freq]',
    'model.ApplyTime': '[data-hook~=applytime]',
    'model.Target': '[data-hook~=target]'
  }
});
