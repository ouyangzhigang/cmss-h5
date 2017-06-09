<template>
  <div id="applyResult">
    <pa-page :header="header" :btns="btns" progress="4" @submit="submit">
      <template v-if="isSuc">
        <p>报案号<span class="tx-bold" v-text="reportNo"></span>，理赔结论预计在10个工作日内反馈您，您可在首页“理赔记录”查看案件进度。若有疑问请拨打<a class="telInfo"
                                                                                            href="tel:95511">95511</a>。
        </p>
        <p>请您妥善保管理赔材料，如审核通过，我司可能需回收您的理赔材料后再进行支付！</p>
        <img class="applySuc_icon" src="../assets/images/applySuc.png" alt=""/>
      </template>
      <template v-if="!isSuc">
        <p>报案号<span class="tx-bold" v-text="reportNo"></span>，申请失败。若有疑问请拨打<a class="telInfo" href="tel:95511">95511</a>。</p>
        <img class="applyFail_icon" src="../assets/images/applyFail.png" alt=""/>
      </template>
    </pa-page>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {PaPage} from '@components';

  Vue.component(PaPage.name, PaPage);

  export default {
    name: 'applySuc',
    data() {
      return {
        isSuc: this.$route.params.result === 'success',
        reportNo: this.$store.state['reportNo'],
        btns: [{name: '返回首页', method: 'submit'}]
      };
    },
    computed: {
      header() {
        return this.isSuc ? '申请成功' : '申请失败';
      }
    },
    methods: {
      submit() {
        this.$router.push('/home');
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  #applyResult {
    .pa-panel {
      padding: 10px;
      border: none;
      background-color: transparent;
    }
    .align-center{
      position: absolute;
      width: 100%;
      .px2rem(bottom, 100px);
    }
  }

  .telInfo {
    color: @orange;
  }

  .applySuc_icon, .applyFail_icon {
    margin: 50px auto;
    .px2rem(width, 120px);
    .px2rem(height, 120px);
    display: block;
  }
  .tx-bold {
    font-weight: 700;
  }
  #applyResult .pa-page {
    min-height: 667px;
  }
</style>
