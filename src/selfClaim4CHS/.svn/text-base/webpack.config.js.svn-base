var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  title: '意健险',
  entry: './src/selfClaim4CHS/main.js',
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('./'),
    '@components': resolve('common/components'),
    '@json': resolve('selfClaim4CHS/json')
  },
  proxyTable: {
    '/do/dispatch/chsSelfClaimController/': {
      target: 'http://iqsz-d4589:7007', // target host
      changeOrigin: true
    }
  },
  index: 'html/visitor/selfClaim4CHS/index.html',
  css: 'css/selfClaim4CHS/',
  js: 'js/selfClaim4CHS/',
  font: 'css/selfClaim4CHS/font/',
  img: 'images/H5/selfClaim4CHS/',
  assetsRoot: '/Users/weihualiang048/workspace/svnrepos/ICORE-CMSS1.0.5/cmss_j2ee/src/webapp/'
};
