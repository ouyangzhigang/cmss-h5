<template>
  <div class="pa-panel">
    <p class="pa-panel-title" v-if="title" v-once>
      <i v-if="icon" :class="icon" v-once></i>
      <span v-text="title" v-once></span>
    </p>
    <slot></slot>
  </div>
</template>

<script>
  /**
   * pa-panel
   * @desc 面板
   *
   * @param {String} [icon] - 标题图标 为iconfont名称
   * @param {String} [title] - panel标题
   *
   * @example
   * <pa-panel :title="title" :icon="icon"></pa-panel>
   */
  export default {
    name: 'pa-panel',
    props: {
      icon: String,
      title: String
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .pa-panel {
    .panel();
    .px2rem(margin-top, 20px);
    .px2rem(margin-left, 15px);
    .px2rem(margin-right, 15px);
    position: relative;
  }

  .pa-panel-icon {
    .px2rem(font-size, 24px);
    vertical-align: middle;
  }

  .pa-panel-title {
    text-align: center;
    height: 48px;
    line-height: 48px;
    .px2rem(font-size, 18px);
    color: @blue;
  }
</style>
