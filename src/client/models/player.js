var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    Name: 'string',
    SteamId: 'string',
    EntityId: 'number',
    IP: 'string',
    Ping: 'string',
    SessionPlayTime: 'number',
    TotalPlayTime: 'number',
    LastOnline: 'date',
    Position: 'string',
    Rotation: 'string',
    Health: 'number',
    Stamina: 'number',
    Wellness: 'number',
    Food: 'number',
    Drink: 'number',
    CoreTemp: 'number',
    SpeedModifier: 'number',
    IsDead: 'boolean',
    Level: 'number',
    LevelProgress: 'number',
    ExpToNextLevel: 'number',
    ExpForNextLevel: 'number',
    Gamestage: 'number',
    Score: 'number',
    KilledPlayers: 'number',
    KilledZombies: 'number',
    Deaths: 'number',
    DistanceWalked: 'number',
    ItemsCrafted: 'number',
    CurrentLife: 'number',
    LongestLife: 'number'
  },
  derived: {
    LastOnlineLocal: {
      deps: ['LastOnline'],
      fn: function () {
        var d = this.LastOnline;
        if (d != null) {
          return d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes() +
            ":" +
            d.getSeconds();
        } else {
          return null;
        }
      }
    },
    IsAlive: {
      deps: ['IsDead'],
      fn: function () {
        return this.IsDead ? "\u2620" : "\u2625";
      }
    },
    IsAliveColor: {
      deps: ['IsDead'],
      fn: function () {
        return this.IsDead ? "color:rgb(255,0,0);" : "color:rgb(0,255,0);";
      }
    },
    ExpProgressForLevel: {
      deps: ['ExpToNextLevel', 'ExpForNextLevel'],
      fn: function () {
        return this.ExpForNextLevel - this.ExpToNextLevel + '/' + this.ExpForNextLevel;
      }
    },
    RotationAngle: {
      deps: ['Rotation'],
      fn: function () {
        var rot = this.Rotation.split(' ');
        if (rot.length === 3) {
          return (+rot[1] % 360);
        } else {
          return '';
        }
      }
    },
    ViewAngle: {
      deps: ['Rotation'],
      fn: function () {
        var rot = this.Rotation.split(' ');
        if (rot.length === 3) {
          return rot[0];
        } else {
          return '';
        }
      }
    },
    viewUrl: {
      deps: ['SteamId'],
      fn: function () {
        return '/player/' + this.SteamId;
      }
    }
  }
});
