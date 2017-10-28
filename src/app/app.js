var app = require('ampersand-app');
var _ = require('lodash');
var config = require('clientconfig');
var domReady = require('domready');

var Router = require('./components/_core/router');
var Me = require('./components/_core/me');
var MainView = require('./components/_core/main-view');
var GameStats = require('./components/gamestats/gamestats');
var Players = require('./components/players/players');
var Pdfs = require('./components/players/pdfs');
var Entities = require('./components/entities/entities');

var Archetypes = require('./components/gameobjects/archetypes');
var Biomes = require('./components/gameobjects/biomes');
var BiomeSpawning = require('./components/gameobjects/biomespawning');
var Blocks = require('./components/gameobjects/blocks');
var Buffs = require('./components/gameobjects/buffs');
var EntityClasses = require('./components/gameobjects/entityclasses');
var EntityGroups = require('./components/gameobjects/entitygroups');
var ItemClasses = require('./components/gameobjects/itemclasses');
var Items = require('./components/gameobjects/items');
var LootContainers = require('./components/gameobjects/lootcos');
var LootGroups = require('./components/gameobjects/lootgrs');
var LootQualityTemplates = require('./components/gameobjects/lootqts');
var LootProbabilityTemplates = require('./components/gameobjects/lootpts');
var Materials = require('./components/gameobjects/materials');
var Prefabs = require('./components/gameobjects/prefabs');
var Quests = require('./components/gameobjects/quests');
var Recipes = require('./components/gameobjects/recipes');
var Rwgs = require('./components/gameobjects/rwgs');
var Skills = require('./components/gameobjects/skills');
var Spawners = require('./components/gameobjects/spawners');

window.app = app;

app.extend({
  me: new Me().load(),
  players: new Players(),
  pdfs: new Pdfs(),
  entities: new Entities(),
  gamestats: new GameStats(),
  router: new Router(),
  archetypes: new Archetypes(),
  biomes: new Biomes(),
  biomespawning: new BiomeSpawning(),
  blocks: new Blocks(),
  buffs: new Buffs(),
  entityclasses: new EntityClasses(),
  entitygroups: new EntityGroups(),
  itemclasses: new ItemClasses(),
  items: new Items(),
  lootcos: new LootContainers(),
  lootgrs: new LootGroups(),
  lootqts: new LootQualityTemplates(),
  lootpts: new LootProbabilityTemplates(),
  materials: new Materials(),
  prefabs: new Prefabs(),
  quests: new Quests(),
  recipes: new Recipes(),
  rwgs: new Rwgs(),
  skills: new Skills(),
  spawners: new Spawners(),
  init: function () {
    this.mainView = new MainView({ model: this.me, el: document.body });
    this.router.history.start({ pushState: true });
    this.me.on('change', this.me.debouncedWriteToCache);
  },
  navigate: function (page) {
    var url = page.charAt(0) === '?' ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true });
  }
});

domReady(_.bind(app.init, app));
