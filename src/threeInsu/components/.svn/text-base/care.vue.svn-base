<template>
<!--关怀首页-->
  <div id="care">
<!--天气-->
    <img src="../assets/images/care_weather.png" width="100%" height="100%" >
<!--节日-->
<mt-tab-container v-model="active" id="container1">
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
      <!--未发送成功关怀-->
    <mt-cell title="未发送成功关怀" value="" id="cell1"></mt-cell>
    <mt-cell title="" id="cell4">
   <img  src="../assets/images/cake.jpg" width="30" >
     <span>杨晓雅</span>
    <span style="color:#5c8aff">18046474807</span>
    <img  src="../assets/images/arrow.jpg" width="10" class="arrow" style="padding-top: 5px;">
    </mt-cell>
      <!--生日客户-->
    <mt-cell title="生日客户" id="cell2">
   <img  src="../assets/images/cake.jpg" width="30" >
     <span>生日到啦~~</span>
  <router-link to="/wish" class="button_wish">送祝福</router-link>

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
     <img  src="../assets/images/arrow.jpg" width="10" class="arrow">
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
     <img  src="../assets/images/arrow.jpg" width="10" class="arrow">
    </mt-cell>

  </div>
</template>
<script>
import Vue from 'vue';
import {Tabbar, TabItem, TabContainer, TabContainerItem, Cell, Swipe, SwipeItem, MessageBox} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(MessageBox.name, MessageBox);

export default {
  name: 'care',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
MessageBox({
  title: '有未发送成功的关怀',
  message: '是否继续发送？',
  showCancelButton: true
});
</script>
<style lang="less" scoped>
#container1 {
  margin:8px auto;
}

.swipe-wrap {
    height: 8rem;
  }

</style>
