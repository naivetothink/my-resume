'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

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
 
var pages = getEntry('./src/modules/**/*.html');

// for (var pathname in pages) {
//  // 配置生成的html文件，定义路径等
//  var conf = {
//   filename: pathname + '.html',
//   template: pages[pathname],  // 模板路径
//   inject: true,       // js插入位置
//   chunks:[pathname]
//  };
//  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
// }
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

var devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'src/modules/index/index.html',
    //   inject: true,
    //   chunks: ['index'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'project.html',
    //   template: 'src/modules/project/project.html',
    //   inject: true,
    //   chunks: ['project'],
    // }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port


for (var pathname in pages) {
 // 配置生成的html文件，定义路径等
 // 此时的pathname已经为文件夹的名称

 var conf = {
  filename: pathname + '.html',
    // filename: "haha" + '.html',
  template: pages[pathname],  // 模板路径
  inject: true,       // js插入位置
  chunks:[pathname]
  // chunks:['index'] 
 };
 devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
