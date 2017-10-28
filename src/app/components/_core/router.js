var app = require('ampersand-app');
var router = require('ampersand-router');

var Home = require('../home/home-page');
var Console = require('../console/console-page');
var Login = require('../login/login-page');
var PlayersOnline = require('../players/players-online-page');
var PlayersAll = require('../players/players-all-page');
var Entities = require('../entities/entities-page');
var Gameobjects = require('../gameobjects/gameobjects-page');
var PlayerShow = require('../player/player-show-page');

var Archetypes = require('../gameobjects/archetypes-page');
var Biomes = require('../gameobjects/biomes-page');
var BiomeSpawning = require('../gameobjects/biomespawning-page');
var Blocks = require('../gameobjects/blocks-page');
var Buffs = require('../gameobjects/buffs-page');
var EntityClasses = require('../gameobjects/entityclasses-page');
var EntityGroups = require('../gameobjects/entitygroups-page');
var ItemClasses = require('../gameobjects/itemclasses-page');
var Items = require('../gameobjects/items-page');
var LootContainers = require('../gameobjects/lootcos-page');
var LootGroups = require('../gameobjects/lootgrs-page');
var LootQualityTemplates = require('../gameobjects/lootqts-page');
var LootProbabilityTemplates = require('../gameobjects/lootpts-page');
var Materials = require('../gameobjects/materials-page');
var Prefabs = require('../gameobjects/prefabs-page');
var Quests = require('../gameobjects/quests-page');
var Recipes = require('../gameobjects/recipes-page');
var Rwgs = require('../gameobjects/rwgs-page');
var Skills = require('../gameobjects/skills-page');
var Spawners = require('../gameobjects/spawners-page');


module.exports = router.extend({
  routes: {
    'static/BCM.html?home': 'home',
    'static/BCM.html?console': 'console',
    'static/BCM.html?players': 'playersOnline',
    'static/BCM.html?allplayers': 'playersAll',
    'static/BCM.html?entities': 'entities',
    'static/BCM.html?gameobjects': 'gameobjects',
    'static/BCM.html?gameobjects/archetypes': 'archetypes',
    'static/BCM.html?gameobjects/biomes': 'biomes',
    'static/BCM.html?gameobjects/biomespawning': 'biomespawning',
    'static/BCM.html?gameobjects/blocks': 'blocks',
    'static/BCM.html?gameobjects/buffs': 'buffs',
    'static/BCM.html?gameobjects/entityclasses': 'entityclasses',
    'static/BCM.html?gameobjects/entitygroups': 'entitygroups',
    'static/BCM.html?gameobjects/itemclasses': 'itemclasses',
    'static/BCM.html?gameobjects/items': 'items',
    'static/BCM.html?gameobjects/lootcos': 'lootcos',
    'static/BCM.html?gameobjects/lootgrs': 'lootgrs',
    'static/BCM.html?gameobjects/lootqts': 'lootqts',
    'static/BCM.html?gameobjects/lootpts': 'lootpts',
    'static/BCM.html?gameobjects/materials': 'materials',
    'static/BCM.html?gameobjects/prefabs': 'prefabs',
    'static/BCM.html?gameobjects/quests': 'quests',
    'static/BCM.html?gameobjects/recipes': 'recipes',
    'static/BCM.html?gameobjects/rwgs': 'rwgs',
    'static/BCM.html?gameobjects/skills': 'skills',
    'static/BCM.html?gameobjects/spawners': 'spawners',
    'static/BCM.html?player/:steamId': 'playerShow',//TODO
    'static/BCM.html?login': 'login',
    'static/BCM.html(*path)': 'catchAll'
  },
  home: function () { app.trigger('page', new Home({ model: app.me })); },
  playersOnline: function () { app.trigger('page', new PlayersOnline({ model: app.me, collection: app.players })); },
  playersAll: function () { app.trigger('page', new PlayersAll({ model: app.me, collection: app.pdfs })); },
  playerShow: function (id) { app.trigger('page', new PlayerShow({ id: id })); },
  entities: function () { app.trigger('page', new Entities({ model: app.me, collection: app.entities })); },

  gameobjects: function () { app.trigger('page', new Gameobjects({ model: app.me, collection: app.gameobjects })); },
  archetypes: function () { app.trigger('page', new Archetypes({ model: app.me, collection: app.archetypes })); },
  biomes: function () { app.trigger('page', new Biomes({ model: app.me, collection: app.biomes })); },
  biomespawning: function () { app.trigger('page', new BiomeSpawning({ model: app.me, collection: app.biomespawning })); },
  blocks: function () { app.trigger('page', new Blocks({ model: app.me, collection: app.blocks })); },
  buffs: function () { app.trigger('page', new Buffs({ model: app.me, collection: app.buffs })); },
  entityclasses: function () { app.trigger('page', new EntityClasses({ model: app.me, collection: app.entityclasses })); },
  entitygroups: function () { app.trigger('page', new EntityGroups({ model: app.me, collection: app.entitygroups })); },
  itemclasses: function () { app.trigger('page', new ItemClasses({ model: app.me, collection: app.itemclasses })); },
  items: function () { app.trigger('page', new Items({ model: app.me, collection: app.items })); },
  lootcos: function () { app.trigger('page', new LootContainers({ model: app.me, collection: app.lootcos })); },
  lootgrs: function () { app.trigger('page', new LootGroups({ model: app.me, collection: app.lootgrs })); },
  lootqts: function () { app.trigger('page', new LootQualityTemplates({ model: app.me, collection: app.lootqts })); },
  lootpts: function () { app.trigger('page', new LootProbabilityTemplates({ model: app.me, collection: app.lootpts })); },
  materials: function () { app.trigger('page', new Materials({ model: app.me, collection: app.materials })); },
  prefabs: function () { app.trigger('page', new Prefabs({ model: app.me, collection: app.prefabs })); },
  quests: function () { app.trigger('page', new Quests({ model: app.me, collection: app.quests })); },
  recipes: function () { app.trigger('page', new Recipes({ model: app.me, collection: app.recipes })); },
  rwgs: function () { app.trigger('page', new Rwgs({ model: app.me, collection: app.rwgs })); },
  skills: function () { app.trigger('page', new Skills({ model: app.me, collection: app.skills })); },
  spawners: function () { app.trigger('page', new Spawners({ model: app.me, collection: app.spawners })); },

  console: function () { app.trigger('page', new Console()); },
  login: function () { app.trigger('page', new Login()); },
  catchAll: function () { this.redirectTo('static/BCM.html?home'); }
});
