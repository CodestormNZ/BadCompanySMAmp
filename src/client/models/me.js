var AmpersandModel = require('ampersand-model');
var _ = require('lodash');
//import debounce from 'lodash.debounce';


module.exports = AmpersandModel.extend({
  type: 'user',
  props: {
    steamId: ['string'],
    userName: ['string', false, ''],
    adminName: ['string', true, ''],
    adminToken: ['string', true, ''],

    access_token: 'string',
    refresh_token: 'string',
    expires_in: 'number',
    token_created: 'date',
    profileID: 'string'
  },
  derived: {
    hasCredentials: {
      deps: ['adminUser', 'adminToken'],
      fn: function () {
        return this.adminName !== '' || this.adminToken !== '' ? `Token set for username ${this.adminName}` : "";
      }
    }
  },
  initialize() {
    this.debouncedWriteToCache = _.debounce(this.writeToCache, 250);
  },
  writeToCache() {
    const data = JSON.stringify(this);
    localStorage.setItem('me', data);
  },
  load() {
    const data = localStorage.getItem('me');
    if (data) {
      const loaded = JSON.parse(data);
      this.set(loaded);
    }
    return this;
  }
});
