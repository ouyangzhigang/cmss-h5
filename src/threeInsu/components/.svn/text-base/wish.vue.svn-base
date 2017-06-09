<template>
<div id="wish">
<mt-navbar v-model="selected" id="navbar1">
  <mt-tab-item id="1">文本</mt-tab-item>
  <mt-tab-item id="2">贺卡</mt-tab-item>

</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected" id="tabContainer1">
  <mt-tab-container-item v-for="n in 3" :key="n" id="1">
    <mt-cell v-for="n in 5" :title="'内容 ' + n" :key="n"/>
   </mt-tab-container-item>
  </mt-tab-container-item>
  <mt-tab-container-item v-for="n in 3" :key="n" id="2">
   <img src="../assets/images/wish_pic.png" width="100%"/>
  </mt-tab-container-item>
</mt-tab-container>
<mt-cell title="清空文本内容" id="cell">
     <img  slot="icon" src="../assets/images/del.png" width="20"/>
      <router-link to="">查看更多模板</router-link>
   <img  src="../assets/images/arrow.jpg" width="10" style="margin-left:4px"/>
    </mt-cell>
<!--选择祝福接收人-->
  <mt-cell title="选择祝福接收人" value="" id="cell1"></mt-cell>
<mt-cell title="" id="cell4">
   <img  src="../assets/images/cake.jpg" width="30" >
     <span>杨晓雅</span>
    <span style="color:#5c8aff">18046474807</span>
    <img  src="../assets/images/arrow.jpg" width="15" class="arrow" style="padding:0">
    </mt-cell>
 <!--短信按钮-->
 <mt-button type="primary" size="large" id="btn_large">短信</mt-button>
  <!--微信按钮-->
  <mt-button type="default" size="large" id="btn_large2">微信</mt-button>
</div>
</template>
<script>
import Vue from 'vue';
import {Navbar, TabItem, TabContainer, TabContainerItem, Cell, Button, MessageBox} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
export default {
  name: 'wish',
  data() {
    return {
      selected: '1',
      active: 'tab-container1'
    };
  }
};
</script>
<style lang="less" scoped>

#cell{
  width:88%;
  margin:0 auto;
}
#tabContainer1{
  width: 300%;
    margin: 16px auto 0px auto;
    transform: translate3d(0px,0,0);
    //transform: translate3d(-320px,0,0);
   //transform: translate3d(-640px,0,0);
}
#tabContainer1 .mint-tab-container-item {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 33.33%;
    padding: 0 2%;
}
#cell .mint-cell-wrapper{
  font-size: 14px;
    background-image: none;
}
#btn_large{
  width:88%;
  background:#597ED9;
  margin:20px auto;
}
#btn_large2{
  width:88%;
  margin:0px auto 5px auto;
  border:1px solid #597ED9;
  color:#597ED9;
}
.circle{

}
</style>
