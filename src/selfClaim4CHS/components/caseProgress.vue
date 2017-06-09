<template>
  <div id="caseProgress">
    <div class="caseProgress-head">
      <p class="caseProgress-p">报案号：<span v-text="reportNo"></span></p>
      <p class="caseProgress-p">被保险人：<span v-text="personnelName"></span></p>
    </div>
    <div class="caseProgress-wrap"
         ref="wrap">
      <i class="caseProgress-panel-line"
         :style="lineStyle"></i>
      <ul class="caseProgress-panel"
          v-if="caseId === '1'">
        <li class="caseProgress-item bold">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green"><span class="timeline-icon"></span></div>
          <div class="flex-row">
            <div class="flex-colunm">
              <p class="tx-bold">客户上传材料</p>
              <span class="caseProgress-detail">您还未上传材料</span>
            </div>
            <router-link to="/modifyCaseInfo"
                         class="caseProgress-link">点击上传
            </router-link>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>案件审核</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>递交材料原件</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>结案支付</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '2'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-colunm">
            <p class="tx-bold">客户上传材料</p>
            <span class="caseProgress-detail">您的案件正在审核，预计10个工作日内反馈审核结果</span>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>案件审核</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>递交材料原件</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>结案支付</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '3'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green"><span class="timeline-icon"></span></div>
          <div class="flex-colunm">
            <p class="tx-bold">案件审核</p>
            <span class="caseProgress-detail">您的案件正在审核，预计10个工作日内反馈审核结果</span>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>递交材料原件</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>结案支付</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '4'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-row">
            <div class="flex-colunm">
              <p>上传材料</p>
            </div>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <div class="flex-colunm">
            <div class="flex-row">
              <p class="tx-bold">案件审核</p>
              <router-link to="/modifyCaseInfo"
                           class="caseProgress-link">点击上传
              </router-link>
            </div>
            <span class="caseProgress-detail" v-if="backReason">{{backReason}}。若有疑问，可拨打95511咨询。</span>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>递交材料原件</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>结案支付</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '5'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-colunm">
            <p>您的案件已完成审核</p>
            <p class="caseProgress-detail">
              <span>赔付金额 <em v-text="claimAmount"></em> </span>
              <span>领款人 <em v-text="receiveName"></em> </span>
            </p>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green"><span class="timeline-icon"></span></div>
          <div class="flex-row">
            <div class="flex-colunm">
              <p class="tx-bold">请提供纸质原件</p>
              <div class="flex-row">
                <a href="javascript:void(0)"
                   class="caseProgress-search"
                   v-tap="pointSearch">网点查询</a>
                <router-link to="/post/view"
                             class="caseProgress-search">已上传材料查询
                </router-link>
              </div>
            </div>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-blue"><span class="timeline-icon"></span></div>
          <p>结案支付</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '6' || caseId === '9'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-colunm">
            <p class="tx-bold">您的案件已完成审核</p>
            <p class="caseProgress-detail">
              <span>赔付金额 <em v-text="claimAmount"></em> </span>
              <span>领款人 <em v-text="receiveName"></em> </span>
            </p>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>原件已审核
          </p>

        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>支付成功</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '7' || caseId === '10'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-colunm">
            <p>您的案件已完成审核</p>
            <p class="caseProgress-detail">
              <span>赔付金额 :<em v-text="claimAmount"></em> </span>,
              <span>领款人 :<em v-text="receiveName"></em> </span>
            </p>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>原件已审核</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green"><span class="timeline-icon"></span></div>
          <p class="tx-bold">支付失败</p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '8'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>案件审核
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon"></span></div>
          <div class="flex-colunm">
            <p class="tx-bold">原件和您自助上传材料不符，案件重新审核</p>
          </div>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon"></span></div>
          <p>结案支付
          </p>
        </li>
      </ul>
      <ul class="caseProgress-panel"
          v-if="caseId === '11'">
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>报案成功</p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <p>客户上传材料
          </p>
        </li>
        <li class="caseProgress-item">
          <div class="timeline timeline-green">
            <span class="timeline-icon timeline-success"><i class="im-cross"></i></span></div>
          <div class="flex-colunm">
            <p class="tx-bold">案件审核不通过</p>
            <p class="caseProgress-detail">
              <span class="caseProgress-detail" v-if="backReason">您的案件因【{{backReason}}】审核不通过。若有疑问，可拨打95511咨询。</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <template v-if="caseId === '5'">
      <ul class="pa-page-tips">
        <li class="pa-page-tip">
          <i class="iconfont icon-tip"></i>
          <p class="tx-red">您可以选择快递或者上门将材料原件交予我司后，赔款支付到您提供的银行账户，30日内未提供视为放弃本次自助申请，如需继续申请，请您至柜面办理。</p>
        </li>
      </ul>
    </template>
    <template v-if="caseId === '7' || caseId === '10'">
      <ul class="pa-page-tips">
        <li class="pa-page-tip">
          <i class="iconfont icon-tip"></i>
          <p>
            您的案件支付失败，请拨打95511联系我司工作人员进行账号修改或等待我司工作人员主动联系你。
            <span class="tx-red">
              请勿泄露您的银行卡密码或短信验证码。
            </span>
          </p>
        </li>
      </ul>
    </template>
    <div class="pa-page-bottom">
      <router-link class="pa-page-btn"
                   to="/">返回首页
      </router-link>
    </div>
    <p class="align-center">
      <span class="pa-page-normal"
            v-tap="openDialog">常见问题</span>
    </p>
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
  import {PaDialog} from '@components';

  Vue.component(PaDialog.name, PaDialog);

  export default {
    name: 'caseProgress',
    data() {
      return {
        caseId: this.$route.params.id,
        backReason: this.$store.state['backReason'],
        claimAmount: this.$store.state['claimAmount'],
        reportNo: this.$store.state['reportNo'],
        personnelName: this.$store.state['personnelName'],
        receiveName: this.$store.state['receiveName'],
        lineStyle: '',
        isShow: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        let UL = this.$refs.wrap.children[1];
        let height = (UL.getClientRects()[0].height - UL.children[UL.children.length - 1].getClientRects()[0].height - '48') + 'px';
        this.lineStyle = {
          height: height
        };
      });
    },
    methods: {
      openDialog() {
        this.isShow = true;
      },
      pointSearch() {
        this.$router.push('/salesSearch');
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  #caseProgress {
    .pa-page-tips {
      .px2rem(margin-left, 15px);
      padding-top: 10px;
      padding-right: 10px;
      font-size: 12px;
      color: #666;
    }

    .tx-red {
      color: @orange;
      line-height: 12px;
    }

    .pa-page-tip {
      display: flex;
      padding: 2px 0;
      line-height: 12px;
    }

    .pa-page-bottom {
      .px2rem(width, 270px);
      margin: 40px auto 0;
      text-align: center;
    }

    .pa-page-btn {
      .btn(40px, 100%, @blue, 18px);
      .px2rem(margin-bottom, 20px);
      display: block;
      line-height: 40px;
    }

    .align-center {
      text-align: center;
    }

    .pa-page-normal {
      color: @darkBlue;
    }
  }

  .caseProgress-head {
    padding: 0 20px;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    color: @blue;
    text-align: center;
    display: flex;
    overflow: hidden;
  }

  .caseProgress-p {
    display: flex;
    flex: 4;
    overflow: hidden;
    &:nth-last-of-type(1) {
      flex: 3;
      justify-content: flex-end;
    }
  }

  .caseProgress-wrap {
    background-color: #fff;
    position: relative;
    .px2rem(min-height, 328px);
    .caseProgress-panel-line {
      position: absolute;
      top: 23px;
      .px2rem(left, 90px);
      width: 4px;
      background: -webkit-linear-gradient(top, #7dbb00, #50c6e3);
    }
  }

  .caseProgress-panel {
    padding: 22px 0;
  }

  .timeline {
    .px2rem(padding-left, 80px);
    .px2rem(margin-right, 47px);
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    top: -3px;
    &.timeline-green {
      .timeline-icon {
        background-color: #7dbb00;
        border-color: #cae499;
      }
    }
    &.timeline-blue {
      .timeline-icon {
        background-color: @blue;
        border-color: #a7e2f1;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .timeline {
      .px2rem(padding-left, 50px);
      .px2rem(margin-right, 20px);
    }

    .caseProgress-wrap .caseProgress-panel-line {
      .px2rem(left, 60px);
    }
  }

  .caseProgress-item {
    display: flex;
    min-height: 65px;
    font-size: 20px;
    padding-right: 10px;
    &.bold {
      font-weight: 700;
    }
    &:nth-last-of-type(1) {
      min-height: initial;
    }
  }

  .timeline-icon {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    position: relative;
    .im-cross {
      color: #fff;
      .px2rem(font-size, 12px);
      position: absolute;
      transform: scale(0.8);
      .px2rem(left, 2px);
      .px2rem(top, 4px);
    }
  }

  .caseProgress-detail {
    color: #999;
    font-size: 14px;
    padding-top: 5px;
    padding-right: 10px;
    line-height: 14px;
  }

  .caseProgress-link, .caseProgress-search {
    font-size: 13px;
    background-color: @blue;
    color: #fff;
    border-radius: 4px;
  }

  .caseProgress-link {
    margin-left: 10px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: relative;
    top: -3px;
  }

  .caseProgress-search {
    padding: 5px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
  }

  .flex-colunm {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .tx-bold {
    font-weight: 700;
  }

</style>
