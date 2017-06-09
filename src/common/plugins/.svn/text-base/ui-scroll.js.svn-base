import draggable from '../untils/draggable';
import translateUtil from '../untils/translate';

let uiScroll = {};

uiScroll.install = function(Vue) {
  /**
   * v-ui-scroll
   * @desc 横向滑动
   * @example
   * <a v-ui-scroll></a>
   *
   */
  Vue.directive('uiScroll', {
    bind(el) {
      let MAX = Number(el.style.width.replace('px', '')) - document.body.clientWidth;
      let MIN = 10;
      let dragState = {};
      let ticking = false;
      let raf;
      draggable(el, {
        start: (event) => {
          cancelAnimationFrame(raf);
          raf = null;
          dragState = {
            start: new Date(),
            startLeft: event.pageX,
            startTranslateLeft: translateUtil.getElementTranslate(el).left
          };
        },
        drag: (event) => {
          if (!ticking) {
            dragState.left = event.pageX;

            let deltaX = dragState.left - dragState.startLeft;
            let translate = dragState.startTranslateLeft + deltaX;
            raf = requestAnimationFrame(() => {
              if (translate < MIN && Math.abs(translate) < MAX) {
                translateUtil.translateElement(el, translate, null);
              }
              ticking = false;
            });
          }
          ticking = true;
        },
        end: () => {
          ticking = false;
          dragState = {};
        }
      });
    }
  });
};

export default uiScroll;
