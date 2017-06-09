let vueTap = {};
import draggable from '../untils/draggable';

vueTap.install = function(Vue) {
  /**
   * v-tap
   *
   * @example
   * <a v-tap="fn"></a>
   * <a v-tap="{method: fn, param: param}"></a>
   *
   */
  Vue.directive('tap', {
    bind(el, binding) {
      if (typeof binding.value !== 'function' && typeof binding.value.method !== 'function') {
        throw new Error('The param of directive "v-tap" must be a function!');
      }
      let dragState = {};
      const MAX_TIME = 300;
      const MAX_DISTANCE = 10;
      draggable(el, {
        preventDefault: true,
        start: (event) => {
          dragState = {
            start: +new Date(),
            startX: event.pageX,
            startY: event.pageY
          };
        },
        end: (event) => {
          let deltaX = dragState.startX - event.pageX;
          let deltaY = dragState.startY - event.pageY;
          let time = +new Date() - dragState.start;
          if (time < MAX_TIME && Math.abs(deltaX) < MAX_DISTANCE && Math.abs(deltaY) < MAX_DISTANCE) {
            if (typeof binding.value === 'function') {
              binding.value.call(null, event, binding.value.param);
            } else {
              binding.value.method.call(null, event, binding.value.param);
            }
          }
        }
      });
    }
  });
};

export default vueTap;
