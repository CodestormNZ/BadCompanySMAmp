var Collection = require('ampersand-rest-collection');
var Player = require('./player');

//todo:dynamic url
module.exports = Collection.extend({
  model: Player,
  url: '/api/executeconsolecommand?adminuser=stompynz&admintoken=thisisatoken&raw=true&' +
    'command=bc-lp /all /filter=steamid,name,entityid,ip,ping,session,playtime,online,position,rotation,health,stamina,wellness,food,drink,coretemp,speed,isdead,level,progress,tonext,fornext,gamestage,score,pkill,zkill,deaths,walked,crafted,current,longest'
  //url: '/api/executeconsolecommand?adminuser=' + window.app.me.adminName + '&admintoken=' + window.app.me.adminToken + '&raw=true&' +
  //  'command=bc-lp /all /filter=steamid,name,entityid,ip,ping,session,playtime,online,position,rotation,health,stamina,wellness,food,drink,coretemp,speed,isdead,level,progress,tonext,fornext,gamestage,score,pkill,zkill,deaths,walked,crafted,current,longest'
});
