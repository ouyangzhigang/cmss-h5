import Vue from 'vue';
import Vuex from 'vuex';
import {Common} from '../../common/untils';

Vue.use(Vuex);
const CONST_USERID_KEY = 'userId';
const CONST_CERTI_NO_KEY = 'certificateNo';
const CONSTS_KEYS = [CONST_USERID_KEY, CONST_CERTI_NO_KEY];
const NOT_FIND = -1;
const ques = Common.getRequest();
export default new Vuex.Store({
  /**
   * @param [userId] um账号
   * @param [certificateNo] 员工身份证号
   *
   */
  state: {
    userId: ques.userId || '',
    certificateNo: ques.certificateNo || '',
    title: '理赔服销',
    routeCount: 0
  },
  mutations: {
    resetCache(state) {
      for (let key in state) {
        if (state.hasOwnProperty(key) && CONSTS_KEYS.indexOf(key) === NOT_FIND) {
          Vue.set(state, key, '');
        }
      }
    },
    putCache(state, payload) {
      if (payload instanceof Array) {
        for (let item of payload) {
          Vue.set(state, item.name, item.value);
        }
      } else if (payload instanceof Object) {
        Vue.set(state, payload.name, payload.value);
      }
    }
  },
  modules: {

  }
});
