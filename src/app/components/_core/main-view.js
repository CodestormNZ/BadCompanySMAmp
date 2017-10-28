var app = require('ampersand-app');
var setFavicon = require('favicon-setter');
var ampView = require('ampersand-view');
var ampDom = require('ampersand-dom');
var ViewSwitcher = require('ampersand-view-switcher');
var _ = require('lodash');
var domify = require('domify');
var GameStats = require('../gamestats/gamestats-view');
var localLinks = require('local-links');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.body,
  autoRender: true,
  initialize: function () { this.listenTo(app, 'page', this.handleNewPage); },
  events: { 'click a[href]': 'handleLinkClick' },
  render: function () {
    document.head.appendChild(domify(templates.head()));
    this.renderWithTemplate(this);
    this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'),
      {
        show: function (newView) {
          document.title = 'BCM Web UI - ' + _.result(newView, 'pageTitle');
          document.scrollTop = 0;
          ampDom.addClass(newView.el, 'active');
          app.currentPage = newView;
        },
        hide: function (oldView) {
          if (oldView != null && oldView.isPolling != null) {
            oldView.isPolling = false;
          }
        }
      });
    setFavicon('/favicon.ico');
    return this;
  },
  handleNewPage: function (view) {
    this.pageSwitcher.set(view);
    this.updateActiveNav();
  },
  handleLinkClick: function (e) {
    var localPath = localLinks.pathname(e);
    if (localPath) {
      e.preventDefault();
      app.navigate(localPath);
    }
  },
  updateActiveNav: function () {
    var path = window.location.search.slice(1);
    this.queryAll('.nav a[href]').forEach(function (aTag) {
      var aPath = aTag.search.slice(1);
      if ((!aPath && !path) || (aPath && path.indexOf(aPath) === 0)) {
        ampDom.addClass(aTag.parentNode, 'active');
      } else {
        ampDom.removeClass(aTag.parentNode, 'active');
      }
    });
  },
  subviews: {
    div: {
      hook: 'game-stats',
      waitFor: 'model',
      prepareView: function (el) {
        return new GameStats({
          el: el,
          parent: this,
          model: app.gamestats
        });
      }
    }
  }
});
