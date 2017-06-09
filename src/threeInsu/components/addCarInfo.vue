<template>
<div id="addCarInfo">
<mt-navbar v-model="selected" id="navbar1">
  <mt-tab-item id="1">个人信息</mt-tab-item>
  <mt-tab-item id="2">车辆信息</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="selected" id="tabContainer1">
  <mt-tab-container-item v-for="n in 3" :key="n" id="1">
     <mt-field  label="*车主姓名" placeholder="" id="marginTop"></mt-field>
      <mt-field  label="*车主手机号码" placeholder="" type="tel">
       <img src="../assets/images/addTips.png" width="20px">
      </mt-field>
       <mt-field  label="备选手机号码" placeholder="" type="tel">
      <img src="../assets/images/delTel.png" width="20px">
       </mt-field>
       <mt-field  label="*交强险起止日期" placeholder="">
      <img src="../assets/images/arrow.jpg" width="10px">
       </mt-field>
       <mt-field  label="投保意愿级别" placeholder="">
     <img src="../assets/images/arrow.jpg" width="10px">
       </mt-field>
       <mt-cell title="客户标签" id="cell1">
           <mt-radio
      title=""
    v-model="value"
    :options="['个人', '团体']">
    </mt-radio>
        </mt-cell>
        <mt-cell  title="性别" id="cell1">
        <mt-radio
      title=""
      align="center"
    v-model="value"
    :options="['男 ', '女 ']">
    </mt-radio>
      </mt-cell>
       <mt-field  label="出生日期" placeholder="">
     <img src="../assets/images/arrow.jpg" width="10px">
       </mt-field>
       <mt-field  label="三者两证" placeholder="点击开始上传">
     <img src="../assets/images/arrow.jpg" width="10px">
       </mt-field>
       <mt-cell title="客户标签" id="marginTop"> </mt-cell>

      <div class="bk"> <span class="sign">爱玩偶</span><span class="sign">爱养狗</span><span class="signS">高价值客户</span><span class="signS">很爱花草</span></div>
      <div class="bk"> <span class="signS">爱玩偶</span><span class="signS">爱养狗</span><span class="signS">高价值客户</span><span class="signS">很爱花草</span></div>
       <mt-field  label="" placeholder="把客户的喜好,习惯记录在这儿吧~~" type="textarea" rows="4"></mt-field>

       <a  class="next">下一步</a>
   </mt-tab-container-item>
  <mt-tab-container-item id="2">
 <mt-field  label="*车牌号" placeholder=""></mt-field>
  <mt-field  label="VIN 码" placeholder=""></mt-field>
   <mt-field  label="发动机号" placeholder=""></mt-field>
   <a  class="save">提交</a>
 <a class="abandon">暂存</a>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
 <script>
import Vue from 'vue';
import {Cell, Field, Navbar, TabContainer, TabContainerItem, TabItem, Radio} from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(Field.name, Field);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(TabItem.name, TabItem);
Vue.component(Radio.name, Radio);
export default {
  name: 'addCarInfo',
  data() {
    return {
      selected: '1',
      value: ''
    };
  }
};
</script>
<style lang="less" scoped>
#tabContainer1 .mint-cell-text{
  font-size:12px;
}
#cell1 .mint-radiolist .mint-cell{
  display:inline-block;
  background-image:none;
}
#cell1 .mint-radiolist .mint-cell-wrapper{
  border:none;
  width: 106px;
}
.sign,.signS{
display:inline-block;
  font-size:12px;
  width:21%;
  height:25px;
  line-height:25px;
  border:1px solid #597ED9;
  border-radius:2px;
  text-align:center;
  color:#597ED9;
  margin:2%;
}
.signS{
  border:1px solid #B9B9B9;
  color:#B9B9B9;
}
.mint-radio-label{
  font-size:12px;
}
</style>
