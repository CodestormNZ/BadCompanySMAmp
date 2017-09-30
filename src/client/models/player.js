var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    entityid: 'any',
    Name: 'any',
    SteamId: 'any',
    EntityId: 'any',
    Ip: 'any',
    Ping: 'any',
    SessionPlayTime: 'any',
    TotalPlayTime: 'any',
    LastOnline: 'any',
    Position: 'any',
    Rotation: 'any',
    Health: 'any',
    Stamina: 'any',
    Wellness: 'any',
    Food: 'any',
    Drink: 'any',
    CoreTemp: 'any',
    SpeedModifier: 'any',
    IsDead: 'any',
    Level: 'any',
    LevelProgress: 'any',
    ExpToNextLevel: 'any',
    ExpForNextLevel: 'any',
    Gamestage: 'any',
    Score: 'any',
    KilledPlayers: 'any',
    KilledZombies: 'any',
    Deaths: 'any',
    DistanceWalked: 'any',
    ItemsCrafted: 'any',
    CurrentLife: 'any',
    LongestLife: 'any'
  },
  session: {
    selected: ['boolean', true, false]
  },
  derived: {
    viewUrl: {
      deps: ['SteamId'],
      fn: function () {
        return '/player/' + this.SteamId;
      }
    }
  }
});
