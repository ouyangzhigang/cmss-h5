Function.prototype.bind = require('function-bind');

// 匹配以.spec结尾的单元测试文件
const testsContext = require.context('./specs', true, /\.js$/);
testsContext.keys().forEach(testsContext);

// 匹配除了main.js以外的其他源文件
const srcContext = require.context('../src', true, /^\.vue$/);
srcContext.keys().forEach(srcContext);