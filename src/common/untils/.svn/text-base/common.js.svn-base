// 深拷贝
function extend(source) {
  let sourceCopy = source instanceof Array ? [] : {};
  for (let item in source) {
    if (source.hasOwnProperty(item)) {
      sourceCopy[item] = typeof source[item] === 'object' ? extend(source[item]) : source[item];
    }
  }
  return sourceCopy;
}

// 获取url参数
function getRequest() {
  let url = decodeURI(location.search);
  let request = {};
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1);
    str = str.split('&');
    for (let i = 0; i < str.length; i++) {
      let tmp = str[i].split('=');
      request[tmp[0]] = tmp[1];
    }
  }
  return request;
}

function toUpperCase(str) {
  if (typeof str === 'string') {
    return str.toUpperCase();
  }
  return str;
}

// 合并两个对象，不修改源对象
function merge(target, source) {
  let tmp = extend(target);
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      tmp[key] = source[key];
    }
  }
  return tmp;
}

// 节流函数
function rafThrottle(fn) {
  let ticking = false;
  let update = function() {
    ticking = false;
    fn && fn.apply(this, arguments);
  };

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  requestTick();
}

export default {
  extend,
  getRequest,
  toUpperCase,
  merge,
  rafThrottle
};
