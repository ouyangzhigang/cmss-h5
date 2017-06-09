<template>
  <div id="modifyCase">
    <pa-page header="信息确认"
             :title="title"
             :tips="tips"
             @submit="submit"
             @modify="modify"
             :btns="btns"
             progress="0"
             ref="page">
      <pa-field label="被保险人"
                name="name"
                v-model="name.value"
                readonly></pa-field>
      <pa-field label="出险时间"
                name="accidentDate"
                type="datetime"
                readonly
                v-model="accidentDate.value"
                :end-date="accidentDate.endDate"></pa-field>
      <pa-field label="联系电话"
                name="telephone"
                v-model="telephone.value"
                type="tel"
                :readonly="telephone.readonly"
                :validator="telephone.validator"
                :attrs="telephone.attrs"></pa-field>
      <pa-field label="申请类型"
                name="claimType"
                type="multiple"
                multiple
                v-model="claimType.value"
                placeholder="请选择申请类型"
                :readonly="claimType.readonly"
                :validator="claimType.validator"
                :tips="claimType.tips"
                :options="claimType.options"></pa-field>
      <pa-field label="领款人"
                name="receiveName"
                v-model="receiveName.value"
                readonly
                v-if="receiveName.isShow"></pa-field>
    </pa-page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {MessageBox} from 'mint-ui';
  import {Common} from '../../common/untils';
  import {PaPage, PaField} from '@components';
  import CLAIM_TYPE from '@json/claimType';
  import {mapActions} from 'vuex';

  Vue.component(PaPage.name, PaPage);
  Vue.component(PaField.name, PaField);
  export default {
    name: 'modifyCaseInfo',
    data() {
      return {
        caseStatus: this.$store.state.caseStatus,
        title: this.$store.state.personnelName + '您的报案信息如下',
        name: {
          value: this.$store.state.personnelName
        },
        accidentDate: {
          value: this.initDate(this.$store.state.accidentDate),
          endDate: new Date()
        },
        telephone: {
          value: this.$store.state.telephone,
          readonly: this.$store.state.caseStatus === '3' || this.$store.state.caseStatus === '4',
          validator: [{
            strategy: 'required',
            msg: '联系电话是必填选项'
          }, {
            strategy: 'mobile',
            msg: '请填写正确的联系电话'
          }],
          attrs: {
            maxlength: 11
          }
        },
        claimType: {
          value: '',
          options: [],
          readonly: this.$store.state.caseStatus === '3' || this.$store.state.caseStatus === '4',
          validator: [{
            strategy: 'required',
            msg: '申请类型是必填选项'
          }],
          tips: ['根据您保单的保障责任和实际出险情况选择，可多选']
        },
        receiveName: {
          value: this.$store.state.receiveName,
          isShow: this.caseStatus === '3' || this.caseStatus === '4'
        }
      };
    },
    watch: {
      'claimType.value'(val) {
        if (val instanceof Array) {
          let types = this.serializeClaimType();
          const OTHER_TYPE = '5';
          if (types.indexOf(OTHER_TYPE) !== -1) {
            this.accidentDate.enddate = undefined;
          } else {
            this.accidentDate.enddate = new Date();
            this.accidentDate.value = new Date();
          }
        }
      }
    },
    created() {
      this.initCalimType();
    },
    computed: {
      btns() {
        if (this.caseStatus === '3' || this.caseStatus === '4') {
          return [
            {
              name: '确认',
              method: 'submit'
            }
          ];
        } else {
          return [
            {
              name: '确认',
              method: 'submit'
            },
            {
              name: '修改',
              method: 'modify',
              className: 'modify-btn'
            }
          ];
        }
      },
      tips() {
        if (this.caseStatus === '1' || this.caseStatus === '2') {
          return ['点击修改，可更新联系电话和索赔类型'];
        } else if (this.caseStatus === '3' || this.caseStatus === '4') {
          return [this.$store.state.backReason + '。若有疑问，可拨打95511咨询'];
        }
      }
    },
    methods: {
      ...mapActions([
        'updateReport'
      ]),
      initDate(str) {
        if (str) {
          let arr = str.split(' ');
          let arr1 = [];
          let arr2 = [];
          if (arr.length > 0) {
            arr1 = arr[0].split('-');
          }
          if (arr.length > 1) {
            arr2 = arr[1].split(':');
          }
          return new Date(arr1[0], arr1[1] - 1, arr1[2], arr2[0] || 0, arr2[1] || 0, 0);
        } else {
          return '';
        }
      },
      initCalimType() {
        let options = Common.extend(CLAIM_TYPE);
        if (this.$store.state.claimType) {
          let arr = this.$store.state.claimType.split('|');
          let value = [];
          options.map(group => {
            group.options.map(item => {
              if (arr.indexOf(item.value) !== -1) {
                item.active = true;
                value.push(item);
              }
            });
          });
          this.claimType.value = value;
          this.claimType.options = options;
        } else {
          this.claimType.options = options;
        }
      },
      serializeClaimType() {
        let claimType = [];
        this.claimType.value.forEach(item => {
          claimType.push(item.value);
        });
        return claimType.sort().join('|');
      },
      check() {
        let claimType = this.serializeClaimType();
        if (this.$store.state.claimType !== claimType || this.telephone.value !== this.$store.state.telephone) {
          return false;
        }
        return true;
      },
      submit() {
        if (this.caseStatus !== '3' && this.caseStatus !== '4' && !this.check()) {
          MessageBox({
            title: '提示',
            message: '内容已修改，请先点击修改按钮'
          });
          return;
        }
        this.$router.push('/bankInfo');
      },
      modify() {
        if (this.$refs.page.check()) {
          if (this.check()) {
            MessageBox({
              title: '提示',
              message: '内容未修改，不需要提交修改'
            });
          } else {
            let claimType = this.serializeClaimType();
            this.updateReport({
              claimType: claimType,
              telephone: this.telephone.value
            });
          }
        }
      }
    }
  };
</script>

<style lang="less">
  .pa-page-progress {
    display: none;
  }

  #modifyCase {
    .modify-btn {
      background-color: #fff;
      color: #26a2ff;
    }
    .pa-dialog {
      height: 225px;
    }
    .pa-field .pa-dialog-wrap {
      margin-top: 0;
      height: 150px;
    }
  }

  @media screen and (max-width: 370px) {
    #modifyCase {
      .pa-dialog {
        height: 275px;
      }
      .pa-field .pa-dialog-wrap {
        height: 200px;
      }
    }
  }
</style>
