<template>
  <div class="pa-layer" v-tap="click" @touchmove.prevent :style="style" transition="pa-layer"></div>
</template>

<script>
  /**
   * pa-layer
   *
   * @param {Function} [onClick] - 点击事件
   * @param {Number} [opacity] - 透明度
   * @param {String} [color] - 背景颜色
   *
   */
  export default {
    name: 'pa-layer',
    props: {
      onClick: Function,
      opacity: {
        type: Number,
        default: 0.5
      },
      color: {
        type: String,
        default: '#000'
      }
    },
    computed: {
      style() {
        return {
          'opacity': this.opacity,
          'background-color': this.color
        };
      }
    },
    methods: {
      click() {
        if (this.onClick) {
          this.onClick();
        }
      }
    }
  };
</script>

<style lang="less">
  .pa-layer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .4;
    z-index: 1000;
  }

  .pa-layer-fade-transition {
    transition: all .3s linear;

    &.pa-layer-fade-enter,
    &.pa-layer-fade-leave {
      opacity: 0 !important;
    }

  }
</style>
