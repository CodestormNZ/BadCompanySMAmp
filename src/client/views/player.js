//var _ = require("lodash");
var $ = require("jquery");
var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.includes.player,
  events: {
    'click [data-hook~=copypos]': 'clipboardPosition',
    'click [data-hook~=steamid]': 'clipboardSteamId',
    'click [data-hook~=entityid]': 'clipboardEntityId'
  },
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.SteamId': '[data-hook~=steamid]',
    'model.EntityId': '[data-hook~=entityid]',
    'model.IP': '[data-hook~=ip]',
    'model.Ping': '[data-hook~=ping]',
    'model.SessionPlayTime': '[data-hook~=session]',
    'model.TotalPlayTime': '[data-hook~=playtime]',
//    'model.LastOnlineLocal': '[data-hook~=online]',
    'model.Health': '[data-hook~=health]',
    'model.HealthBar': {
      type: 'attribute',
      hook: 'health-bar',
      name: 'style'
    },
    'model.Stamina': '[data-hook~=stamina]',
    'model.StaminaBar': {
      type: 'attribute',
      hook: 'stamina-bar',
      name: 'style'
    },
    'model.Wellness': '[data-hook~=wellness]',
    'model.Food': '[data-hook~=food]',
    'model.FoodBar': {
      type: 'attribute',
      hook: 'food-bar',
      name: 'style'
    },
    'model.Drink': '[data-hook~=drink]',
    'model.DrinkBar': {
      type: 'attribute',
      hook: 'drink-bar',
      name: 'style'
    },
    'model.CoreTemp': '[data-hook~=coretemp]',
    'model.SpeedPercent': '[data-hook~=speed]',
    'model.IsAlive': '[data-hook~=isalive]',
    'model.IsAliveColor': {
      type: 'attribute',
      hook: 'isalive',
      name: 'style'
    },
    'model.IsAliveTitle': {
      type: 'attribute',
      hook: 'isalive',
      name: 'title'
    },
    'model.Level': '[data-hook~=level]',
    'model.LevelProgress': '[data-hook~=progress]',
    'model.ExpToNextLevel': '[data-hook~=tonext]',
    'model.ExpForNextLevel': '[data-hook~=fornext]',

    'model.Gamestage': '[data-hook~=gamestage]',
    'model.Score': '[data-hook~=score]',
    'model.KilledPlayers': '[data-hook~=pkill]',
    'model.KilledZombies': '[data-hook~=zkill]',
    'model.Deaths': '[data-hook~=deaths]',
    'model.DistanceWalked': '[data-hook~=walked]',
    'model.ItemsCrafted': '[data-hook~=crafted]',
    'model.LifeTime': '[data-hook~=life-time]',

    'model.ExpProgressForLevel': '[data-hook~=expprogress]',
    'model.ExpProgress': '[data-hook~=exp-progress]',
    'model.ExpProgressBar': {
      type: 'attribute',
      hook: 'exp-progress-bar',
      name: 'style'
    },

    'model.Position': '[data-hook~=position]',
    'model.RotationAngle': '[data-hook~=rotangle]',
    'model.ViewAngle': '[data-hook~=viewangle]'

    //'model.viewUrl': {
    //  type: 'attribute',
    //  hook: 'name',
    //  name: 'href'
    //}
  },
  clipboardPosition: function () {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this.queryByHook('position')).text()).select();
    document.execCommand("copy");
    $temp.remove();
    return false;
  },
  clipboardEntityId: function () {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this.queryByHook('entityid')).text()).select();
    document.execCommand("copy");
    $temp.remove();
    return false;
  },
  clipboardSteamId: function () {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this.queryByHook('steamid')).text()).select();
    document.execCommand("copy");
    $temp.remove();
    return false;
  }
});
