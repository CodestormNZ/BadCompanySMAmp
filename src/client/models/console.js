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
    apiEndPoint: ['string', true, '/api/executeconsolecommand']
    //serverProtocol: ['string', true, 'http://'],
    //serverIP: ['string', true, '192.168.145.240'],
    //serverPort: ['string', true, '8082'],
  },
  url: function () {
    return this.urlEndPoint;
  },
  //session: {
  //  selected: ['boolean', true, false]
  //},
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
