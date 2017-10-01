var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
  template: templates.includes.formInput()
});

module.exports = FormView.extend({
  fields: function () {
    return [
      new ExtendedInput({
        label: 'First Name',
        name: 'firstName',
        value: this.model && this.model.firstName,
        placeholder: 'First Name',
        parent: this
      })
    ];
  }
});
