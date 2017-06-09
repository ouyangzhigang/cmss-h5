<template>
<div id="myTips" >
<div style="display:">

               <ul class="customer_title">
               <mt-cell title="今日提醒(2)" value="" id="cell1"></mt-cell>
               <li>
   <mt-cell title="" id="cell3">
    <mt-checklist
  title=""
   v-show="select"
   align="left"
  v-model="choose"
  :options="options">
</mt-checklist>
     <img  src="../assets/images/tipDate.png?" width="35" >
    <div class="left">
   <span>今天客户买平安保险啦</span>
       <span style="color:">每天 12:00</span>
     </div>
      <div class="right" v-show="noselect">
    <span><font>2小时19分</font></span>
    </div>
     <a href="/addTips" style="width:10px;height:21px;"><img v-show="noselect" src="../assets/images/arrow.jpg" width="10" class="arrow"></a>
    </mt-cell>
    </li>
    </ul>
    <ul class="customer_title">
               <mt-cell title="其他提醒(4)" value="" id="cell1"></mt-cell>
               <li>
   <mt-cell title="" id="cell3">
    <mt-checklist
    v-show="select"
  title=""
   align="left"
  v-model="choose"
  :options="options">
</mt-checklist>
     <img  src="../assets/images/tipTimer.png?" width="35" >
    <div class="left">
   <span>客户准备买平安保险啦</span>
       <span style="color:">每天 12:00</span>
     </div>
      <div class="right" v-show="noselect">
    <span><font>16小时19分</font></span>
    </div>
     <img  v-show="noselect" src="../assets/images/arrow.jpg" width="10" class="arrow">
    </mt-cell>
    </li>
    </ul>
     <ul class="customer_title">
               <mt-cell title="已关闭提醒(2)" value="" id="cell1"></mt-cell>
               <li>
   <mt-cell title="" id="cell3">
    <mt-checklist
  title=""
   v-show="select"
   align="left"
  v-model="choose"
  :options="options">
</mt-checklist>
     <img  src="../assets/images/tipClose.png" width="35" >
    <div class="left">
   <span>客户准备买平安保险啦</span>
       <span style="color:">每天 12:00</span>
     </div>
      <div class="right" v-show="noselect">
    <span><font>16小时19分</font></span>
    </div>
     <img v-show="noselect" src="../assets/images/arrow.jpg" width="10" class="arrow">
    </mt-cell>
    </li>
    </ul>

 <div class="fixed">
     <div v-show="noselect" v-tap="delTips"><img src="../assets/images/delTips.png" width="30px"/><span>删除提醒</span></div>
     <mt-cell  v-show="select" id="cell">
 <mt-checklist
  title=""
   align="left"
  v-model="choose"
  :options="options">
</mt-checklist><span class="selectAll">全选</span><span class="del">确定删除</span>
</mt-cell>
    </div>
  </div>
   <div class="notip" style="display:none">
<img src="../assets/images/notipset.png" width="60%"/>
<p>暂未设置提醒</p>
</div>
</div>

</template>
 <script>
import Vue from 'vue';
import {Cell, Checklist, MessageBox} from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(MessageBox.name, MessageBox);
export default {
  name: 'addTips',
  data() {
    return {
      choose: [],
      options: [''],
      select: false,
      noselect: true
    };
  },
  methods: {
    delTips: function() {
      this.select = true;
      this.noselect = false;
    }
  }
};
MessageBox({
  title: '确认删除所选信息吗',
  message: '删除后提醒将不可恢复',
  showCancelButton: true
});
</script>
<style lang="less" scoped>
font{
  font-size:14px;
}
.left span{
  font-size:14px;
  color:#000;
}
.left span:nth-child(2){
  font-size:12px;
  color:#999999;
}
.left{
  margin-left:10px;
  width:48%;
  font-size:14px;
}
.right{
 width:32%;
 margin-left:12px;
}
.arrow{
  padding-top:5px;
}
#cell .mint-cell-wrapper{
  padding:0px;
}
#cell .mint-cell-title{
  -webkit-box-flex:0;
  flex:0;
}
#cell .mint-cell-value{
  width:100%;
}
.fixed span.selectAll{
  margin-left:0px;
  position:absolute;
  top:14px;
}
.fixed span.del{
  position: absolute;
    right: 15px;
    top: 14px;
    color:#7D9FF5;
  }
 .notip{
margin:50px auto;
 text-align:center;
 color:#999999;
 height:100%;

 }
</style>
