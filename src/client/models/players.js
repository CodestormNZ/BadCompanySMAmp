var Collection = require('ampersand-rest-collection');
var Player = require('./player');

//todo:dynamic url
module.exports = Collection.extend({
  model: Player,
  comparator: function (collection) {
    return (collection.get('EntityId'));
  },
  url: function () {
    var mode = 'online';
    //var mode = 'all';

    if (window.app.me.adminName != null && window.app.me.adminName !== '') {
      return '/api/executeconsolecommand?raw=true' + '&adminuser=' + window.app.me.adminName + '&admintoken=' + window.app.me.adminToken +
        '&command=bc-lp /1l /' + mode + ' /filter=0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,19,23,24,25,26,27,28,29,30,31,32,33,34,35';
    } else {
      //todo: steam login check

      return '/api/executeconsolecommand?raw=true&command=bc-lp /1l /' + mode + ' /filter=0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,19,23,24,25,26,27,28,29,30,31,32,33,34,35';
    }
  }
});
//'steamid,name,entityid,ip,ping,session,playtime,position,rotation,health,stamina,wellness,food,drink,coretemp,speed,isdead,level,progress,tonext,fornext,gamestage,score,pkill,zkill,deaths,walked,crafted,current,longest'
