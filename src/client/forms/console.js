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
        label: 'Command',
        name: 'command',
        value: this.model && this.model.command,
        placeholder: '',
        parent: this
      })
    ];
  }
});