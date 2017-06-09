<template>
<div id="renewCustomer">
  <mt-search
    v-model="value"
    cancel-text=""
    placeholder="输入车牌或者用户姓名查找用户"
    id="search1">
  </mt-search>
<div class="select">
<ul>
<li v-bind:class="{colorBlue:pickerShow}">保险到期<a v-tap="select"><img src="../assets/images/down_arrow.png" width="18"/></a></li>
<li v-bind:class="{colorBlue:pickerShow2}">投保意愿<a v-tap="select2"><img src="../assets/images/down_arrow.png" width="18"/></a></li>
<li v-bind:class="{colorBlue:pickerShow3}">客户类型<a v-tap="select3"><img src="../assets/images/down_arrow.png" width="18"/></a></li>
</ul>
<div class="bkg" v-show="pickerShow||pickerShow2||pickerShow3" v-tap="cancel"></div>
<mt-picker  v-show="pickerShow" :slots="slots" @change="onValuesChange" id="picker_id"></mt-picker>
 <mt-picker v-show="pickerShow2" :slots="slots2" @change="onValuesChange" id="picker_id"></mt-picker>
 <mt-picker v-show="pickerShow3" :slots="slots3" @change="onValuesChange" id="picker_id"></mt-picker>
  </div>
<div>
               <ul class="customer_title">
               <mt-cell title="需促成续保的客户(2)" value="" id="cell1"></mt-cell>
               <li>
   <mt-cell title="" id="cell3">
     <img  src="../assets/images/carLogo.jpg" width="58" >
    <div class="left">
   <span>杨小丫<img src="../assets/images/tips.png" width="18"/></span>
      <span>闽B88888</span>
       <span style="color:#5c8aff">18046474807</span>
     </div>
      <div class="right">
    <span><font>10</font>天</span>
    <span>保险到期</span>
    </div>
     <img  src="../assets/images/arrow.jpg" width="10" class="arrow">
    </mt-cell>
    </li>
    </ul>
     <ul class="customer_title">
      <mt-cell title="需多互动，关怀的客户(1)" value="" id="cell1"></mt-cell>
               <li>
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
    </li>
    </ul>
    <ul class="customer_title">
      <mt-cell title="需赠送实物关怀的客户(1)" value="" id="cell1"></mt-cell>
               <li>
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
    </li>
    </ul>
   </div>
     <div class="fixed"><div><img src="../assets/images/addTips.png" width="30px"/><span>添加提醒</span></div></div>
  </div>
  </template>
  <script>
import Vue from 'vue';
import {Search, Cell, Picker} from 'mint-ui';
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Picker.name, Picker);
export default {
  name: 'renewCustomer',
  data() {
    return {
      value: '',
      pickerShow: false,
      pickerShow2: false,
      pickerShow3: false,
      slots: [
        {
          flex: 1,
          values: ['三个月内', '三到六个月', '六到九个月内', '九个月后'],
          className: 'slot1',
          textAlign: 'left'
        }
      ],
      slots2: [
        {
          flex: 1,
          values: ['非常愿意', '一般', '不愿意'],
          className: 'slot2',
          textAlign: 'center'
        }
      ],
      slots3: [
        {
          flex: 1,
          values: ['个人', '团体'],
          className: 'slot3',
          textAlign: 'right'
        }
      ]
    };
  },
  methods: {
    onValuesChange(picker, values) {
    },
    select: function(event) {
      this.pickerShow = true;
      this.pickerShow3 = false;
      this.pickerShow2 = false;
    },
    select2: function(event) {
      this.pickerShow2 = true;
      this.pickerShow3 = false;
      this.pickerShow = false;
    },
    select3: function(event) {
      this.pickerShow3 = true;
      this.pickerShow = false;
      this.pickerShow2 = false;
    },
    cancel: function() {
      this.pickerShow3 = false;
      this.pickerShow = false;
      this.pickerShow2 = false;
    }
  }
};
</script>
<style lang="less" scoped>
#search1{
  height:auto;
}
.fixed span{
  margin-left:10px;
}
#cell3 {
  top:0;
}
#cell1 {
  top:0;
}
</style>
