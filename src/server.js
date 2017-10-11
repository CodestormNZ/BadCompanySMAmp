var Hapi = require('hapi');
var config = require('getconfig');
var MoonBootsHapi = require('moonboots_hapi');
var moonbootsConfig = require('./moonbootsConfig');
var staticRoutes = require('./staticRoutes');
var internals = {};
var server = new Hapi.Server();

var fs = require('fs');
var rmdirRecurse = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        rmdirRecurse(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

rmdirRecurse(moonbootsConfig.moonboots.buildDirectory);
fs.mkdirSync(moonbootsConfig.moonboots.buildDirectory);

server.connection({ host: config.http.listen, port: config.http.port });
internals.configStateConfig = { encoding: 'none', ttl: 1000 * 60 * 15, isSecure: config.isSecure };
server.state('config', internals.configStateConfig);
internals.clientConfig = JSON.stringify(config.client);
server.ext('onPreResponse',
  function (request, reply) {
    if (!request.state.config) {
      var response = request.response;
      return reply(response.state('config', encodeURIComponent(internals.clientConfig)));
    }
    return reply.continue();
  });

server.register([
  { register: MoonBootsHapi.register, options: moonbootsConfig },
  { register: staticRoutes }
], function (err) {
  if (err) throw err;
  server.views({
    engines: {
      jade: require('jade')
    },
    relativeTo: __dirname,
    path: 'templates'
  });

  console.log(MoonBootsHapi.register);
  console.log(MoonBootsHapi.attributes);


  server.start(function (err) {
    if (err) throw err;
    console.log('BCM is running at: http://' + config.http.listen + ':' + config.http.port);
  });
});
