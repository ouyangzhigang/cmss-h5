<template>
  <a class="pa-cell" :href="href">
    <div class="pa-cell-wrap">
      <div class="pa-cell-left" :class="{'pa-cell-flex': isLeftFlex}">
        <slot name="left"></slot>
      </div>
      <div class="pa-cell-right" :class="{'pa-cell-flex': !isLeftFlex}">
        <slot name="right"></slot>
      </div>
    </div>
    <i class="pa-cell-allow-right" v-if="isLink"></i>
  </a>
</template>

<script>
  /**
   * pa-cell
   * @desc 列表，左右布局
   *
   * @param {string|Object} [to] - 跳转链接，router链接 会传递给 router.push，外部链接 作为 a 标签的 href 属性处理
   * @param {Boolean} [is-link] - 是否有箭头图标
   * @param {Boolean} [is-left-flex] - 是否左部自适应大小
   *
   * @example
   * <pa-cell to="//www.baidu.com" is-link>
   *  <div slot="left"></div>
   *  <div slot="right"></div>
   * </pa-cell>
   */
  export default {
    name: 'pa-cell',
    props: {
      to: [String, Object],
      isLink: Boolean,
      isLeftFlex: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      href() {
        if (this.to && !this.flag && this.$router) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length) return this.to;

          this.$nextTick(() => {
            this.flag = true;
            this.$el.addEventListener('click', this.handleClick);
          });
          return resolved.path;
        }
        return this.to;
      }
    },
    methods: {
      handleClick($event) {
        $event.preventDefault();
        this.$router.push(this.href);
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .pa-cell {
    display: block;
    overflow: hidden;
    background-color: #fff;
    position: relative;
  }

  .pa-cell-wrap {
    display: flex;
  }

  .pa-cell-flex {
    display: flex;
    flex: 1;
  }

  .pa-cell-allow-right {
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    top: 50%;
    right: 5px;
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
  }
</style>
