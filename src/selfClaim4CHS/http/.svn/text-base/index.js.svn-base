import Vue from 'vue';
import Axios from 'axios';
import {Indicator, MessageBox} from 'mint-ui';

// import mock from './mock';

Axios.defaults.baseURL = '/do/dispatch/chsSelfClaimController/';

/* Axios.defaults.proxy = {
 host: 'iqsz-d4589',
 port: 7007
 };
 */

Vue.prototype.SUCCESS_CODE = 'Y';

let RESPONSE = {
  SUCCESS_CODE: '1',
  ERROR_CODE: '0',
  CODE_KEY: 'returnCode',
  MSG_KEY: 'returnMsg'
};

Axios.RESPONSE = RESPONSE;

Axios.interceptors.request.use(config => {
  Indicator.open();

  RESPONSE.ERROR_CODE = config.data.ERROR_CODE || '0';
  // RESPONSE.CODE_KEY = config.data.CODE_KEY || 'returnCode';
  // RESPONSE.MSG_KEY = config.data.MSG_KEY || 'returnMsg';

  delete config.data.ERROR_CODE;
  // delete config.data.CODE_KEY;
  // delete config.data.MSG_KEY;

  // console.log('request...........................' + config.url);
  // console.dir(config.data);
  return config;
}, error => {
  return Promise.reject(error);
});

Axios.interceptors.response.use(res => {
  // console.log('response...........................' + res.config.url);
  // console.dir(res.data);
  Indicator.close();
  // let SUCCESS_CODE = RESPONSE.SUCCESS_CODE.split('|');

  // if(SUCCESS_CODE[0] !== 'all' && SUCCESS_CODE.indexOf(res.data[RESPONSE.CODE_KEY]) === -1) {
  let data = res.data;

  if (typeof data === 'object') {
    if (RESPONSE.ERROR_CODE !== 'none' && data[RESPONSE.CODE_KEY] === RESPONSE.ERROR_CODE) {
      return new Promise((resolve, reject) => {
        MessageBox({
          title: '提示',
          message: data[RESPONSE.MSG_KEY],
          closeOnClickModal: false
        }).then(action => {
          data.validate = false;
          resolve(data);
        }, err => {
          reject(err);
        });
      });
    } else {
      if (data[RESPONSE.CODE_KEY] === RESPONSE.SUCCESS_CODE) {
        data.validate = true;
      } else {
        data.validate = false;
      }
      return data;
    }
  } else {
    return data;
  }
}, err => {
  Indicator.close();
  MessageBox({
    title: '提示',
    message: '网络错误，请重试'
  });
  return Promise.reject(err);
});

Object.defineProperty(Vue.prototype, '$http', {
  value: Axios
});

export default Axios;
