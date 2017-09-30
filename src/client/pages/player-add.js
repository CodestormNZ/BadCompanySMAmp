var app = require('ampersand-app');
var PageView = require('./base');
var templates = require('../templates');
var PlayerForm = require('../forms/player');


module.exports = PageView.extend({
  pageTitle: 'add player',
  template: templates.pages.playerAdd,
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new PlayerForm({
          el: el,
          submitCallback: function (data) {
            app.players.create(data, {
              wait: true,
              success: function () {
                app.navigate('/players');
                app.players.fetch();
              }
            });
          }
        });
      }
    }
  }
});