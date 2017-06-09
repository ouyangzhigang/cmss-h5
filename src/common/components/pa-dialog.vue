<template>
  <div class="pa-dialog"
       v-show="show"
       transition="pa-dialog-fade">
    <div class="pa-dialog-header"
         v-if="title">
      <span v-text="title"></span>
    </div>
    <a class="iconfont icon-close"
       href="javascript:void(0)"
       v-tap="cancel"
       v-if="isClose"></a>
    <div class="pa-dialog-wrap">
      <div class="pa-dialog-content">
        <slot></slot>
      </div>
    </div>
    <div class="pa-dialog-footer"
         v-if="isBtns && btns.length > 0">
      <!--变动的绑定事件参数不能用v-tap-->
      <button class="pa-dialog-button"
              :class="item.className"
              type="button"
              v-for="(item, index) in btns"
              :key="item.type"
              v-tap="{method: clickHandle, param: item.type}">{{item.text}}
      </button>
    </div>
  </div>
</template>

<script>
  import paLayer from '../mixins/pa-layer';

  /**
   * pa-dialog
   * @desc 对话框，依赖paLayer蒙版层
   *
   * @param {String} [title] - 标题
   * @param {Boolean} [is-btns] - 是否显示底部按钮
   * @param {Array} [btns] - 底部按钮
   * @param {Boolean} [value] - 双向绑定值,是否显示
   *
   * @example
   * <pa-dialog v-model="isShow" title="标题" @cancel="cancel" @confirm="confirm" is-btns></pa-dialog>
   */
  export default {
    name: 'pa-dialog',
    mixins: [paLayer],
    props: {
      title: String,
      isBtns: Boolean,
      isClose: {
        type: Boolean,
        default() {
          return Boolean(this.title);
        }
      },
      btns: {
        type: Array,
        default() {
          return [{
            text: '确定',
            type: 'confirm'
          }, {
            text: '取消',
            type: 'cancel'
          }];
        }
      },
      value: Boolean
    },
    computed: {
      show: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      // 点击btn按钮代理事件
      clickHandle(e, type) {
        if (type === 'cancel') {
          this.show = false;
        }
        this.$emit(type);
      },
      // 取消，背景点击
      cancel() {
        this.show = false;
        this.$emit('cancel');
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .pa-dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 90%;
    border-radius: 4px;
    background-color: #fff;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid @panel;
    .icon-close {
      z-index: 99;
      position: absolute;
      top: 10px;
      right: 5px;
      .px2rem(font-size, 40px);
      &:before {
        color: @blue;
      }
    }
  }

  .pa-dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .pa-dialog-fade-enter,
  .pa-dialog-fade-leave {
    opacity: 0;
  }

  .pa-dialog-header {
    font-weight: 700;
    overflow: hidden;
    text-align: center;
    .px2rem(font-size, 16px);
    border-bottom: 1px solid @border;
    .px2rem(height, 50px);
    .px2rem(line-height, 50px);
    .px2rem(margin-left, 15px);
    .px2rem(margin-right, 15px);
  }

  .pa-dialog-wrap {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
    margin: 10px 0;
  }

  .pa-dialog-content {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 20px;
    color: #333;
    overflow: auto;
    font-size: 14px;
    .px2rem(padding-left, 20px);
    .px2rem(padding-right, 20px);
    height: 100%;
    width: 100%;
  }

  .pa-dialog-footer {
    text-align: center;
    height: 60px;
  }

  .pa-dialog-button {
    .btn(40px, 130px, @blue, 16px);
  }
</style>
