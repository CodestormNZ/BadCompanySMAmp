var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collection-demo');
var PersonAddPage = require('./pages/person-add');
var PersonEditPage = require('./pages/person-edit');
var PersonShowPage = require('./pages/person-show');


module.exports = Router.extend({
  routes: {
    '': 'home',
    'collections': 'collectionDemo',
    'person/add': 'personAdd',
    'person/:id': 'personView',
    'person/:id/edit': 'personEdit',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    app.trigger('page', new HomePage({
      model: app.me
    }));
  },

  collectionDemo: function () {
    app.trigger('page', new CollectionDemo({
      model: app.me,
      collection: app.people
    }));
  },

  personAdd: function () {
    app.trigger('page', new PersonAddPage());
  },

  personEdit: function (id) {
    app.trigger('page', new PersonEditPage({
      id: id
    }));
  },

  personView: function (id) {
    app.trigger('page', new PersonShowPage({
      id: id
    }));
  },

  catchAll: function () {
    this.redirectTo('');
  }
});
