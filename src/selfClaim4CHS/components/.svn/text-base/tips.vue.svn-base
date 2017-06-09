<template>
  <div id="tips">
    <pa-page header="申请提示"
             :tips="tips"
             @submit="nextPage">
      <div class="tips-content">
        <div class="tips-logo">
          <img src="../assets/images/tips-logo.png"
               class="tips-img"/>
        </div>
        <ul class="tips-list">
          <li>1、自助理赔平台不支持身故、伤残、重大疾病责任。</li>
          <li>2、对于医疗费用理赔，本平台仅支持账单金额3000元以内案件申请。</li>
          <li>3、境外、港澳台出险请拨打95511报案，通过柜面渠道申请。</li>
          <li>4、若同一事故您已提交过申请，需要补充申请后续费用，请通过柜面渠道申请。</li>
          <li>5、请阅读。</li>
        </ul>
        <p>
          <tips-checkbox v-model="isCheck">
          </tips-checkbox>
          <a href="javascript:void(0)"
             class="tips-notice"
             v-tap="modalShow">郑重声明</a>
          <span class="tips-label">(我已阅读并同意)</span>
        </p>
      </div>
    </pa-page>

    <pa-dialog class="tips-dialog"
               v-model="isShow"
               title="郑重声明"
               @cancel="cancel">
      <div>
        <ul>
          <li>1、本人为本次事故合法权利的申请人，保证理赔申请内容真实无任何隐瞒；保证所提供的理赔单证及资料皆为真实无任何虚假，否则愿意承担于此有关的任何法律责任，并视为自动放弃本次索赔；
          </li>
          <li>2、本人同意并委托中国平安财产保险股份有限公司就本次事故进行调查、取证、复印病历资料等相关事宜，同意任何单位或个人向中国平安财产保险股份有限公司提供与此次理赔申请有关的资料；
          </li>
          <li>3、本人同意自行负责因收款账号提供错误导致划账不成功的后果，因本人提供的账号错误原因，而导致保险公司将赔款转入他人账户，中国平安财产保险股份有限公司不承担任何责任。
          </li>
          <li>
            4、本人同意提供给平安集团（指中国平安财产（集团）保险股份有限公司及其直接或间接控股的公司）的信息，及本人享受平安集团金融服务产生的信息（包括本单证签署之前提供和产生的），可用于平安集团及因服务必要而委托的第三方为本人提供服务及推荐产品，法律禁止的除外。平安集团及其委托的第三方对上述信息负有保密义务。本条款自本单证签署时生效，具有独立法律效力，不受合同成立与否及效力状态变化的影响。
          </li>
        </ul>
        <p>反保险欺诈提示：</p>
        <p>请您与我们一同杜绝以下骗取保险金的行为：</p>
        <ul>

          <li>1.故意虚构保险标的;
          </li>
          <li>2.对发生的保险事故编造虚假的原因或者夸大损失的程度;</li>
          <li>3.编造未曾发生的保险事故;</li>
          <li>4.故意造成财产损失的保险事故；</li>
          <li>5.故意造成被保险人死亡、伤残或者疾病的。
          </li>
          <li>
            进行保险诈骗犯罪活动，可能会受到拘役、有期徒刑,并处罚金或者没收财产的刑事处罚；尚不构成犯罪的，可能会受到15日以下拘留、5000元以下罚款的行政处罚；保险公司不承担赔偿或给付保险金的责任。保险事故的鉴定人、证明人、财产评估人故意提供虚假的证明文件,为他人诈骗提供条件的,将会受到相应的刑事或行政处罚。
          </li>
        </ul>
      </div>
    </pa-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Toast} from 'mint-ui';
  import {PaDialog, PaPage} from '@components';

  Vue.component(PaDialog.name, PaDialog);
  Vue.component(PaPage.name, PaPage);

  export default {
    name: 'tips',
    data() {
      return {
        isCheck: false,
        isShow: false,
        tips: []
      };
    },
    methods: {
      modalShow() {
        this.isShow = true;
      },
      cancel() {
        this.isShow = false;
      },
      nextPage() {
        if (this.isCheck) {
          this.$router.push('/pInfo');
        } else {
          Toast({
            message: '请阅读郑重声明并同意',
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
       * @param {Boolean} [value] - 默认是否选中
       *
       * @example
       * <tips-checkbox check></tips-checkbox>
       *
       */
      'tips-checkbox': {
        template: '<span><label><input type="checkbox" v-model="isCheck" class="tips-checkbox-input"><span class="tips-checkbox-icon"></span><slot></slot></label></span>',
        props: {
          value: {
            type: Boolean,
            required: true
          },
          label: String
        },
        computed: {
          isCheck: {
            get() {
              return this.value;
            },
            set(val) {
              this.$emit('input', val);
            }
          }
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  #tips {
    .mint-button--primary {
      background-color: @blue;
    }
  }

  .tips-dialog {
    height: 80vh;
  }

  .tips-content {
    padding: 50px 15px 5px 15px;
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
    color: @textColor;
    line-height: 1.5;
    .px2rem(padding-bottom, 60px);
  }

  .tips-label {
    color: @textColor;
  }

  .tips-notice {
    color: @blue;
    text-decoration: underline;
  }

  .tips-normal {
    color: @darkBlue;
    padding-bottom: 50px;
  }

  .tips-checkbox-input {
    display: none;
  }

  .tips-checkbox-icon {
    .px2rem(width, 14px);
    .px2rem(height, 14px);
    border: 1px solid @blue;
    display: inline-block;
    position: relative;
    top: 1px;
    background: url("../assets/images/checkbox.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .tips-checkbox-input:checked ~ .tips-checkbox-icon {
    background-image: url("../assets/images/checkbox-checked.png");
    background-size: 90% 90%;
  }

  .btn {
    .px2rem(width, 270px);
    margin: 0 auto;
    text-align: center;
    .mint-button {
      .box-shadow();
      .px2rem(margin-bottom, 20px);
    }
  }

  .tips-cancel {
    background: @blue;
    color: #fff;
    .px2rem(width, 40px);
    .px2rem(height, 20px);
    border-radius: 2px;
    .px2rem(margin-left, 30px);
  }
</style>
