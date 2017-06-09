<template>
  <div id="caseInfo">
    <pa-page header="报案"
             title="案件信息"
             icon="im-info"
             :tips="tips"
             :btns="btns"
             @submit="submit">
      <pa-field label="申请类型"
                name="claimType"
                type="multiple"
                v-model="claimType.value"
                placeholder="请填写申请类型"
                :options="claimType.options"
                :tips="claimType.tips"
                multiple
                :validator="claimType.validator"></pa-field>
      <pa-field label="出险日期"
                name="accidentDate"
                type="datetime"
                v-model="accidentDate.value"
                placeholder="请选择出险日期"
                :end-date="accidentDate.enddate"></pa-field>
      <pa-field label="出险地点"
                name="accidentPlace"
                v-model="accidentPlace.value"
                type="site"
                placeholder="请选择出险地点"
                :validator="accidentPlace.validator"></pa-field>
      <pa-field id="accidentCause"
                label="出险经过"
                name="accidentCause"
                type="textarea"
                v-model="accidentCause.value"
                :attrs="accidentCause.attrs"
                placeholder="请填写出险经过，不超过200个字"
                :validator="accidentCause.validator"></pa-field>
    </pa-page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import CLAIM_TYPE from '@json/claimType';
  import {Common} from '../../common/untils';
  import {PaPage, PaField} from '@components';
  import {mapActions} from 'vuex';

  Vue.component(PaPage.name, PaPage);
  Vue.component(PaField.name, PaField);

  export default {
    name: 'caseInfo',
    data() {
      return {
        btns: [{name: '报案', method: 'submit'}],
        claimType: {
          value: '',
          options: [],
          validator: [
            {
              strategy: 'required',
              msg: '申请类型是必填选项'
            }
          ],
          tips: ['根据您保单的保障责任和实际出险情况选择，可多选']
        },
        accidentDate: {
          value: this.initDate(this.$store.state.accidentDate),
          enddate: new Date()
        },
        accidentPlace: {
          value: this.$store.state.accidentPlace,
          validator: [
            {
              strategy: 'required',
              msg: '出险地点是必填选项'
            }
          ]
        },
        accidentCause: {
          value: this.$store.state.accidentCause,
          validator: [
            {
              strategy: 'required',
              msg: '出险经过是必填选项'
            }
          ],
          attrs: {
            maxlength: 200
          }
        },
        tips: []
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
          // 动态修改tips内容
          this.tips = [];
          if (types.indexOf('1') !== -1 || types.indexOf('2') !== -1) {
            this.tips.push('意外医疗出险日期：请填写事故发生日期。');
            this.tips.push('疾病医疗出险日期：请填写最早就诊的医疗发票日期，保险期间内的费用可一次性申请');
          }
          if (types.indexOf('3') !== -1 || types.indexOf('4') !== -1) {
            this.tips.push('申请类型含航班延误，行李延误时：出险日期请填写原定航班起飞日期');
          }
          if (types.indexOf('5') !== -1) {
            this.tips.push('申请类型含其他时：旅行变更、取消，请填写您保单的旅行责任开始日期,其他事故请填写事故发生日期');
          }
        }
      }
    },
    created() {
      this.initCalimType();
    },
    methods: {
      ...mapActions([
        'selfReportClaim'
      ]),
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
          return new Date();
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
      addZero(val) {
        const MAX_NUM = 10;
        if (val < MAX_NUM) {
          return '0' + val;
        } else {
          return val;
        }
      },
      getDateStr(val) {
        let str = '';
        if (val instanceof Date) {
          str += val.getFullYear() + '-';
          str += (val.getMonth() + 1) + '-';
          str += val.getDate() + ' ';
          str += this.addZero(val.getHours()) + ':';
          str += this.addZero(val.getMinutes()) + ':00';
        }
        return str;
      },
      serializeClaimType() {
        let claimType = [];
        this.claimType.value.forEach(item => {
          claimType.push(item.value);
        });
        return claimType.sort().join('|');
      },
      submit() {
        let claimType = this.serializeClaimType();
        let time = this.getDateStr(this.accidentDate.value);
        // textarea 五笔输入this.accidentCause.value取值乱码 手动取值
        let accidentCause = document.querySelector('#accidentCause textarea').value;
        this.selfReportClaim({
          accidentTime: time,
          claimType: claimType,
          accidentCause: accidentCause,
          accidentPlace: this.accidentPlace.value.replace(/-/g, ' ')
        }).then(res => {
          if (res.validate) {
            if (res.data.canClaim === 'Y') {
              this.updateReport({
                claimType: claimType,
                telephone: this.$store.state.telephone
              }).then(res => {
                if (res.validate) {
                  this.$router.push('/bankInfo');
                }
              });
            } else {
              this.$router.push('/bankInfo');
            }
          }
        });
      }
    }
  };
</script>

<style lang="less">
  #caseInfo {
    .pa-dialog {
      height: 225px;
    }
    .pa-field .pa-dialog-wrap {
      margin-top: 0;
      height: 150px;
    }
  }

  @media screen and (max-width: 370px) {
    #caseInfo {
      .pa-dialog {
        height: 275px;
      }
      .pa-field .pa-dialog-wrap {
        height: 200px;
      }
    }
  }
</style>
