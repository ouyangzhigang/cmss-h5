<template>
  <div id="bankInfo">
    <pa-page header="账号录入"
             title="账户信息"
             icon="im-card"
             :tips="tips"
             :btns="btns"
             progress="2"
             @submit="submit">
      <pa-field label="账户户名"
                name="account"
                placeholder="请输入领款人姓名"
                v-model="account.value"
                :readonly="account.readonly"
                :validator="account.validator"
                :attrs="account.attrs"></pa-field>
      <pa-field label="银行卡号"
                name="creditCard"
                placeholder="开卡户名须与账户户名保持一致"
                type="tel"
                v-model="creditCard.value"
                :readonly="creditCard.readonly"
                :validator="creditCard.validator"
                :attrs="creditCard.attrs"></pa-field>
      <pa-field label="开户银行"
                name="bank"
                type="select"
                :slotData="bank.slotData"
                :readonly="bank.readonly"
                value-key="bankName"
                placeholder="请选择"
                v-model="bank.value"></pa-field>
    </pa-page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {PaPage, PaField} from '@components';
  import BANK_DATA from '@json/bankList';
  import {mapActions, mapMutations} from 'vuex';

  Vue.component(PaPage.name, PaPage);
  Vue.component(PaField.name, PaField);


  export default {
    name: 'bankInfo',
    data() {
      return {
        btns: [{name: '下一步', method: 'submit'}],
        account: {
          value: this.$store.state.receiveName || this.$store.state.personnelName,
          readonly: this.$store.state['isAdult'] === 'Y',
          validator: [
            {
              strategy: 'required',
              msg: '账户户名是必填选项'
            }, {
              strategy: 'name'
            }
          ],
          attrs: {
            maxlength: 50
          }
        },
        creditCard: {
          value: '',
          readonly: false,
          validator: [
            {
              strategy: 'required',
              msg: '银行卡号是必填选项'
            }, {
              strategy: 'bank'
            }
          ],
          attrs: {
            maxlength: 21
          }
        },
        bank: {
          value: '',
          readonly: false,
          slotData: [
            {
              flex: 1,
              values: BANK_DATA
            }
          ],
          validator: [
            {
              strategy: 'required',
              msg: '开户银行是必填选项'
            }
          ]
        }
      };
    },
    created() {
      this.init();
    },
    computed: {
      tips() {
        let tips = ['不支持信用卡领款'];
        if (this.$store.state.isAdult === 'N') {
          tips.push('被保险人为未成年人，可将赔款支付其父亲或母亲，如需转账父亲或母亲，请注意修改账户户名，并在单证上传页面上传监护关系证明（如初生证，户口簿）和领款人身份证明');
        }
        return tips;
      }
    },
    methods: {
      ...mapMutations([
        'putCache'
      ]),
      ...mapActions([
        'paymentInfoQuery'
      ]),
      init() {
        this.paymentInfoQuery().then(res => {
          if (res.validate) {
            this.creditCard.readonly = true;
            this.bank.readonly = true;
            this.account.value = res.data['clientName'];
            this.creditCard['value'] = res.data['bankAccount'];
            this.bank.value = [];
            this.bank.value.push({
              bankCode: res.data['bankCode'],
              bankName: res.data['bankName']
            });
          }
        });
      },
      submit() {
        this.putCache([
          {
            name: 'receiveName',
            value: this.account.value
          },
          {
            name: 'bankCode',
            value: this.bank.value[0]['bankCode']
          },
          {
            name: 'account',
            value: this.creditCard['value']
          },
          {
            name: 'bankName',
            value: this.bank.value[0]['bankName']
          }
        ]);
        this.$router.push('/post/modify');
      }
    }
  };
</script>

<style>
</style>
