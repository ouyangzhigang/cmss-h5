var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
let config = {
  title: '三者转保',
  entry: ['./src/threeInsu/main.js'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('./'),
    '@components': resolve('common/components'),
    '@json': resolve('threeInsu/json')
  },
  proxyTable: {
    '/do/app/transmitAction/': {
      target:  'http://10.118.153.143:7007', // target host
      changeOrigin: true
    },
    '/transmit/getTransmitData.do': {
      target:  'http://IQSZ-D2312:7007', // target host
      changeOrigin: true
    }
  },
  index: 'html/paInnerUser/threeInsu/index.html',
  css: 'css/threeInsu/',
  js: 'js/threeInsu/',
  font: 'css/threeInsu/font/',
  img: 'images/H5/threeInsu/',
  assetsRoot: '/Users/weihualiang048/workspace/svnrepos/ICORE-CMSS1.0.5/cmss_j2ee/src/webapp/',
  carBrandDir: 'images/H5/threeInsu/carBrand',
  customJs: ['/js/threeInsu/polyfill.min.js'],
  baikeTitle: '/images/H5/encyclopedia/title',
  baikeContent: '/images/H5/encyclopedia/content'
};
config.plugins = [
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../../node_modules/babel-polyfill/dist/polyfill.min.js'),
      to: path.join(config.assetsRoot, config.js),
      ignore: ['.*']
    }
  ]),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'assets/images/baikeTitle'),
      to: path.join(config.assetsRoot, config.baikeTitle),
      ignore: ['.*']
    }
  ]),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'assets/images/baikeContent'),
      to: path.join(config.assetsRoot, config.baikeContent),
      ignore: ['.*']
    }
  ]),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'assets/images/carBrand'),
      to: path.join(config.assetsRoot, config.carBrandDir),
      ignore: ['.*']
    }
  ])
]
module.exports = config;
