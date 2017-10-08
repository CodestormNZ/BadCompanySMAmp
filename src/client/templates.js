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
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/static/BCM.html" class="navbar-brand">Bad Company</a><span data-hook="game-time" class="pull-right"></span></div><ul class="nav navbar-nav"><li><a href="/static/BCM.html/online">Online</a></li><li><a href="/static/BCM.html/players">All Players</a></li><li><a href="/static/BCM.html/console">Console</a></li><li><a href="/static/BCM.html/login">Login</a></li></ul></div></nav><div class="container-fluid"><main data-hook="page-container">   </main><div class="clearfix">   </div><footer class="footer-main"><nav class="nav-footer cf"><div><a href="https://github.com/7days2mod/" target="_blank" class="nav-item external">7Days2Mod Home</a></div><div><a href="https://github.com/7days2mod/BadCompanySM" target="_blank" class="nav-item external">Bad Company SM</a></div><div><a href="https://7daystodie.com/forums/forum.php" target="_blank" class="nav-item external">Forums</a></div></nav></footer></div></body>';
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
        return '<tr><td style="padding: 3px;"><a data-hook="name"></a></td><td data-hook="steamid"></td><td data-hook="isonline"></td><td data-hook="lastonline"></td><td data-hook="lastwrite"></td></tr>';
    };

    // includes\player.jade compiled template
    templatizer["includes"]["player"] = function tmpl_includes_player() {
        return '<div class="player"><div class="player-name"><div><div><a data-hook="name" class="name-link"> </a></div><div><span class="entityid">&#40;<a data-hook="entityid" title="click to copy to clipboard" class="hoverlink"></a>&#41;</span>&#32;<span class="steamid">&#40;<a data-hook="steamid" title="click to copy to clipboard" class="hoverlink"></a>&#41;</span></div></div></div><div class="player-details"><div><div class="div-inline"><div class="div-inline"><div><span class="stat-health pad-left-10">H:</span><span data-hook="health"></span><span>/</span><span data-hook="wellness"></span></div><div class="stat-bar bar-bg"><div data-hook="health-bar" class="stat-bar bar-health"></div></div></div><div class="div-inline"><div><span class="stat-stamina pad-left-10">S:</span><span data-hook="stamina"></span><span>/</span><span data-hook="wellness"></span></div><div class="stat-bar bar-bg"><div data-hook="stamina-bar" class="stat-bar bar-stamina"></div></div></div></div><div class="div-inline"><div class="div-inline"><div class="font-08em"><span class="stat-food pad-left-10">F:</span><span data-hook="food"></span><span>/100</span></div><div class="stat-bar bar-bg bg-60"><div data-hook="food-bar" class="stat-bar bar-food"></div></div></div><div class="div-inline"><div class="font-08em"><span class="stat-drink pad-left-10">D:</span><span data-hook="drink"></span><span>/100</span></div><div class="stat-bar bar-bg bg-60"><div data-hook="drink-bar" class="stat-bar bar-drink"></div></div></div></div></div><div class="div-inline"><div><span class="stat-exp pad-left-10">Lvl: <span data-hook="level"> </span><span class="level-progress"> &#40;+<span data-hook="progress"></span>&#37;&#41;</span></span><span class="level-progress pad-left-10">XP:<span data-hook="expprogress"></span></span></div><div class="stat-bar bar-bg bg-320"><div data-hook="exp-progress-bar" class="stat-bar bar-exp"></div></div></div><div><span class="position"><a data-hook="copypos" title="click to copy to clipboard" class="hoverlink">&#64;</a><span>&#32;</span><span data-hook="position"></span><span style="color:#428bca;">&#32;&#32;&#8635;&#32;</span><span data-hook="rotangle"></span><span>&#0176;</span><span style="color:#428bca;">&#32;&#32;&#8737;&#32;</span><span data-hook="viewangle"></span></span><span class="coretemp pad-left-5"><span style="color:#428bca;">t&#32;</span><span data-hook="coretemp"></span><span>&#8457;</span></span></div><div><span data-hook="isalive" class="life-symbol pad-left-5"></span><span class="life-span pad-left-5"><span data-hook="life-time"></span></span><span class="font-08em"><span style="color:#428bca;" class="pad-left-5">Play: </span><span data-hook="playtime"></span><span style="color:#428bca;" class="pad-left-5">Sess: </span><span data-hook="session"></span></span></div><div class="font-08em"><span style="color:#428bca;">GS: </span><span data-hook="gamestage"></span><span style="color:#428bca;" class="pad-left-5">Score: </span><span data-hook="score"></span><span style="color:#428bca;" class="pad-left-5">PK: </span><span data-hook="pkill"></span><span style="color:#428bca;" class="pad-left-5">ZK: </span><span data-hook="zkill"></span><span style="color:#428bca;" class="pad-left-5">Dth: </span><span data-hook="deaths"></span></div><div class="font-08em"><span style="color:#428bca;">Craft: </span><span data-hook="crafted"></span><span style="color:#428bca;" class="pad-left-5">Dist: </span><span data-hook="walked"></span><span style="color:#428bca;" class="pad-left-5">Speed: </span><span data-hook="speed"></span></div><div class="font-08em"><span style="color:#428bca;">Ip: </span><a data-hook="ip" title="click to copy to clipboard" class="hoverlink"></a><span style="color:#428bca;" class="pad-left-5">Ping: </span><span data-hook="ping"></span></div></div></div>';
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
        return '<section class="page login"><h2>Admin Token Credentials</h2><p data-hook="credentials"></p><form data-hook="login-form"><fieldset data-hook="field-container"></fieldset><div class="buttons"><button data-hook="login-button" type="submit" class="btn">Submit</button></div></form><button data-hook="clear-button" class="btn">Clear</button><br/><div><div>Steam Open ID</div><div><a data-hook="steam-login" href="/session/login" target="_blank"><img src="/static/img/steamlogin.png" title="Sign in through Steam"/></a></div><div><a data-hook="steam-logout" href="/session/logout" target="_blank">Logout</a></div></div></section>';
    };

    // pages\playersAll.jade compiled template
    templatizer["pages"]["playersAll"] = function tmpl_pages_playersAll() {
        return '<section class="page"><h2>All Players</h2><div class="buttons btn-group"><button data-hook="fetch" class="btn btn-default">Refresh </button></div><table class="table table-striped table-hover"><thead><tr><th><span>Name</span></th><th><span>SteamId</span></th><th><span>Status</span></th><th><span class="text-right">Last Online</span></th><th><span class="text-right">Last Write</span></th></tr></thead><tbody data-hook="pdf-list"></tbody></table></section>';
    };

    // pages\playersOnline.jade compiled template
    templatizer["pages"]["playersOnline"] = function tmpl_pages_playersOnline() {
        return '<section class="page"><h2 class="section-title">Online Players</h2><div data-hook="player-list"></div><div></div></section>';
    };

    // pages\playerView.jade compiled template
    templatizer["pages"]["playerView"] = function tmpl_pages_playerView() {
        return '<section class="page view-player"><h2 data-hook="name"></h2><img data-hook="avatar" width="80" height="80"/><div class="buttons"><button data-hook="delete" class="btn">Delete</button></div></section>';
    };

    return templatizer;
}));
