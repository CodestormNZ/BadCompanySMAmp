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
    //LastOnline: 'date',
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
    StatBarWidth: {
      fn: function () {
        return 80;
      }
    },
    WalkedMeters: {
      deps: ['DistanceWalked'],
      fn: function () {
        return Math.floor(this.DistanceWalked) + 'm';
      }
    },
    PlayTimeSpan: {
      deps: ['TotalPlayTime'],
      fn: function () {
        return this.timespanFormat(this.TotalPlayTime);
      }
    },
    SessTimeSpan: {
      deps: ['SessionPlayTime'],
      fn: function () {
        return this.timespanFormat(this.SessionPlayTime);
      }
    },
    LifeTime: {
      deps: ['CurrentLife', 'LongestLife'],
      fn: function () {
        return this.timespanFormat(this.CurrentLife) + '/' + this.timespanFormat(this.LongestLife);
      }
    },
    HealthBar: {
      deps: ['Health', 'Wellness'],
      fn: function () {
        return `width:${this.Health / this.Wellness * 90}px`;
      }
    },
    StaminaBar: {
      deps: ['Stamina', 'Wellness'],
      fn: function () {
        return `width:${this.Stamina / this.Wellness * 90}px`;
      }
    },
    FoodBar: {
      deps: ['Food'],
      fn: function () {
        return `width:${this.Food / 100 * 60}px`;
      }
    },
    DrinkBar: {
      deps: ['Drink'],
      fn: function () {
        return `width:${this.Drink / 100 * 60}px`;
      }
    },
    ExpProgressBar: {
      deps: ['ExpToNextLevel', 'ExpForNextLevel'],
      fn: function () {
        return `width:${(this.ExpForNextLevel - this.ExpToNextLevel) / this.ExpForNextLevel * 335}px`;
      }
    },
    SpeedPercent: {
      deps: ['SpeedModifier'],
      fn: function () {
        return this.SpeedModifier * 100 + '%';
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
    IsAliveTitle: {
      deps: ['IsDead'],
      fn: function () {
        return this.IsDead ? "Dead" : "Alive";
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
        const rot = this.Rotation.split(' ');
        if (rot.length === 3) {
          const r = (+rot[1] % 360);
          return r < 0 ? 360 + r : r;
        } else {
          return '';
        }
      }
    },
    ViewAngle: {
      deps: ['Rotation'],
      fn: function () {
        const rot = this.Rotation.split(' ');
        if (rot.length === 3) {
          return rot[0];
        } else {
          return '';
        }
      }
    }
  },
  timespanFormat: function (timespan) {
    const totalSeconds = Math.round(timespan * 60, 0);
    const d = Math.floor(totalSeconds / (60 * 60 * 24));
    const h = Math.floor(totalSeconds / (60 * 60)) % 24;
    const m = Math.floor(totalSeconds / 60) % 60;
    const s = totalSeconds % 60;

    return (
      (d > 0 ? d + 'd ' : '') +
      (h > 0 ? h + 'h ' : '') +
      (m > 0 ? m + 'm ' : '') +
      s + 's'
    );
  }
});
