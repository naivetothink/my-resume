'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
var glob = require('glob')
function getEntry(globPath) {
  
 var entries = {},tmp,basename, pathname;
 
 glob.sync(globPath).forEach(function (entry) {
  basename = path.basename(entry, path.extname(entry));
  tmp = entry.split('/').splice(-3);
  // splice(1,1) 从第二个开始删除一个，如结果为‘**’
  // pathname = tmp.splice(1, 1) + '/' + basename;
  pathname = tmp.splice(1, 1);
  //pathname为文件夹的名称
  entries[pathname] = entry;
 });
 return entries;
}
 


var build= {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),
    // family:path.resolve(__dirname, '../dist/family.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '../dist',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
var pages = getEntry('./src/modules/**/*.html');
//入口 index: path.resolve(__dirname, '../dist/index.html')
for (var pathname in pages) {
 build[pathname] = path.resolve(__dirname, '../dist/' + pathname + '.html')
}

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

    build:build,
  // build: {
  //   // Template for index.html
  //   index: path.resolve(__dirname, '../dist/index.html'),
  //   family:path.resolve(__dirname, '../dist/family.html'),

  //   // Paths
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',

  //   /**
  //    * Source Maps
  //    */

  //   productionSourceMap: true,
  //   // https://webpack.js.org/configuration/devtool/#production
  //   devtool: '#source-map',

  //   // Gzip off by default as many popular static hosts such as
  //   // Surge or Netlify already gzip all static assets for you.
  //   // Before setting to `true`, make sure to:
  //   // npm install --save-dev compression-webpack-plugin
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css'],

  //   // Run the build command with an extra argument to
  //   // View the bundle analyzer report after build finishes:
  //   // `npm run build --report`
  //   // Set to `true` or `false` to always turn it on or off
  //   bundleAnalyzerReport: process.env.npm_config_report
  // }
}
