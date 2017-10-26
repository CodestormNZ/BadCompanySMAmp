var formView = require('ampersand-form-view');
var inputView = require('ampersand-input-view');
var templates = require('../../templates');

var ExtendedInput = inputView.extend({
  template: templates.includes.formInput()
});

module.exports = formView.extend({
  fields: function () {
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
