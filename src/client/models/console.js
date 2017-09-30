var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    serverProtocol: ['string', true, 'http://'],
    serverIP: ['string', true, '192.168.145.240'],//location.hostname
    serverPort: ['string', true, '8082'],
    apiEndPoint: ['string', true, '/api/executeconsolecommand'],
    adminName: ['string', true, ''],
    adminToken: ['string', true, ''],
    command: ['string', true, 'help'],
    response: ['string', false, '']
  },
  url: function () {
    return this.urlEndPoint;
  },
  session: {
    selected: ['boolean', true, false]
  },
  derived: {
    urlEndPoint: {
      deps: ['adminToken', 'adminPassword', 'command'],
      fn: function () {
        return this.serverProtocol + this.serverIP + ':' + this.serverPort
          + this.apiEndPoint + '?adminuser=' + this.adminName + '&admintoken=' + this.adminToken + '&raw=true&'
          + 'command=' + this.command;
      }
    }
  }
});
