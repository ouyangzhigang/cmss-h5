import Vue from 'vue';
import Axios from 'axios';
import { Indicator, MessageBox } from 'mint-ui';

// import mock from './mock';

Axios.defaults.baseURL = '/';
// Axios.defaults.proxy = {
//   host: '10.118.153.143',
//   port: 7007
// };

Axios.interceptors.request.use(config => {
  // console.log(config.url);
  Indicator.open();
  return config;
}, error => {
  return Promise.reject(error);
});

Axios.interceptors.response.use(res => {
  Indicator.close();
  if (res.data.CODE !== '00') {
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  } else {
    return res;
  }
}, error => {
  Indicator.close();
  MessageBox({
    title: '提示',
    message: '网络错误，请重试'
  });
  return Promise.reject(error);
});

Object.defineProperty(Vue.prototype, '$http', {
  value: Axios
});
