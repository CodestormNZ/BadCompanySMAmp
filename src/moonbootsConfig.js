var config = require('getconfig');
var stylizer = require('stylizer');
var templatizer = require('templatizer');

var appDir = __dirname + '/client';
var cssDir = __dirname + '/stylesheets';

module.exports = {
  appPath: '/{p*}',
  appTemplate: 'index',
  moonboots: {
    resourcePrefix: './',
    jsFileName: 'bcm',
    cssFileName: 'bcm',
    main: appDir + '/app.js',
    developmentMode: config.isDev,
    buildDirectory: appDir + '/_build',
    libraries: [],
    stylesheets: [cssDir + '/bootstrap.css', cssDir + '/app.css'],
    browserify: { debug: config.isDev },
    beforeBuildJS: function () {
      if (config.isDev) {
        templatizer(__dirname + '/templates', appDir + '/templates.js');
      }
    },
    beforeBuildCSS: function (done) {
      if (!config.isDev) {
        done();
        return;
      }
      stylizer({
        infile: cssDir + '/app.styl',
        outfile: cssDir + '/app.css',
        development: false,
        watch: cssDir + '/**/*.styl'
      },
        done);
    }
  }
};
