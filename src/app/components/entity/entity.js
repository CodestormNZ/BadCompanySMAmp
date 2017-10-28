var ampModel = require('ampersand-model');

module.exports = ampModel.extend({
  props:
  {
    EntityId: 'number',
    Type: 'string',
    Name: 'string',
    Position: 'string',
    Rotation: 'string',
    Health: 'number',
    MaxHealth: 'number',
    IsAlive: 'boolean'
  },
  derived: {
    ShowUrl: { deps: ['EntityId'], fn: function () { return '/static/BCM.html?entity/' + this.EntityId; } },
    StatBarWidth: { fn: function () { return 80; } },
    HealthBar: { deps: ['Health', 'MaxHealth'], fn: function () { return 'width:' + (this.Health / this.MaxHealth * 90) + 'px'; } },
    IsAliveStr: { deps: ['IsAlive'], fn: function () { return this.IsAlive ? 'A' : 'D'; } },
    IsAliveStyle: { deps: ['IsAlive'], fn: function () { return this.IsAlive ? 'color:rgb(0,255,0);' : 'color:rgb(255,0,0);'; } },
    IsAliveTitle: { deps: ['IsAlive'], fn: function () { return this.IsAlive ? 'Alive' : 'Dead'; } },
    RotationAngle: {
      deps: ['Rotation'],
      fn: function () {
        var rot = this.Rotation.split(' ');
        if (rot.length === 3) {
          var r = (+rot[1] % 360);
          return r < 0 ? 360 + r : r;
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
    }
  }
});
