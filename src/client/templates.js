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

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/static/BCM.html" class="navbar-brand">Bad Company SM UI</a></div><ul class="nav navbar-nav"><li><a href="/static/BCM.html/online">Online</a></li><li><a href="/static/BCM.html/players">All Players</a></li><li><a href="/static/BCM.html/console">Console</a></li><li><a href="/static/BCM.html/login">Login</a></li></ul></div></nav><div class="container"><main data-hook="page-container"></main><footer class="footer-main"><nav class="nav-footer cf"><div><a href="https://github.com/7days2mod/" target="_blank" class="nav-item external">7Days2Mod Home</a></div><div><a href="https://github.com/7days2mod/BadCompanySM" target="_blank" class="nav-item external">Bad Company SM</a></div><div><a href="https://7daystodie.com/forums/forum.php" target="_blank" class="nav-item external">Forums</a></div></nav></footer></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes\formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes\pdf.jade compiled template
    templatizer["includes"]["pdf"] = function tmpl_includes_pdf() {
        return '<tr><td style="padding: 3px;"><a data-hook="name"></a></td><td data-hook="steamid" style="padding: 3px;"></td><td data-hook="entityid" style="padding: 3px;"></td><td data-hook="isonline" style="padding: 3px;"></td><td data-hook="lastonline" style="padding: 3px;"></td><td data-hook="lastwrite" style="padding: 3px;"></td></tr>';
    };

    // includes\player.jade compiled template
    templatizer["includes"]["player"] = function tmpl_includes_player() {
        return '<div class="col-lg-12 player"><div class="col-xs-12 player-name"><a data-hook="name" class="name-link"> </a><span class="entityid"><span>&#40;</span><span data-hook="entityid"></span><span>&#41;</span></span><span class="position"><a data-hook="clipboard">&#64;</a><span>&#32;</span><span data-hook="position"></span><span style="color:#428bca;">&#32;&#32;&#8635;&#32;</span><span data-hook="rotangle"></span><span>&#0176;</span><span style="color:#428bca;">&#32;&#32;&#8737;&#32;</span><span data-hook="viewangle"></span></span><span data-hook="isalive" class="life-symbol"></span></div><div class="col-xs-12 player-details"><div class="col-lg-3 col-sm-6"><div><div class="col-xs-6"><span>Wellness: </span></div><div class="col-xs-6 text-right"><span data-hook="wellness"></span></div></div><div><div class="col-xs-6"><span>Health: </span></div><div class="col-xs-6 text-right"><span data-hook="health"></span></div></div><div><div class="col-xs-6"><span>Stamina: </span></div><div class="col-xs-6 text-right"><span data-hook="stamina"></span></div></div><div><div class="col-xs-6"><span>Food: </span></div><div class="col-xs-6 text-right"><span data-hook="food"></span></div></div><div><div class="col-xs-6"><span>Drink: </span></div><div class="col-xs-6 text-right"><span data-hook="drink"></span></div></div><div><div class="col-xs-6"><span>Coretemp: </span></div><div class="col-xs-6 text-right"><span data-hook="coretemp"></span></div></div><div><div class="col-xs-6"><span>Speed: </span></div><div class="col-xs-6 text-right"><span data-hook="speed"></span></div></div></div><div class="col-lg-3 col-sm-6"><div><div class="col-xs-6"><span>Gamestage: </span></div><div class="col-xs-6 text-right"><span data-hook="gamestage"></span></div></div><div><div class="col-xs-6"><span>Score: </span></div><div class="col-xs-6 text-right"><span data-hook="score"></span></div></div><div><div class="col-xs-6"><span>Player Kills: </span></div><div class="col-xs-6 text-right"><span data-hook="pkill"></span></div></div><div><div class="col-xs-6"><span>Zombie Kills: </span></div><div class="col-xs-6 text-right"><span data-hook="zkill"></span></div></div><div><div class="col-xs-6"><span>Deaths: </span></div><div class="col-xs-6 text-right"><span data-hook="deaths"></span></div></div><div><div class="col-xs-6"><span>Current Life: </span></div><div class="col-xs-6 text-right"><span data-hook="current"></span></div></div><div><div class="col-xs-6"><span>Longest Life: </span></div><div class="col-xs-6 text-right"><span data-hook="longest"></span></div></div></div><div class="col-lg-3 col-sm-6"><div><div class="col-xs-6"><span>Level: </span></div><div class="col-xs-6 text-right"><span data-hook="level"> </span><span>&#40;+</span><span data-hook="progress"></span><span>&#37;&#41;</span></div></div><div><div class="col-xs-6"><span>XP Progress: </span></div><div class="col-xs-6 text-right"><span data-hook="expprogress"></span></div></div><div><div class="col-xs-6"><span>Craft Count: </span></div><div class="col-xs-6 text-right"><span data-hook="crafted"></span></div></div><div><div class="col-xs-6"><span>Walked: </span></div><div class="col-xs-6 text-right"><span data-hook="walked"></span></div></div></div><div class="col-lg-3 col-sm-6"><div><div class="col-xs-4"><div>SteamId: </div></div><div class="col-xs-8 text-right"><div><span data-hook="steamid"></span></div></div></div><div><div class="col-xs-4"><div>Ip: </div></div><div class="col-xs-8 text-right"><div><span data-hook="ip"></span></div></div></div><div><div class="col-xs-4"><div>Session: </div></div><div class="col-xs-8 text-right"><div><span data-hook="session"></span></div></div></div><div><div class="col-xs-4"><div>PlayTime: </div></div><div class="col-xs-8 text-right"><div><span data-hook="playtime"></span></div></div></div><div><div class="col-xs-4"><div>Ping: </div></div><div class="col-xs-8 text-right"><div><span data-hook="ping"></span></div></div></div><div><div class="col-xs-4"><div>IsOnline: </div></div><div class="col-xs-8 text-right"><div><span data-hook="online"></span></div></div></div></div></div></div>';
    };

    // pages\console.jade compiled template
    templatizer["pages"]["console"] = function tmpl_pages_console() {
        return '<section class="page console"><h2>Bad Company SM Web UI</h2><form data-hook="console-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form><div data-hook="command"></div><br/><pre data-hook="response"></pre></section>';
    };

    // pages\home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="page home"><h2>Bad Company SM Web UI</h2></section>';
    };

    // pages\login.jade compiled template
    templatizer["pages"]["login"] = function tmpl_pages_login() {
        return '<section class="page login"><h2>Admin Token Credentials</h2><form data-hook="login-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="reset" type="submit" class="btn">Submit</button></div></form><br/><br/><div data-hook="steam-login"><span>Steam Login comming soon...</span></div></section>';
    };

    // pages\playersAll.jade compiled template
    templatizer["pages"]["playersAll"] = function tmpl_pages_playersAll() {
        return '<section class="page"><h2>Players All</h2><table><thead><tr><th><span>Name</span></th><th><span>SteamId</span></th><th><span>EntityId</span></th><th><span>IsOnline</span></th><th><span>LastOnline</span></th><th><span>LastWrite</span></th></tr></thead><tbody data-hook="pdf-list"></tbody></table><div class="buttons btn-group"><button data-hook="reset" class="btn btn-default">.reset() </button><button data-hook="fetch" class="btn btn-default">.fetch() </button></div></section>';
    };

    // pages\playersOnline.jade compiled template
    templatizer["pages"]["playersOnline"] = function tmpl_pages_playersOnline() {
        return '<section class="page"><h2 class="section-title">Players Online</h2><div class="buttons btn-group pull-right"><button data-hook="fetch" class="btn btn-default">Refresh</button><button data-hook="sort" class="btn btn-default">Sort</button></div><div data-hook="player-list" class="col-md-12"></div></section>';
    };

    // pages\playerView.jade compiled template
    templatizer["pages"]["playerView"] = function tmpl_pages_playerView() {
        return '<section class="page view-player"><h2 data-hook="name"></h2><img data-hook="avatar" width="80" height="80"/><div class="buttons"><button data-hook="delete" class="btn">Delete</button></div></section>';
    };

    return templatizer;
}));
