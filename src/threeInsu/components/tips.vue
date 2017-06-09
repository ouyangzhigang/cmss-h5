<template>
  <div id="tips">
    <header class="tips-header">申请提示</header>
    <div class="tips-content">
      <div class="tips-logo">
        <img src="/src/selfClaim/assets/images/tips-logo.png" class="tips-img" />
      </div>
      <ul class="tips-list">
        <li>1、自助理赔平台不支持身故、伤残、重大疾病责任。</li>
        <li>2、对于医疗费用理赔。本平台仅支持账单金额3000元以内案件申请。</li>
        <li>3、境外、港澳台出险请拨打95511报案，通过柜面渠道申请。</li>
        <li>3、若同一事故您已提交过申请，需要补充申请后续费用，请通过柜面渠道申请。</li>
      </ul>
      <p>
        <tips-checkbox :check="userIsCheck" @change="change">
          <a href="javascript:void(0)" class="tips-notice" v-tap="modalShow">客户须知</a>
          <span class="tips-label">(我已阅读并同意)</span>
        </tips-checkbox>
      </p>
    </div>
    <div class="tips-btn">
      <mt-button type="primary" size="large" v-tap="nextPage">开始</mt-button>
      <router-link to="/" class="tips-normal">常见问题</router-link>
    </div>

    <pa-dialog :show="show" title="郑重声明" @cancle="cancle">
      <div>内容内容内容内容内容内容内容</div>
    </pa-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button, Toast } from 'mint-ui';
  import PaDialog from '../../common/components/pa-dialog'

  Vue.component(Button.name, Button);
  Vue.component(PaDialog.name, PaDialog);

  export default {
    name: 'tips',
    data() {
      return {
        userIsCheck: true,
        show: false
      }
    },
    methods: {
      change(flag) {
        this.userIsCheck = flag
      },
      modalShow() {
        this.show = true;
      },
      cancle() {
        this.show = false;
      },
      nextPage() {
        if(this.userIsCheck) {
          this.$router.push('pInfo')
        } else {
          Toast({
            message: '请勾选客户须知',
            position: 'bottom',
            duration: 2000
          });
        }
      }
    },
    components: {
      /**
       * tips-checkbox
       *
       * @param {Boolean} [check] - 默认是否选中
       *
       * @example
       * <tips-checkbox check></tips-checkbox>
       */
      'tips-checkbox': {
        template: `<span>
              <label @change="$emit('change', state)">
                <input type="checkbox" v-model="state" class="tips-checkbox-input">
                <span class="tips-checkbox-icon"></span>
              </label>
              <slot></slot>
            </span>`,
        props: {
          check: Boolean
        },
        data() {
          return {
            state: this.check
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/utils";
  @blue: #50c5e2;
  @gray: #666;
  @darkBlue: #498fe1;
  .tips-header {
    .header;
  }

  .tips-content {
    padding: 50px 15px 5px 15px;
    .panel;
    .px2rem(margin, 15px);
  }

  .tips-logo {
    text-align: center;
    .px2rem(margin-bottom, 20px);
  }

  .tips-img {
    .px2rem(width, 186px);
    .px2rem(height, 105px);
  }

  .tips-list {
    color: @gray;
    line-height: 1.5;
    .px2rem(margin-bottom, 80px);
  }

  .tips-label {
    color: @gray;
  }

  .tips-notice {
    color: @blue;
    text-decoration: underline;
  }

  .tips-btn {
    .px2rem(width, 300px);
    margin: 0 auto;
    text-align: center;
      .mint-button {
      .box-shadow;
      .px2rem(margin-bottom, 20px);
    }
  }

  .tips-normal {
    color: @darkBlue;
    padding-bottom: 50px;
  }

  .tips-checkbox-input {
    display: none;
  }

  .tips-checkbox-icon {
    .px2rem(width, 20px);
    .px2rem(height, 20px);
    border: 1px solid @blue;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    &:before {
      content: " ";
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      top: 3px;
      left: 6px;
      position: absolute;
      width: 4px;
      height: 8px;
      transform: rotate(45deg) scale(0);
      transition: transform .2s;
    }
  }

  .tips-checkbox-input:checked~.tips-checkbox-icon:before {
    border-color: #FF0000;
    transform: rotate(45deg) scale(1);
  }
</style>