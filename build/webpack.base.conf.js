'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var glob = require('glob')
var entries = getEntry('./src/modules/**/*.js')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

//获取入口js文件
function getEntry(globPath) {
 var entries = {},
  basename, tmp, pathname;
 
 glob.sync(globPath).forEach(function (entry) {
  //获取js文件名称 如entry为'./src/pages/**/hehe.js'，则过滤为hehe
  basename = path.basename(entry, path.extname(entry));
  //用/分割取后3个，如entry为'./src/pages/**/hehe.js'，则结果为[ 'pages', '**', 'hehe.js' ]
  tmp = entry.split('/').splice(-3);
  // splice(1,1) 从第二个开始删除一个，如结果为‘**’
  // pathname = tmp.splice(1, 1) + '/' + basename;
  pathname = tmp.splice(1, 1);
  entries[pathname] = entry;
  // entries[basename] = entry;
 });
 return entries;
}


module.exports = {
  context: path.resolve(__dirname, '../'),
  // entry: {
  //   index: './src/modules/index/index.js',
  //   project: './src/modules/project/project.js',
  // },
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: []
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
