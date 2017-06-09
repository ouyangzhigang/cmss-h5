<template>
    <div class="customer_list" v-show="isShow">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" ref="loadmore" :auto-fill="false" bottomPullText="上拉加载更多" bottomDropText="释放加载" bottomLoadingText="加载中" :bottomDistance="30">
        <ul class="customer_title">
          <mt-cell :title="title" value=""></mt-cell>
          <li v-for="item in showList" class="tab-list">
            <mt-cell id="cell3">
              <div class="car_logo">
                <img :src="item.carBrandLogoUrl">
              </div>
              <div class="left">
                <span>{{item.ownerName}}<img src="../assets/images/tips.png" width="18"/></span>
                <span v-text="item.carMark"></span>
                <span v-text="item.mobileNo" style="color:#5c8aff"></span>
              </div>
              <div class="right">
                <span><font v-text="item.insuranceDueDays"></font>天</span>
                <span>保险到期</span>
              </div>
              <img  v-show="imgShow" src="../assets/images/arrow.jpg" width="10" class="arrow">
              <mt-checklist title="" v-show="selectShow" align="left" v-model="choose" :options="options"></mt-checklist>
            </mt-cell>
          </li>
        </ul>
      </mt-loadmore>
      <div class="tap_close" v-tap="close">点击收起</div>

      <!-- <div class="fixed">
        <div v-tap="addTip" v-show="addTipShow"><img src="../assets/images/addTips.png" width="30px"/><span>添加提醒</span></div>
        <div v-show="sureShow" class="colorBlue" v-tap="confirm">确定</div>
      </div> -->
    </div>


</template>

<script>
  const REFRESH_NUM = 5;
  export default {
    name: 'pa-whole-list',
    props: {
      classificationList: Array,
      titleText: String,
      isShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      title: function() {
        return this.titleText + '(' + this.classificationList.length + ')';
      },
      showList: function() {
        return this.classificationList.slice(0, this.listCount);
      }
    },
    data() {
      return {
        imgShow: true,
        selectShow: false,
        addTipShow: true,
        sureShow: false,
        options: [''],
        choose: [],
        listCount: 7,
        bottomStatus: '',
        allLoaded: false
      };
    },
    methods: {
      handleBottomChange: function(status) {
        this.bottomStatus = status;
      },
      loadBottom: function() {
        this.$refs.loadmore.onBottomLoaded();
        if (this.listCount + REFRESH_NUM >= this.classificationList.length) {
          // 若数据已全部获取完毕
          this.listCount = this.classificationList.length;
          this.allLoaded = true;
        } else {
          this.listCount += REFRESH_NUM;
        }
      },
      addTip: function() {
        this.imgShow = false;
        this.selectShow = true;
        this.addTipShow = false;
        this.sureShow = true;
      },
      confirm: function() {
        this.imgShow = true;
        this.selectShow = false;
        this.addTipShow = true;
        this.sureShow = false;
      },
      close: function() {
        this.$emit('close', false);
      }
    }
  };
</script>

<style lang="less" scoped>
@import '../assets/less/utils';
  .customer_list {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
  .car_logo{
    border: 1px solid #979797;
    .px2rem(height, 71px);
    .px2rem(width, 71px);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .car_logo img{
    .px2rem(height, 60px);
    .px2rem(width, 80px);
  }
  .tap_close {
    width:100%;
    line-height:45px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    color:#6588dc;
    text-align:center;
    padding-bottom: 40px;
    border-top: 1px solid #eee;
  }

</style>
