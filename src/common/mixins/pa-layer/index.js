import manager from './manager';

/**
 * pa-layer
 * @desc 蒙版
 *
 * @param {Boolean} [isShow] - 父组件控制是否显示
 * @param {Number} [opacity] - 透明度
 * @param {String} [color] - 背景颜色值
 *
 */

export default {
  props: {
    opacity: {
      type: Number,
      default: 0.5
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  mounted() {
    if (this.show) {
      manager.open(this);
    }
  },
  watch: {
    show(val) {
      if (val) {
        manager.open(this);
      } else {
        manager.close(this);
      }
    }
  },
  beforeDestroy() {
    manager.close(this);
  }
};
