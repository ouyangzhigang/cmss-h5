<template>
  <div class="pa-page">
    <header class="pa-page-header"
            v-text="header"
            v-once></header>
    <pa-panel :title="title"
              :icon="icon">
      <pa-form v-model="validate">
        <slot></slot>
      </pa-form>
    </pa-panel>
    <ul class="pa-page-tips"
        v-if="tips">
      <li class="pa-page-tip"
          v-for="(item, index) in tips">
        <i class="im-tip" v-if="item"></i>
        <p v-text="item"></p></li>
    </ul>
    <div class="pa-page-bottom">
      <button type="button"
              class="pa-page-btn"
              :class="item.className"
              v-tap="{method: commit, param: item.method}"
              v-text="item.name"
              v-for="item in btns"></button>
    </div>
    <p class="align-center">
      <span class="pa-page-normal"
            v-tap="openDialog">常见问题</span>
    </p>

    <div class="pa-page-progress"
         v-if="progress !== '0'"
         v-once>
      <div class="pa-page-progress-circle end">1</div>
      <p class="pa-page-progress-line end"></p>
      <div class="pa-page-progress-circle"
           :class="[progress < 2 ? 'start' : 'end']">2
      </div>
      <p class="pa-page-progress-line"
         :class="[progress < 3 ? 'start' : 'end']"></p>
      <div class="pa-page-progress-circle"
           :class="[progress < 4 ?'start' : 'end']">3
      </div>
    </div>

    <pa-dialog class="ques-dialog"
               v-model="isShow"
               title="常见问题">
      <p class="ques-title">1、我为什么报案失败
      </p>
      <p> 您可以尝试重新申请一次，如仍然提示申请失败，则您的案件可能不属于自助理赔的范围，您可以通过拨打95511或在门店递交材料申请理赔。
      </p>
      <p class="ques-title"> 2、材料未上传完退出怎么办
      </p>
      <p> 您可在“补传单证”中查询到该案件信息，进行材料上传。
      </p>
      <p class="ques-title"> 3、发票一定要原件么
      </p>
      <p> 若您已在第三方报销，需提供第三方盖章的发票复印件、第三方报销凭证原件，其他情况请上传原件。
      </p>
      <p class="ques-title"> 4、如何查询理赔进度
      </p>
      <p> 您可以在“理赔记录”中查询案件处理进度。如单证齐全，将在10个工作日内结案支付；如需补充单证，请您在“补传单证”中补充提交。
      </p>
      <p class="ques-title"> 5、“待补充纸质材料”怎么办
      </p>
      <p> 请您在30日内将理赔材料交至当地门店，如未按时提交，将会影响您的赔款支付以及后续的案件审核。
      </p>
      <p class="ques-title"> 6、赔款支付失败怎么办
      </p>
      <p> 您可在工作日致电95511联系我司工作人员进行账号修改或等待我司工作人员主动联系您。请勿泄露您的银行卡密码或短信验证码。</p>
    </pa-dialog>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {MessageBox} from 'mint-ui';
  import PaPanel from './pa-panel';
  import PaForm from './pa-form';
  import PaDialog from './pa-dialog';

  Vue.component(PaPanel.name, PaPanel);
  Vue.component(PaForm.name, PaForm);
  Vue.component(PaDialog.name, PaDialog);

  /**
   * pa-page
   * @desc 页面整合 依赖PaPanel, PaForm
   *
   * @param {String} [header] - 页面头部标题
   * @param {String} [title] - panel标题
   * @param {String} [icon] - panel标题图标 为iconfont名称
   * @param {Array} [tips] - 提示信息列表
   *
   * @example
   * <pa-page header="标题" title="panel标题" icon="icon-info" :tips="tips"></pa-page>
   */

  export default {
    name: 'pa-page',
    props: {
      header: String,
      title: String,
      icon: String,
      tips: Array,
      btns: {
        type: Array,
        default() {
          return [{name: '开始', method: 'submit'}];
        }
      },
      progress: {
        type: [String, Number],
        default: 1
      }
    },
    data() {
      return {
        isShow: false,
        validate: {
          valid: true,
          field: {},
          msg: ''
        }
      };
    },
    methods: {
      openDialog() {
        this.isShow = true;
      },
      check() {
        if (!this.validate.valid) {
          MessageBox({
            title: '提示',
            message: this.validate.msg
          });
          return false;
        }
        return true;
      },
      commit(e, method) {
        if (method === 'submit') {
          if (this.check()) {
            this.$emit('submit');
          }
        } else {
          this.$emit(method);
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .pa-page {
    min-height: 100vh;
    padding-bottom: 70px;
    position: relative;
  }

  .pa-page-header {
    .header()
  }

  .pa-page-tips {
    padding: 8px 10px 0 15px;
    font-size: 14px;
    color: @textColor;
  }

  .pa-page-tip {
    display: flex;
    padding: 2px 0;
    .im-tip {
      margin-right: 5px;
      font-size: 16px;
    }
  }

  .pa-page-bottom {
    .px2rem(width, 270px);
    margin: 15px auto 0;
    text-align: center;
  }

  .pa-page-btn {
    .btn(40px, 270px, @blue, 18px);
    .px2rem(margin-bottom, 20px);
    font-weight: 700;

  }

  .pa-page-normal {
    color: @darkBlue;
  }

  .pa-page-progress {
    position: absolute;
    display: flex;
    align-items: center;
    .px2rem(bottom, 30px);
    .px2rem(width, 270px);
    left: 50%;
    transform: translateX(-50%);
  }

  .align-center {
    text-align: center;
  }

  .ques-dialog {
    height: 80vh;
  }

  .ques-title {
    font-weight: 700;
  }

  .pa-page-progress-circle {
    .px2rem(width, 28px);
    .px2rem(height, 28px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    &.start {
      background-color: @blue;
    }
    &.end {
      background-color: @orange;
    }
  }

  .pa-page-progress-line {
    .px2rem(width, 90px);
    height: 1px;
    &.start {
      background-color: @blue;
    }
    &.end {
      background-color: @orange;
    }
  }
</style>
