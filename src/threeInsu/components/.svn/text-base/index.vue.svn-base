<template>
<!--理赔服销-->
<div id="index">
<!--banner-->
    <mt-tabbar  id="tabbar-bar1">
      <mt-tab-item id="tab-bar1">
        <img slot="icon" src="../assets/images/totalMoney.jpg"/>
        <p>总收入</p>
        <label class="money" v-text="totalMoney"></label>
      </mt-tab-item>
      <div class="line"></div>
      <mt-tab-item id="tab-bar2">
        <img slot="icon" src="../assets/images/currentMoney.jpg"><p>今日收入</p>
        <label class="money" v-text="currentMoney"></label>
      </mt-tab-item>
    </mt-tabbar>
  <!--我的服务-->
  <mt-cell title="我的服务" value="" id="cell1"></mt-cell>
    <mt-tabbar  id="tabbar-bar2" class="tabbar-bar">
      <mt-tab-item id="tab-bar1">
      <div>
        <router-link slot="icon" to="noProCustomer">
          <div class="mint-tab-item-icon" >
            <img src="../assets/images/noProCustomer.jpg">
          </div>
        </router-link>
      </div>
        未转保客户
      </mt-tab-item>
      <mt-tab-item id="tab-bar3">
        <div>
          <router-link slot="icon" to="baike">
            <div class="mint-tab-item-icon">
              <img slot="icon" src="../assets/images/various.jpg">
            </div>
          </router-link>
        </div>
        百科
      </mt-tab-item>
<!--       <mt-tab-item id="tab-bar2">
        <router-link slot="icon" to="index">
          <div class="mint-tab-item-icon">
            <img slot="icon" src="../assets/images/renewCustomer.jpg">
          </div>
        </router-link>
        续保客户
      </mt-tab-item>
      <mt-tab-item id="tab-bar3">
        <router-link slot="icon" to="index">
          <div class="mint-tab-item-icon">
            <img slot="icon" src="../assets/images/changeCustomer.jpg">
          </div>
        </router-link>
        新增客户
      </mt-tab-item>
    </mt-tabbar>
    <mt-tabbar  id="tabbar-bar3" class="tabbar-bar">
      <mt-tab-item id="tab-bar1">
        <router-link slot="icon" to="index">
          <div class="mint-tab-item-icon">
            <img slot="icon" src="../assets/images/care.jpg">
          </div>
        </router-link>
        关怀
      </mt-tab-item>
      <mt-tab-item id="tab-bar2">
        <router-link slot="icon" to="index">
          <div class="mint-tab-item-icon">
            <img slot="icon" src="../assets/images/renewCustomer.jpg">
          </div>
        </router-link>
        提醒
      </mt-tab-item>
      <mt-tab-item id="tab-bar3">
        <router-link slot="icon" to="index">
          <div class="mint-tab-item-icon">
            <img slot="icon" src="../assets/images/various.jpg">
          </div>
        </router-link>
        百科
      </mt-tab-item>
    </mt-tabbar> -->

    <!-- <mt-tabbar  id="tabbar-bar4" class="tabbar-bar">
      <mt-tab-item id="tab-bar2">
        <img slot="icon" src="../assets/images/changeCustomer.jpg">修改客户
      </mt-tab-item>
      <mt-tab-item id="tab-bar3" href="/delCustomer">
        <img slot="icon" src="../assets/images/delCustomer.jpg">删除客户
      </mt-tab-item>
     -->
    <!--节日-->
    </mt-tabbar>
  <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <div class="swipe-wrap">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="../assets/images/holiday.jpg" alt="" width="100%" height="100%" />
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/images/holiday.jpg" alt="" width="100%" height="100%" />
            </mt-swipe-item>
          </mt-swipe>
        </div>

      </mt-tab-container-item>
    </mt-tab-container>

  <!--需关怀客户-->
    <!-- <mt-cell title="需关怀客户" id="cell2">
   <img  src="../assets/images/cake.jpg" width="24" height="24">
     <span>生日到啦~~</span>
   <a href="/wish" class="button_wish">送祝福</a>
    </mt-cell>
    <mt-cell title="" id="cell3">

     <img  src="../assets/images/carLogo.jpg" width="58" >
    <div class="left">
   <span>杨小丫</span>
      <span>闽B88888</span>
       <span style="color:#5c8aff">18046474807</span>
     </div>
      <div class="right">
    <span><font>10</font>天</span>
    <span>保险到期</span>
    </div>
     <img  src="../assets/images/arrow.jpg" width="15" class="arrow">
    </mt-cell> -->
</div>
</template>
<script>
import Vue from 'vue';
import {Tabbar, TabItem, TabContainer, TabContainerItem, Cell, Swipe, SwipeItem} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


export default {
  name: 'index',
  mounted: function() {
    this.init();
  },
  data() {
    return {
      active: 'tab-container1',
      selected: 'tab-bar1',
      incomeAll: '',
      incomeCurr: ''
    };
  },
  computed: {
    totalMoney() {
      let money = '¥' + (typeof this.incomeAll === 'number' ? this.incomeAll : '--');
      return money;
    },
    currentMoney() {
      let money = '¥' + (typeof this.incomeCurr === 'number' ? this.incomeCurr : '--');
      return money;
    }
  },
  methods: {
    init() {
      let requestData = {
        userId: this.$store.state.userId,
        certificateNo: this.$store.state.certificateNo
      };
      if (window.localStorage.userId) {
        if (requestData.userId !== localStorage.userId) {
          localStorage.setItem('userId', requestData.userId);
          localStorage.removeItem('history');
        }
      } else {
        localStorage.setItem('userId', requestData.userId);
      }
      this.$http.post('do/app/transmitAction/getTransmitData',
        {
          'requestData': JSON.stringify(requestData),
          'urlMapping': 'claim.selfClaim.getMaintainerUmTodayIncome'
        }
      ).then(res => {
        this.incomeAll = res.data.data.data.incomeAll;
        this.incomeCurr = res.data.data.data.incomeCurr;
      }).catch(err => {
        console.error(err);
      });
    }
  }
};
</script>

<style lang="less">
@import '../assets/less/utils';
@import '../assets/less/mint-ui-fix';
.line {
  position: absolute;
  width: 1px;
  height: 48px;
  background: #fff;
  top: 28px;
  left: 50%;
}

#tabbar-bar1 p{
  font-size: 17px;
}

#tabbar-bar1 {
  position: relative;
  .px2rem(height, 160px);
  background: rgb(92,138,255);
  margin-bottom: 10px;
}

#tabbar-bar2 {
  position:static;
  .px2rem(height, 100px);
  background: #fff;
  .px2rem(margin-bottom, 10px);
}

#tabbar-bar3 {
  position:static;
  .px2rem(height, 100px);
}
#tabbar-bar4 {
  position:static;
  .px2rem(height, 100px);
}
#cell1 {
  position:static;
}
.mint-tab-container {
  position:static;
}
.swipe-wrap {
  .px2rem(height, 100px);
}
#tabbar-bar1 .mint-tab-item {
  color:#fff;
  border:none;
}

#tabbar-bar1 .mint-tab-item-label {
  margin-top:0rem;
}
.mint-tab-item-label {
  margin-top: 1rem;
}
.mint-tab-item-icon {
  width: 48px!important;
  height:auto!important;
}
#tabbar-bar1 .mint-tab-item-icon {
  margin:20px auto 5px;
}
.money {
  font-size: 20px;
  line-height: 2;
}

#cell2,#cell3 {
  position:static;
}

#cell3 .mint-cell-title {
  -webkit-box-flex: 0;
  -ms-flex: 0;
  flex: 0;
}
</style>
