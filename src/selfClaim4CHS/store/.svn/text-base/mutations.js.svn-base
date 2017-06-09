export default {
  /**
   * @desc 存储缓存信息
   * @param {Array|Object} playload 载荷
   * @example
   * {
   *  name: 'name',
   *  value: 'value'
   * }
   * */
  putCache(state, payload) {
    if (payload instanceof Array) {
      for (let item of payload) {
        state[item.name] = item.value;
      }
    } else if (payload instanceof Object) {
      state[payload.name] = payload.value;
    }
  }
};
