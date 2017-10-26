var app = require('ampersand-app');
var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props: {
    command: ['string', true, 'help'],
    response: ['string', false, ''],
    apiEndPoint: ['string', true, '/api/executeconsolecommand?raw=true']
  },
  url: function () { return this.urlEndPoint; },
  derived: {
    urlEndPoint: {
      deps: ['command'],
      fn: function () {
        return app.me.apiBaseUrl + this.apiEndPoint +
          (app.me.adminName != null && app.me.adminName !== '' ? '&adminuser=' + app.me.adminName : '') +
          (app.me.adminToken != null && app.me.adminToken !== '' ? '&admintoken=' + app.me.adminToken : '') +
          '&command=' + this.command;
      }
    }
  }
});
