var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
  template: templates.includes.formInput()
});

module.exports = FormView.extend({
  fields: function() {
    return [
      new ExtendedInput({
        label: 'Admin Name',
        name: 'adminName',
        value: this.model && this.model.adminName,
        placeholder: 'Admin Name',
        parent: this
      }),
      new ExtendedInput({
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