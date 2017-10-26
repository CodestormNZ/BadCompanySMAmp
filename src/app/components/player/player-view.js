var ampView = require('ampersand-view');
var $ = require('jquery');
var templates = require('../../templates');

module.exports = ampView.extend({
  template: templates.includes.player,
  events:
  {
    'click [data-hook~=copypos]': 'clipboardPosition',
    'click [data-hook~=steamid]': 'clipboardSteamId',
    'click [data-hook~=ip]': 'clipboardIp',
    'click [data-hook~=entityid]': 'clipboardEntityId'
  },
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.SteamId': '[data-hook~=steamid]',
    'model.EntityId': '[data-hook~=entityid]',
    'model.IP': '[data-hook~=ip]',
    'model.Ping': '[data-hook~=ping]',
    'model.SessTimeSpan': '[data-hook~=session]',
    'model.PlayTimeSpan': '[data-hook~=playtime]',
    'model.Health': '[data-hook~=health]',
    'model.HealthBar': { type: 'attribute', hook: 'health-bar', name: 'style' },
    'model.Stamina': '[data-hook~=stamina]',
    'model.StaminaBar': { type: 'attribute', hook: 'stamina-bar', name: 'style' },
    'model.Wellness': '[data-hook~=wellness]',
    'model.Food': '[data-hook~=food]',
    'model.FoodBar': { type: 'attribute', hook: 'food-bar', name: 'style' },
    'model.Drink': '[data-hook~=drink]',
    'model.DrinkBar': { type: 'attribute', hook: 'drink-bar', name: 'style' },
    'model.CoreTemp': '[data-hook~=coretemp]',
    'model.SpeedPercent': '[data-hook~=speed]',
    'model.IsAlive': '[data-hook~=isalive]',
    'model.IsAliveStyle': { type: 'attribute', hook: 'isalive', name: 'style' },
    'model.IsAliveTitle': { type: 'attribute', hook: 'isalive', name: 'title' },
    'model.Level': '[data-hook~=level]',
    'model.LevelProgress': '[data-hook~=progress]',
    'model.ExpToNextLevel': '[data-hook~=tonext]',
    'model.ExpForNextLevel': '[data-hook~=fornext]',
    'model.Gamestage': '[data-hook~=gamestage]',
    'model.Score': '[data-hook~=score]',
    'model.KilledPlayers': '[data-hook~=pkill]',
    'model.KilledZombies': '[data-hook~=zkill]',
    'model.Deaths': '[data-hook~=deaths]',
    'model.WalkedMeters': '[data-hook~=walked]',
    'model.ItemsCrafted': '[data-hook~=crafted]',
    'model.LifeTime': '[data-hook~=life-time]',
    'model.ExpProgressForLevel': '[data-hook~=expprogress]',
    'model.ExpProgress': '[data-hook~=exp-progress]',
    'model.ExpProgressBar': { type: 'attribute', hook: 'exp-progress-bar', name: 'style' },
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
  },
  clipboardIp: function () {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(this.queryByHook('ip')).text()).select();
    document.execCommand('copy');
    $temp.remove();
    return false;
  },
  clipboardSteamId: function () {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(this.queryByHook('steamid')).text()).select();
    document.execCommand('copy');
    $temp.remove();
    return false;
  }
});
