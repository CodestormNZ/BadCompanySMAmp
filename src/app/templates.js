(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        if (typeof root === 'undefined' || root !== Object(root)) {
            throw new Error('templatizer: window does not exist or is not an object');
        }
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function n(n){return null!=n&&""!==n}function t(e){return(Array.isArray(e)?e.map(t):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(n).join(" ")}function e(n){return i[n]||n}function r(n){var t=String(n).replace(o,e);return t===""+n?n:t}var a={};a.merge=function t(e,r){if(1===arguments.length){for(var a=e[0],i=1;i<e.length;i++)a=t(a,e[i]);return a}var o=e.class,s=r.class;(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),e.class=o.concat(s).filter(n));for(var f in r)"class"!=f&&(e[f]=r[f]);return e},a.joinClasses=t,a.cls=function(n,e){for(var r=[],i=0;i<n.length;i++)e&&e[i]?r.push(a.escape(t([n[i]]))):r.push(t(n[i]));var o=t(r);return o.length?' class="'+o+'"':""},a.style=function(n){return n&&"object"==typeof n?Object.keys(n).map(function(t){return t+":"+n[t]}).join(";"):n},a.attr=function(n,t,e,r){return"style"===n&&(t=a.style(t)),"boolean"==typeof t||null==t?t?" "+(r?n:n+'="'+n+'"'):"":0==n.indexOf("data")&&"string"!=typeof t?(-1!==JSON.stringify(t).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+n+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):e?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+a.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+t+'"')},a.attrs=function(n,e){var r=[],i=Object.keys(n);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],f=n[s];"class"==s?(f=t(f))&&r.push(" "+s+'="'+f+'"'):r.push(a.attr(s,f,!1,e))}return r.join("")};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;return a.escape=r,a.rethrow=function n(t,e,r,a){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||a))throw t.message+=" on line "+r,t;try{a=a||require("fs").readFileSync(e,"utf8")}catch(e){n(t,null,r)}var i=3,o=a.split("\n"),s=Math.max(r-i,0),f=Math.min(o.length,r+i),i=o.slice(s,f).map(function(n,t){var e=t+s+1;return(e==r?"  > ":"    ")+e+"| "+n}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+i+"\n\n"+t.message,t},a.DebugItem=function(n,t){this.lineno=n,this.filename=t},a}(); 

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};
    templatizer["includes"]["gameobject"] = {};
    templatizer["pages"]["gameobjects"] = {};
    templatizer["includes"]["gameobject"]["subview"] = {};
    templatizer["pages"]["gameobjects"]["subviews"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/static/BCM.html?home" class="navbar-brand">Bad Company SM</a></div><ul class="nav navbar-nav"><li><a href="/static/BCM.html?console">Console</a></li><li><a href="/static/BCM.html?players/online">Players</a></li><li><a href="/static/BCM.html?entities/enemies">Entities</a></li><li><a href="/static/BCM.html?gameobjects">GameObjects</a></li><li><a href="/static/BCM.html?login">Login</a></li></ul></div></nav><nav data-hook="game-stats"></nav><div class="container-fluid"><div class="clearfix">   </div><main data-hook="page-container"></main><div class="clearfix">   </div><footer class="footer-main"><nav class="nav-footer cf"><div><a href="https://github.com/7days2mod/" target="_blank" class="nav-item external">7Days2Mod Home</a></div><div><a href="https://github.com/7days2mod/BadCompanySM" target="_blank" class="nav-item external">Bad Company SM</a></div><div><a href="https://7daystodie.com/forums/forum.php" target="_blank" class="nav-item external">Forums</a></div></nav></footer></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes\entity.jade compiled template
    templatizer["includes"]["entity"] = function tmpl_includes_entity() {
        return '<div class="entity"><div class="entity-details"><div><div style="vertical-align:bottom" class="div-inline"><a data-hook="name" class="name-link"> </a></div><div class="div-inline pad-left-10"><span class="entityid">&#40;<a data-hook="entityid" title="click to copy to clipboard" class="hoverlink"></a>&#41;</span></div><div style="vertical-align:bottom;height: 16px;" class="div-inline pad-left-10"><div style="font-size:10px"><span class="stat-health pad-left-10">H:</span><span data-hook="health"></span><span>/</span><span data-hook="maxhealth"></span></div><div class="stat-bar bar-bg"><div data-hook="health-bar" class="stat-bar bar-health"></div></div></div><div style="vertical-align:bottom" class="div-inline pad-left-10"><span class="position"><a data-hook="copypos" title="click to copy to clipboard" class="hoverlink">&#64;</a><span>&#32;</span><span data-hook="position"></span><span style="color:#428bca;">&#32;&#32;&#8635;&#32;</span><span data-hook="rotangle"></span><span>&#0176;</span><span style="color:#428bca;">&#32;&#32;&#8737;&#32;</span><span data-hook="viewangle"></span></span></div><div style="vertical-align:bottom" class="div-inline pad-left-5"><span data-hook="isalive" class="life-symbol"></span></div></div></div></div>';
    };

    // includes\formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes\gameobject\archetype.jade compiled template
    templatizer["includes"]["gameobject"]["archetype"] = function tmpl_includes_gameobject_archetype() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="type"></td><td data-hook="ismale"></td><td data-hook="haircolor"></td><td data-hook="eyecolor"></td><td data-hook="haircolor"></td></tr>';
    };

    // includes\gameobject\biome.jade compiled template
    templatizer["includes"]["gameobject"]["biome"] = function tmpl_includes_gameobject_biome() {
        return '<tr><td style="padding: 3px;"><a data-hook="id"></a></td><td data-hook="name"></td></tr>';
    };

    // includes\gameobject\biomespawn.jade compiled template
    templatizer["includes"]["gameobject"]["biomespawn"] = function tmpl_includes_gameobject_biomespawn() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="biomespawners"></td></tr>';
    };

    // includes\gameobject\block.jade compiled template
    templatizer["includes"]["gameobject"]["block"] = function tmpl_includes_gameobject_block() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="name"></td><td data-hook="local"></td><td data-hook="material"></td><td data-hook="stacknumber"></td></tr>';
    };

    // includes\gameobject\buff.jade compiled template
    templatizer["includes"]["gameobject"]["buff"] = function tmpl_includes_gameobject_buff() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="name"></td><td data-hook="icon"></td><td data-hook="duration"></td><td data-hook="durmode"></td><td data-hook="stackmode"></td><td data-hook="stackmax"></td><td data-hook="actions"></td><td data-hook="debuffactions"></td><td data-hook="buffconditions"></td><td data-hook="debuffconditions"></td><td data-hook="modifiers"></td><td data-hook="requires"></td><td data-hook="debuffbuff"></td><td data-hook="debuffbuffchance"></td><td data-hook="expirybuff"></td><td data-hook="expirybuffchance"></td><td data-hook="description"></td><td data-hook="tooltip"></td><td data-hook="descriptor"></td><td data-hook="smell"></td><td data-hook="castsound"></td><td data-hook="debuffsound"></td><td data-hook="expiredsound"></td><td data-hook="critonly"></td><td data-hook="ffcheck"></td><td data-hook="hitmasks"></td><td data-hook="mutex"></td><td data-hook="cures"></td><td data-hook="causes"></td></tr>';
    };

    // includes\gameobject\entityclass.jade compiled template
    templatizer["includes"]["gameobject"]["entityclass"] = function tmpl_includes_gameobject_entityclass() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="class"></td><td data-hook="archetype"></td><td data-hook="model"></td><td data-hook="maxhealth"></td><td data-hook="experience"></td><td data-hook="deadhp"></td><td data-hook="lootondead"></td><td data-hook="lootalive"></td><td data-hook="buffs"></td><td data-hook="signtrange"></td><td data-hook="physics"></td><td data-hook="ismale"></td><td data-hook="isenemy"></td><td data-hook="corpseid"></td><td data-hook="corpsechance"></td><td data-hook="userinst"></td></tr>';
    };

    // includes\gameobject\entitygroup.jade compiled template
    templatizer["includes"]["gameobject"]["entitygroup"] = function tmpl_includes_gameobject_entitygroup() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="entityspawns" class="font-07em"></td></tr>';
    };

    // includes\gameobject\item.jade compiled template
    templatizer["includes"]["gameobject"]["item"] = function tmpl_includes_gameobject_item() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="name"></td><td data-hook="local"></td><td data-hook="material"></td><td data-hook="stacknumber"></td></tr>';
    };

    // includes\gameobject\itemclass.jade compiled template
    templatizer["includes"]["gameobject"]["itemclass"] = function tmpl_includes_gameobject_itemclass() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="name"></td><td data-hook="local"></td><td data-hook="material"></td><td data-hook="stacknumber"></td></tr>';
    };

    // includes\gameobject\lootco.jade compiled template
    templatizer["includes"]["gameobject"]["lootco"] = function tmpl_includes_gameobject_lootco() {
        return '<tr><td style="padding: 3px;"><a data-hook="id"></a></td><td data-hook="name"></td></tr>';
    };

    // includes\gameobject\lootgr.jade compiled template
    templatizer["includes"]["gameobject"]["lootgr"] = function tmpl_includes_gameobject_lootgr() {
        return '<tr><td style="padding: 3px;"><a data-hook="id"></a></td><td data-hook="name"></td></tr>';
    };

    // includes\gameobject\lootpt.jade compiled template
    templatizer["includes"]["gameobject"]["lootpt"] = function tmpl_includes_gameobject_lootpt() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="templates"></td></tr>';
    };

    // includes\gameobject\lootqt.jade compiled template
    templatizer["includes"]["gameobject"]["lootqt"] = function tmpl_includes_gameobject_lootqt() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="templates"></td></tr>';
    };

    // includes\gameobject\material.jade compiled template
    templatizer["includes"]["gameobject"]["material"] = function tmpl_includes_gameobject_material() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="experience"></td><td data-hook="maxdamage"></td><td data-hook="movementfactor"></td><td data-hook="fertilelevel"></td><td data-hook="hardness"></td><td data-hook="lightopacity"></td><td data-hook="mass"></td><td data-hook="stabilityglue"></td><td data-hook="stabilitysupport"></td><td data-hook="damagecategory"></td><td data-hook="forgecategory"></td><td data-hook="particlecategory"></td><td data-hook="destroycategory"></td><td data-hook="surfacecategory"></td><td data-hook="stepsound"></td><td data-hook="resistance"></td><td data-hook="iscollidable"></td><td data-hook="isgroundCover"></td><td data-hook="isliquid"></td><td data-hook="isplant"></td></tr>';
    };

    // includes\gameobject\prefab.jade compiled template
    templatizer["includes"]["gameobject"]["prefab"] = function tmpl_includes_gameobject_prefab() {
        return '<tr><td><a data-hook="name"></a></td></tr>';
    };

    // includes\gameobject\quest.jade compiled template
    templatizer["includes"]["gameobject"]["quest"] = function tmpl_includes_gameobject_quest() {
        return '<tr><td><a data-hook="id"></a></td><td data-hook="name"></td><td data-hook="group"></td><td data-hook="subtitle"></td><td data-hook="difficulty"></td><td data-hook="icon"></td><td data-hook="repeatable"></td><td data-hook="category"></td><td data-hook="actions"></td><td data-hook="requirements"></td><td data-hook="objectives"></td><td data-hook="rewards"></td></tr>';
    };

    // includes\gameobject\recipe.jade compiled template
    templatizer["includes"]["gameobject"]["recipe"] = function tmpl_includes_gameobject_recipe() {
        return '<tr><td><a data-hook="type"></a></td><td data-hook="count"></td><td data-hook="craftarea"></td><td data-hook="craftexp"></td><td data-hook="crafttime"></td><td data-hook="crafttool"></td><td data-hook="ingredients"></td><td data-hook="skillgroup"></td><td data-hook="ismatbased"></td><td data-hook="iswildforge"></td></tr>';
    };

    // includes\gameobject\rwg.jade compiled template
    templatizer["includes"]["gameobject"]["rwg"] = function tmpl_includes_gameobject_rwg() {
        return '<tr><td style="padding: 3px;"><a data-hook="id"></a></td><td data-hook="name"></td></tr>';
    };

    // includes\gameobject\skill.jade compiled template
    templatizer["includes"]["gameobject"]["skill"] = function tmpl_includes_gameobject_skill() {
        return '<tr><td><a data-hook="name"></a></td><td data-hook="localized"></td><td data-hook="expgainmult"></td><td data-hook="group"></td><td data-hook="exptonext"></td><td data-hook="level"></td><td data-hook="islocked"></td><td data-hook="titlekey"></td><td data-hook="desckey"></td><td data-hook="icon"></td><td data-hook="maxlevel"></td><td data-hook="baseexpto"></td><td data-hook="expmult"></td><td data-hook="ispassive"></td><td data-hook="isperk"></td><td data-hook="iscrafting"></td><td data-hook="alwaysfire"></td><td data-hook="costper"></td><td data-hook="costmult"></td><td data-hook="skillreqs"></td><td data-hook="lockeditems"></td><td data-hook="effects"></td></tr>';
    };

    // includes\gameobject\spawner.jade compiled template
    templatizer["includes"]["gameobject"]["spawner"] = function tmpl_includes_gameobject_spawner() {
        return '<tr><td style="padding: 3px;"><a data-hook="key"></a></td><td data-hook="dynamic"></td><td data-hook="wrapdays"></td><td data-hook="clampdays"></td><td data-hook="spawns"></td></tr>';
    };

    // includes\gameobject\subview\biomespawner.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["biomespawner"] = function tmpl_includes_gameobject_subview_biomespawner() {
        return '<tr class="font-07em"><td data-hook="group"></td><td data-hook="time"></td><td data-hook="max"></td><td data-hook="delay"></td><td data-hook="dead"></td></tr>';
    };

    // includes\gameobject\subview\buffcondition.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["buffcondition"] = function tmpl_includes_gameobject_subview_buffcondition() {
        return '<tr class="font-07em"><td data-hook="counter"></td><td data-hook="type"></td><td data-hook="value"></td></tr>';
    };

    // includes\gameobject\subview\buffmodifier.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["buffmodifier"] = function tmpl_includes_gameobject_subview_buffmodifier() {
        return '<tr class="font-07em"><td data-hook="uid"></td><td data-hook="stat"></td><td data-hook="type"></td><td><span data-hook="valend"></span><span> / </span><span data-hook="freq"></span><span>s - </span><span data-hook="fdur"></span><span>s</span></td><td data-hook="target"></td></tr>';
    };

    // includes\gameobject\subview\entityspawn.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["entityspawn"] = function tmpl_includes_gameobject_subview_entityspawn() {
        return '<tr class="font-07em"><td data-hook="entityclass"></td><td data-hook="prob"></td><td data-hook="reqmin"></td><td data-hook="reqmax"></td></tr>';
    };

    // includes\gameobject\subview\idvaluepair.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["idvaluepair"] = function tmpl_includes_gameobject_subview_idvaluepair() {
        return '<tr class="font-07em"><td data-hook="type"></td><td data-hook="id"></td><td data-hook="value"></td></tr>';
    };

    // includes\gameobject\subview\ingredient.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["ingredient"] = function tmpl_includes_gameobject_subview_ingredient() {
        return '<tr class="font-07em"><td class="col-lg-2"><span data-hook="count"></span><span>x </span></td><td data-hook="type" class="col-lg-10"></td></tr>';
    };

    // includes\gameobject\subview\probtemplate.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["probtemplate"] = function tmpl_includes_gameobject_subview_probtemplate() {
        return '<tr class="font-07em"><td><span>Level: </span><span data-hook="minlevel"></span><span> - </span><span data-hook="maxlevel"></span></td><td data-hook="prob"></td></tr>';
    };

    // includes\gameobject\subview\qualtemplate.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["qualtemplate"] = function tmpl_includes_gameobject_subview_qualtemplate() {
        return '<tr class="font-07em"><td><span>Level: </span><span data-hook="minlevel"></span><span> - </span><span data-hook="maxlevel"></span></td><td><span>Default: </span><span data-hook="minqual"></span><span> - </span><span data-hook="maxqual"></span></td><td data-hook="items"></td></tr>';
    };

    // includes\gameobject\subview\qualtemplateitem.jade compiled template
    templatizer["includes"]["gameobject"]["subview"]["qualtemplateitem"] = function tmpl_includes_gameobject_subview_qualtemplateitem() {
        return '<tr><td data-hook="prob"></td><td><span>Qual: </span><span data-hook="minqual"></span><span> - </span><span data-hook="maxqual"></span></td></tr>';
    };

    // includes\gameobjectmenu.jade compiled template
    templatizer["includes"]["gameobjectmenu"] = function tmpl_includes_gameobjectmenu() {
        return '<ul class="nav navbar-nav font-08em col-md-12"><li class="col-md-2"><ul class="nav"><li><H3>Entities</H3></li><li class="submenu"><a href="/static/BCM.html?gameobjects/archetypes">Archetypes</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/entityclasses">Classes</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/entitygroups">Groups</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/biomespawning">BiomeSpawning</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/spawners">Spawners</a></li></ul></li><li class="col-md-2"><ul class="nav"><li><H3>Objects</H3></li><li class="submenu"><a href="/static/BCM.html?gameobjects/itemclasses">Item Classes</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/blocks">Blocks</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/items">Items</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/recipes">Recipes</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/materials">Materials</a></li></ul></li><li class="col-md-2"><ul class="nav"><li><H3>Loot</H3></li><li class="submenu"><a href="/static/BCM.html?gameobjects/lootcos">Containers</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/lootgrs">Groups</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/lootqts">Qual Templates</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/lootpts">Prob Templates</a></li></ul></li><li class="col-md-2"><ul class="nav"><li><H3>World</H3></li><li class="submenu"><a href="/static/BCM.html?gameobjects/biomes">Biomes</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/prefabs">Prefabs</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/rwgs">Rwg</a></li></ul></li><li class="col-md-2"><ul class="nav"><li><H3>Modifiers</H3></li><li class="submenu"><a href="/static/BCM.html?gameobjects/buffs">Buffs</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/skills">Skills</a></li><li class="submenu"><a href="/static/BCM.html?gameobjects/quests">Quests</a></li></ul></li></ul>';
    };

    // includes\gamestats.jade compiled template
    templatizer["includes"]["gamestats"] = function tmpl_includes_gamestats() {
        return '<div><div class="gamestat"><span class="stat">Day </span><span data-hook="game-day" class="val"> </span></div><div class="gamestat"><span class="stat">Time </span><span data-hook="game-time" class="val"> </span></div><div class="gamestat"><span class="stat">Uptime </span><span data-hook="game-ticks" class="val"> </span></div><div class="gamestat"><span class="stat">FPS </span><span data-hook="game-fps" class="val"> </span></div><div class="gamestat"><span class="stat">Clients </span><span data-hook="game-clients" class="val"> </span></div><div class="gamestat"><span class="stat">Entities </span><span data-hook="game-entities" class="val"> </span></div><div class="gamestat"><span class="stat">Players </span><span data-hook="game-players" class="val"> </span></div><div class="gamestat"><span class="stat">Enemies </span><span data-hook="game-enemies" class="val"> </span></div><div class="gamestat"><span class="stat">Observers </span><span data-hook="game-observers" class="val"> </span></div><div class="gamestat"><span class="stat">Chunks </span><span data-hook="game-chunks" class="val"> </span></div><div class="gamestat"><span class="stat">Objects </span><span data-hook="game-objects" class="val"> </span></div><div class="gamestat"><span class="stat">Items </span><span data-hook="game-items" class="val"> </span></div><div class="gamestat"><span class="stat">Heap </span><span data-hook="game-heap" class="val"> </span><span class="stat">Max </span><span data-hook="game-max" class="val"> </span><span class="stat">Rss </span><span data-hook="game-rss" class="val"> </span></div></div>';
    };

    // includes\pdf.jade compiled template
    templatizer["includes"]["pdf"] = function tmpl_includes_pdf() {
        return '<tr><td style="padding: 3px;"><a data-hook="name"></a></td><td data-hook="steamid"></td><td data-hook="isonline"></td><td data-hook="lastonline"></td><td data-hook="lastwrite"></td><td data-hook="lastpos"></td></tr>';
    };

    // includes\player.jade compiled template
    templatizer["includes"]["player"] = function tmpl_includes_player() {
        return '<div class="player"><div class="player-name"><div><div><a data-hook="name" class="name-link"> </a></div><div><span class="entityid">&#40;<a data-hook="entityid" title="click to copy to clipboard" class="hoverlink"></a>&#41;</span>&#32;<span class="steamid">&#40;<a data-hook="steamid" title="click to copy to clipboard" class="hoverlink"></a>&#41;</span></div></div></div><div class="player-details"><div><div class="div-inline"><div class="div-inline"><div><span class="stat-health pad-left-10">H:</span><span data-hook="health"></span><span>/</span><span data-hook="wellness"></span></div><div class="stat-bar bar-bg"><div data-hook="health-bar" class="stat-bar bar-health"></div></div></div><div class="div-inline"><div><span class="stat-stamina pad-left-10">S:</span><span data-hook="stamina"></span><span>/</span><span data-hook="wellness"></span></div><div class="stat-bar bar-bg"><div data-hook="stamina-bar" class="stat-bar bar-stamina"></div></div></div></div><div class="div-inline"><div class="div-inline"><div class="font-08em"><span class="stat-food pad-left-5">F:</span><span data-hook="food"></span><span>/100</span></div><div class="stat-bar bar-bg bg-60"><div data-hook="food-bar" class="stat-bar bar-food"></div></div></div><div class="div-inline"><div class="font-08em"><span class="stat-drink pad-left-5">D:</span><span data-hook="drink"></span><span>/100</span></div><div class="stat-bar bar-bg bg-60"><div data-hook="drink-bar" class="stat-bar bar-drink"></div></div></div></div></div><div class="div-inline"><div><span class="stat-exp pad-left-10">Lvl: <span data-hook="level"> </span><span class="level-progress"> &#40;+<span data-hook="progress"></span>&#37;&#41;</span></span><span class="level-progress pad-left-10">XP:<span data-hook="expprogress"></span></span></div><div class="stat-bar bar-bg bg-320"><div data-hook="exp-progress-bar" class="stat-bar bar-exp"></div></div></div><div><span class="position"><a data-hook="copypos" title="click to copy to clipboard" class="hoverlink">&#64;</a><span>&#32;</span><span data-hook="position"></span><span style="color:#428bca;">&#32;&#32;&#8635;&#32;</span><span data-hook="rotangle"></span><span>&#0176;</span><span style="color:#428bca;">&#32;&#32;&#8737;&#32;</span><span data-hook="viewangle"></span></span><span class="coretemp pad-left-5"><span style="color:#428bca;">t&#32;</span><span data-hook="coretemp"></span><span>&#8457;</span></span></div><div><span data-hook="isalive" class="life-symbol pad-left-5"></span><span class="life-span pad-left-5"><span data-hook="life-time"></span></span><span class="font-08em"><span style="color:#428bca;" class="pad-left-5">Play: </span><span data-hook="playtime"></span><span style="color:#428bca;" class="pad-left-5">Sess: </span><span data-hook="session"></span></span></div><div class="font-08em"><span style="color:#428bca;">GS: </span><span data-hook="gamestage"></span><span style="color:#428bca;" class="pad-left-5">Score: </span><span data-hook="score"></span><span style="color:#428bca;" class="pad-left-5">PK: </span><span data-hook="pkill"></span><span style="color:#428bca;" class="pad-left-5">ZK: </span><span data-hook="zkill"></span><span style="color:#428bca;" class="pad-left-5">Dth: </span><span data-hook="deaths"></span></div><div class="font-08em"><span style="color:#428bca;">Craft: </span><span data-hook="crafted"></span><span style="color:#428bca;" class="pad-left-5">Dist: </span><span data-hook="walked"></span><span style="color:#428bca;" class="pad-left-5">Speed: </span><span data-hook="speed"></span></div><div class="font-08em"><span style="color:#428bca;">Ip: </span><a data-hook="ip" title="click to copy to clipboard" class="hoverlink"></a><span style="color:#428bca;" class="pad-left-5">Ping: </span><span data-hook="ping"></span></div></div></div>';
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push("<!DOCTYPE html><html><head><script" + jade.attr("src", "./" + locals.jsFileName, true, true) + '><\/script><link rel="stylesheet"' + jade.attr("href", "./" + locals.cssFileName, true, true) + "></head></html>");
        return buf.join("");
    };

    // pages\console.jade compiled template
    templatizer["pages"]["console"] = function tmpl_pages_console() {
        return '<section class="page console"><h2 class="section-title">Server Console</h2><form data-hook="console-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form><div data-hook="command"></div><br/><pre data-hook="response"></pre></section>';
    };

    // pages\entities.jade compiled template
    templatizer["pages"]["entities"] = function tmpl_pages_entities() {
        return '<section class="page"><h2 class="section-title">Entities</h2><div data-hook="entity-list"></div><div></div></section>';
    };

    // pages\gameobjects\archetypes.jade compiled template
    templatizer["pages"]["gameobjects"]["archetypes"] = function tmpl_pages_gameobjects_archetypes() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Archetypes</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Type</span></th><th><span>IsMale</span></th><th><span>HairColor</span></th><th><span>EyeColor</span></th><th><span>SkinColor</span></th></tr></thead><tbody data-hook="archetype-list"></tbody></table></section>';
    };

    // pages\gameobjects\biomes.jade compiled template
    templatizer["pages"]["gameobjects"]["biomes"] = function tmpl_pages_gameobjects_biomes() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Biomes</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th></tr></thead><tbody data-hook="biome-list"></tbody></table></section>';
    };

    // pages\gameobjects\biomespawning.jade compiled template
    templatizer["pages"]["gameobjects"]["biomespawning"] = function tmpl_pages_gameobjects_biomespawning() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Biome Spawning</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Spawns</span></th></tr></thead><tbody data-hook="biomespawn-list"></tbody></table></section>';
    };

    // pages\gameobjects\blocks.jade compiled template
    templatizer["pages"]["gameobjects"]["blocks"] = function tmpl_pages_gameobjects_blocks() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Blocks</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th><th><span>Local</span></th><th><span>Material</span></th><th><span>StackNumber</span></th></tr></thead><tbody data-hook="block-list"></tbody></table></section>';
    };

    // pages\gameobjects\buffs.jade compiled template
    templatizer["pages"]["gameobjects"]["buffs"] = function tmpl_pages_gameobjects_buffs() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Buffs</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th><th><span>Icon</span></th><th><span>Duration</span></th><th><span>DurMode</span></th><th><span>StackMode</span></th><th><span>StackMax</span></th><th><span>Actions</span></th><th><span>DebuffActions</span></th><th><span>BuffConditions</span></th><th><span>DebuffConditions</span></th><th><span>Modifiers</span></th><th><span>Requires</span></th><th><span>DebuffBuff</span></th><th><span>DebuffBuffChance</span></th><th><span>ExpiryBuff</span></th><th><span>ExpiryBuffChance</span></th><th><span>Description</span></th><th><span>Tooltip</span></th><th><span>Descriptor</span></th><th><span>Smell</span></th><th><span>CastSound</span></th><th><span>DebuffSound</span></th><th><span>ExpiredSound</span></th><th><span>CritOnly</span></th><th><span>FFCheck</span></th><th><span>HitMasks</span></th><th><span>Mutex</span></th><th><span>Cures</span></th><th><span>Causes</span></th></tr></thead><tbody data-hook="buff-list"></tbody></table></section>';
    };

    // pages\gameobjects\entityclasses.jade compiled template
    templatizer["pages"]["gameobjects"]["entityclasses"] = function tmpl_pages_gameobjects_entityclasses() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Entity Classes</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Class</span></th><th><span>Archetype</span></th><th><span>Model</span></th><th><span>MaxHealth</span></th><th><span>Experience</span></th><th><span>DeadHP</span></th><th><span>LootOnDeath</span></th><th><span>LootAlive</span></th><th><span>Buffs</span></th><th><span>SightRange</span></th><th><span>Physics</span></th><th><span>IsMale</span></th><th><span>IsEnemy</span></th><th><span>CorpseId</span></th><th><span>CorpseChance</span></th><th><span>UserInst</span></th></tr></thead><tbody data-hook="entityclass-list"></tbody></table></section>';
    };

    // pages\gameobjects\entitygroups.jade compiled template
    templatizer["pages"]["gameobjects"]["entitygroups"] = function tmpl_pages_gameobjects_entitygroups() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Entity Groups</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Entities</span></th></tr></thead><tbody data-hook="entitygroup-list"></tbody></table></section>';
    };

    // pages\gameobjects\gameobjects.jade compiled template
    templatizer["pages"]["gameobjects"]["gameobjects"] = function tmpl_pages_gameobjects_gameobjects() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Game Objects</h2><div>Select from the sub menu to see the table view for each game object type</div></section>';
    };

    // pages\gameobjects\itemclasses.jade compiled template
    templatizer["pages"]["gameobjects"]["itemclasses"] = function tmpl_pages_gameobjects_itemclasses() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Item Classes</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th><th><span>Local</span></th><th><span>Material</span></th><th><span>StackNumber</span></th></tr></thead><tbody data-hook="itemclass-list"></tbody></table></section>';
    };

    // pages\gameobjects\items.jade compiled template
    templatizer["pages"]["gameobjects"]["items"] = function tmpl_pages_gameobjects_items() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Items</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th><th><span>Local</span></th><th><span>Material</span></th><th><span>StackNumber</span></th></tr></thead><tbody data-hook="item-list"></tbody></table></section>';
    };

    // pages\gameobjects\lootcos.jade compiled template
    templatizer["pages"]["gameobjects"]["lootcos"] = function tmpl_pages_gameobjects_lootcos() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Loot Containers</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th></tr></thead><tbody data-hook="lootco-list"></tbody></table></section>';
    };

    // pages\gameobjects\lootgrs.jade compiled template
    templatizer["pages"]["gameobjects"]["lootgrs"] = function tmpl_pages_gameobjects_lootgrs() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Loot Groups</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th></tr></thead><tbody data-hook="lootgr-list"></tbody></table></section>';
    };

    // pages\gameobjects\lootpts.jade compiled template
    templatizer["pages"]["gameobjects"]["lootpts"] = function tmpl_pages_gameobjects_lootpts() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Loot Probability Templates</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Templates</span></th></tr></thead><tbody data-hook="lootpt-list"></tbody></table></section>';
    };

    // pages\gameobjects\lootqts.jade compiled template
    templatizer["pages"]["gameobjects"]["lootqts"] = function tmpl_pages_gameobjects_lootqts() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Loot Quality Templates</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Templates</span></th></tr></thead><tbody data-hook="lootqt-list"></tbody></table></section>';
    };

    // pages\gameobjects\materials.jade compiled template
    templatizer["pages"]["gameobjects"]["materials"] = function tmpl_pages_gameobjects_materials() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Materials</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Experience</span></th><th><span>MaxDamage</span></th><th><span>MovementFactor</span></th><th><span>FertileLevel</span></th><th><span>Hardness</span></th><th><span>LightOpacity</span></th><th><span>Mass</span></th><th><span>StabilityGlue</span></th><th><span>StabilitySupport</span></th><th><span>DamageCategory</span></th><th><span>ForgeCategory</span></th><th><span>ParticleCategory</span></th><th><span>DestroyCategory</span></th><th><span>SurfaceCategory</span></th><th><span>StepSound</span></th><th><span>Resistance</span></th><th><span>IsCollidable</span></th><th><span>IsGroundCover</span></th><th><span>IsLiquid</span></th><th><span>IsPlant</span></th></tr></thead><tbody data-hook="material-list"></tbody></table></section>';
    };

    // pages\gameobjects\prefabs.jade compiled template
    templatizer["pages"]["gameobjects"]["prefabs"] = function tmpl_pages_gameobjects_prefabs() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Prefabs</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th></tr></thead><tbody data-hook="prefab-list"></tbody></table></section>';
    };

    // pages\gameobjects\quests.jade compiled template
    templatizer["pages"]["gameobjects"]["quests"] = function tmpl_pages_gameobjects_quests() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Quests</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th><th><span>Group</span></th><th><span>SubTitle</span></th><th><span>Difficulty</span></th><th><span>Icon</span></th><th><span>Repeatable</span></th><th><span>Category</span></th><th><span>Actions</span></th><th><span>Requirements</span></th><th><span>Objectives</span></th><th><span>Rewards</span></th></tr></thead><tbody data-hook="quest-list"></tbody></table></section>';
    };

    // pages\gameobjects\recipes.jade compiled template
    templatizer["pages"]["gameobjects"]["recipes"] = function tmpl_pages_gameobjects_recipes() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Recipes</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Type</span></th><th><span>Count</span></th><th><span>CraftArea</span></th><th><span>CraftExp</span></th><th><span>CraftTime</span></th><th><span>CraftTool</span></th><th><span>Ingredients</span></th><th><span>SkillGroup</span></th><th><span>IsMatBased</span></th><th><span>IsWildForge</span></th></tr></thead><tbody data-hook="recipe-list"></tbody></table></section>';
    };

    // pages\gameobjects\rwgs.jade compiled template
    templatizer["pages"]["gameobjects"]["rwgs"] = function tmpl_pages_gameobjects_rwgs() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">RWG</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Id</span></th><th><span>Name</span></th></tr></thead><tbody data-hook="rwg-list"></tbody></table></section>';
    };

    // pages\gameobjects\skills.jade compiled template
    templatizer["pages"]["gameobjects"]["skills"] = function tmpl_pages_gameobjects_skills() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Skills</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>Localized</span></th><th><span>ExpGainMult</span></th><th><span>Group</span></th><th><span>ExpToNext</span></th><th><span>Level</span></th><th><span>IsLocked</span></th><th><span>TitleKey</span></th><th><span>DescKey</span></th><th><span>Icon</span></th><th><span>MaxLevel</span></th><th><span>BaseExpTo</span></th><th><span>ExpMult</span></th><th><span>IsPassive</span></th><th><span>IsPerk</span></th><th><span>IsCrafting</span></th><th><span>AlwaysFire</span></th><th><span>CostPer</span></th><th><span>CostMult</span></th><th><span>SkillReqs</span></th><th><span>LockedItems</span></th><th><span>Effects</span></th></tr></thead><tbody data-hook="skill-list"></tbody></table></section>';
    };

    // pages\gameobjects\spawners.jade compiled template
    templatizer["pages"]["gameobjects"]["spawners"] = function tmpl_pages_gameobjects_spawners() {
        return '<section class="page"><div class="clearfix"><div data-hook="game-object-menu"></div></div><h2 class="section-title">Spawners</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Key</span></th><th><span>Dynamic</span></th><th><span>Wrap Days</span></th><th><span>Clamp Days</span></th><th><span>Unique Spawn Days</span></th></tr></thead><tbody data-hook="spawner-list"></tbody></table></section>';
    };

    // pages\gameobjects\subviews\biomespawners.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["biomespawners"] = function tmpl_pages_gameobjects_subviews_biomespawners() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed biomespawner-table"><tbody data-hook="biomespawner-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\buffconditions.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["buffconditions"] = function tmpl_pages_gameobjects_subviews_buffconditions() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed buffcondition-table"><tbody data-hook="buffcondition-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\buffmodifiers.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["buffmodifiers"] = function tmpl_pages_gameobjects_subviews_buffmodifiers() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed buffmodifier-table"><tbody data-hook="buffmodifier-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\entityspawns.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["entityspawns"] = function tmpl_pages_gameobjects_subviews_entityspawns() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="entityspawn-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\idvaluepairs.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["idvaluepairs"] = function tmpl_pages_gameobjects_subviews_idvaluepairs() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="idvaluepair-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\ingredients.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["ingredients"] = function tmpl_pages_gameobjects_subviews_ingredients() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="ingredient-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\probtemplates.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["probtemplates"] = function tmpl_pages_gameobjects_subviews_probtemplates() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="probtemplate-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\qualtemplateitems.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["qualtemplateitems"] = function tmpl_pages_gameobjects_subviews_qualtemplateitems() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="qualtemplateitem-list"></tbody></table></td>';
    };

    // pages\gameobjects\subviews\qualtemplates.jade compiled template
    templatizer["pages"]["gameobjects"]["subviews"]["qualtemplates"] = function tmpl_pages_gameobjects_subviews_qualtemplates() {
        return '<td style="padding:0;"><table style="margin-bottom: 0px;" class="table table-condensed ingredient-table"><tbody data-hook="qualtemplate-list"></tbody></table></td>';
    };

    // pages\home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page home"><h2 class="section-title">Bad Company Server Manager</h2><div>Welcome to Bad Company - Server Manager.</div><div>Documentation coming soon..</div></section>';
    };

    // pages\login.jade compiled template
    templatizer["pages"]["login"] = function tmpl_pages_login() {
        return '<section class="page login"><h2 class="section-title">Admin Token Credentials</h2><p data-hook="credentials"></p><form data-hook="login-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="login-button" type="submit" class="btn">Submit</button></div></form><button data-hook="clear-button" class="btn">Clear</button><br/><div><div>Steam Open ID</div><div><a data-hook="steam-login" href="/session/login" target="_blank"><img src="/static/img/steamlogin.png" title="Sign in through Steam"/></a></div><div><a data-hook="steam-logout" href="/session/logout" target="_blank">Logout</a></div></div></section>';
    };

    // pages\notimplemented.jade compiled template
    templatizer["pages"]["notimplemented"] = function tmpl_pages_notimplemented() {
        return '<section class="page home"><h2 class="section-title">Bad Company Server Manager</h2><div>Sorry, page not implemented...</div></section>';
    };

    // pages\playersAll.jade compiled template
    templatizer["pages"]["playersAll"] = function tmpl_pages_playersAll() {
        return '<section class="page"><h2 class="section-title">All Players</h2><a href="/static/BCM.html?players/online">Online Players</a><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>SteamId</span></th><th><span>Status</span></th><th><span class="text-right">Last Online</span></th><th><span class="text-right">Last Write</span></th><th><span class="text-right">Last Logout Pos</span></th></tr></thead><tbody data-hook="pdf-list"></tbody></table></section>';
    };

    // pages\playerShow.jade compiled template
    templatizer["pages"]["playerShow"] = function tmpl_pages_playerShow() {
        return '<section class="page view-player"><h2 data-hook="name"></h2><img data-hook="avatar" width="80" height="80"/><div class="buttons"><button data-hook="delete" class="btn">Delete</button></div></section>';
    };

    // pages\playersOnline.jade compiled template
    templatizer["pages"]["playersOnline"] = function tmpl_pages_playersOnline() {
        return '<section class="page"><h2 class="section-title">Online Players</h2><a href="/static/BCM.html?players/all">All Players</a><div data-hook="player-list"></div><div></div></section>';
    };

    return templatizer;
}));
