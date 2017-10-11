var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
  props: {
    adminName: ['string', true, ''],
    adminToken: ['string', true, ''],
    command: ['string', true, 'help'],
    response: ['string', false, ''],
    serverProtocol: ['string', true, window.location.protocol + '//'],
    serverIP: ['string', true, window.location.hostname],
    serverPort: ['string', true, window.location.port],
    apiEndPoint: ['string', true, '/api/executeconsolecommand&raw=true']
  },
  url: function () { return this.urlEndPoint; },
  derived: {
    urlEndPoint: {
      deps: ['adminToken', 'adminPassword', 'command'],
      fn: function () {
        return this.serverProtocol + this.serverIP + ':' + this.serverPort + this.apiEndPoint +
          '&adminuser=' + this.adminName +
          '&admintoken=' + this.adminToken +
          'command=' + this.command;
      }
    }
  }
});
