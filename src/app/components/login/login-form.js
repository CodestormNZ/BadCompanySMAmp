var formView = require('ampersand-form-view');
var inputView = require('ampersand-input-view');
var templates = require('../../templates');

var extendedInput = inputView.extend({
  template: templates.includes.formInput()
});

module.exports = formView.extend({
  fields: function () {
    return [
      new extendedInput({
        label: 'Admin Name',
        name: 'adminName',
        value: this.model && this.model.adminName,
        placeholder: 'Admin Name',
        parent: this
      }),
      new extendedInput({
        label: 'Admin Token',
        name: 'adminToken',
        type: 'password',
        value: this.model && this.model.adminToken,
        placeholder: 'Admin Token',
        parent: this
      })
    ];
  }
});
