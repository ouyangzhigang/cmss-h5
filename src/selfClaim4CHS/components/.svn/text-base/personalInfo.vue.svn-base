<template>
  <div id="pInfo">
    <pa-page header="个人信息"
             title="被保险人信息"
             :tips="tips"
             icon="im-info"
             :btns="btns"
             @submit="submit">
      <pa-field label="被保人姓名"
                name="personnelName"
                v-model="personnelName.value"
                placeholder="请输入被保险人姓名"
                :validator="personnelName.validator"
                :attrs="personnelName.attrs"></pa-field>
      <pa-field label="证件类型"
                label-class="letter-4"
                name="certificateType"
                type="select"
                value-key="text"
                :slot-data="certificateType.slotData"
                grade="1"
                v-model="certificateType.value"
                :validator="certificateType.validator"></pa-field>
      <pa-field label="证件号码"
                label-class="letter-4"
                name="certificateNo"
                v-model="certificateNo.value"
                placeholder="请输入证件号码"
                :validator="certificateNo.validator"
                :attrs="certificateNo.attrs"></pa-field>
      <pa-field label="手机号码"
                label-class="letter-4"
                name="telephone"
                type="tel"
                v-model="telephone.value"
                placeholder="请输入正确的手机号码"
                :validator="telephone.validator"
                :attrs="telephone.attrs"></pa-field>
    </pa-page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {PaPage, PaField} from '@components';
  import ID_TYPE from '@json/certificateType';
  import {mapActions, mapMutations} from 'vuex';

  Vue.component(PaPage.name, PaPage);
  Vue.component(PaField.name, PaField);

  const NO_VALIDATES = ['idCard', 'passport', 'officer', 'carCard', 'hkPasser'];
  const IDCARD_LEN = 18;
  const OTHER_LEN = 21;
  const HKPASSER_LEN = 9;
  const NO_LENGTHS = [IDCARD_LEN, OTHER_LEN, OTHER_LEN, IDCARD_LEN, HKPASSER_LEN];

  export default {
    name: 'pInfo',
    data() {
      return {
        btns: [{name: '下一步', method: 'submit'}],
        personnelName: {
          value: this.$store.state.personnelName,
          validator: [
            {
              strategy: 'required',
              msg: '被保人姓名是必填选项'
            }, {
              strategy: 'name'
            }
          ],
          attrs: {
            maxlength: 50
          }
        },
        certificateType: {
          value: [ID_TYPE[this.$store.state.certificateType - 1]],
          slotData: [{
            flex: 1,
            values: ID_TYPE
          }],
          validator: [
            {
              strategy: 'required',
              msg: '证件类型是必填选项'
            }
          ]
        },
        certificateNo: {
          value: this.$store.state.certificateNo,
          validator: [
            {
              strategy: 'required',
              msg: '证件号是必填选项'
            },
            {
              strategy: NO_VALIDATES[this.$store.state.certificateType - 1]
            }
          ],
          attrs: {
            maxlength: NO_LENGTHS[this.$store.state.certificateType - 1]
          }
        },
        telephone: {
          value: this.$store.state.telephone,
          validator: [
            {
              strategy: 'required',
              msg: '手机号码是必填选项'
            }, {
              strategy: 'mobile',
              msg: '请填写正确的手机号码'
            }
          ],
          attrs: {
            maxlength: 11
          }
        },
        tips: ['姓名证件号码须于保单保持一致']
      };
    },
    watch: {
      // 当证件类型变更时，修改证件号码验证条件
      'certificateType.value'(val) {
        this.certificateNo.validator[1]['strategy'] = NO_VALIDATES[val[0].value - 1];
        this.certificateNo.attrs['maxlength'] = NO_LENGTHS[val[0].value - 1];
      }
    },
    methods: {
      ...mapMutations([
        'putCache'
      ]),
      ...mapActions([
        'checkUserInfo'
      ]),
      submit() {
        this.putCache([
          {
            name: 'personnelName',
            value: this.personnelName.value
          }, {
            name: 'telephone',
            value: this.telephone.value
          }, {
            name: 'certificateType',
            value: this.certificateType.value[0].value
          }, {
            name: 'certificateNo',
            value: this.certificateNo.value
          }
        ]);
        this.checkUserInfo({
          personnelName: this.personnelName.value,
          certificateNo: this.certificateNo.value
        }).then(res => {
          if (res.validate) {
            this.$router.push('/caseInfo');
          }
        });
      }
    }
  };
</script>

<style>

</style>
