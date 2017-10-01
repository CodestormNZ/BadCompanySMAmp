var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.includes.player,
  bindings: {
    'model.Name': '[data-hook~=name]',
    'model.SteamId': '[data-hook~=steamid]',
    'model.EntityId': '[data-hook~=entityid]',
    'model.IP': '[data-hook~=ip]',
    'model.Ping': '[data-hook~=ping]',
    'model.SessionPlayTime': '[data-hook~=session]',
    'model.TotalPlayTime': '[data-hook~=playtime]',
    'model.LastOnlineLocal': '[data-hook~=online]',
    'model.Health': '[data-hook~=health]',
    'model.Stamina': '[data-hook~=stamina]',
    'model.Wellness': '[data-hook~=wellness]',
    'model.Food': '[data-hook~=food]',
    'model.Drink': '[data-hook~=drink]',
    'model.CoreTemp': '[data-hook~=coretemp]',
    'model.SpeedModifier': '[data-hook~=speed]',
    'model.IsAlive': '[data-hook~=isalive]',
    'model.IsAliveColor': {
      type: 'attribute',
      hook: 'isalive',
      name: 'style'
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
    'model.CurrentLife': '[data-hook~=current]',
    'model.LongestLife': '[data-hook~=longest]',
    'model.ExpProgressForLevel': '[data-hook~=expprogress]',

    'model.Position': '[data-hook~=position]',
    'model.RotationAngle': '[data-hook~=rotangle]',
    'model.ViewAngle': '[data-hook~=viewangle]',

    'model.viewUrl': {
      type: 'attribute',
      hook: 'name',
      name: 'href'
    }
  }
});
