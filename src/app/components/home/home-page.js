var baseView = require('../_core/base');
var templates = require('../../templates');

module.exports = baseView.extend({
  pageTitle: 'Home',
  template: templates.pages.home
});
