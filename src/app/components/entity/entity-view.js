var ampView = require('ampersand-view');
var $ = require('jquery');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.entity,
  events:
  {
    'click [data-hook~=copypos]': 'clipboardPosition',
    'click [data-hook~=entityid]': 'clipboardEntityId'
  },
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.EntityId': '[data-hook~=entityid]',
    'model.MaxHealth': '[data-hook~=maxhealth]',
    'model.Health': '[data-hook~=health]',
    'model.HealthBar': { type: 'attribute', hook: 'health-bar', name: 'style' },
    'model.IsAliveStr': '[data-hook~=isalive]',
    'model.IsAliveStyle': { type: 'attribute', hook: 'isalive', name: 'style' },
    'model.IsAliveTitle': { type: 'attribute', hook: 'isalive', name: 'title' },
    'model.Position': '[data-hook~=position]',
    'model.RotationAngle': '[data-hook~=rotangle]',
    'model.ViewAngle': '[data-hook~=viewangle]',
    'model.ShowUrl': { type: 'attribute', hook: 'name', name: 'href' }
  },
  clipboardPosition: function () {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(this.queryByHook('position')).text()).select();
    document.execCommand('copy');
    $temp.remove();
    return false;
  },
  clipboardEntityId: function () {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(this.queryByHook('entityid')).text()).select();
    document.execCommand('copy');
    $temp.remove();
    return false;
  }
});
