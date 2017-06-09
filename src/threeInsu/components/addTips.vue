<template>
<div id="addTips">
 <mt-cell title="消息提醒" id="cell1" class="customer_title">
<mt-switch v-model="value"></mt-switch>
 </mt-cell>
  <mt-cell title="" id="cell5" class="customer_title">
<img slot="icon" src="../assets/images/tipContent.png" width="30"/>
<mt-field  placeholder="输入提醒内容"></mt-field>
 </mt-cell>
   <mt-cell title="" id="cell5">
<img slot="icon" src="../assets/images/tiptimer.png" width="30"/>
<mt-field  placeholder="选择时间"></mt-field>
<img  src="../assets/images/arrow.jpg" width="10"/>
 </mt-cell>
    <mt-cell title="" id="cell5">
<img slot="icon" src="../assets/images/tipdate.png" width="30"/>
<mt-field  placeholder="选择日期" v-tap="selectDate"></mt-field>
<img  src="../assets/images/arrow.jpg" width="10"/>
 </mt-cell>
     <mt-cell title="" id="cell5">
<img slot="icon" src="../assets/images/tipcircle.png" width="30"/>
<mt-field  placeholder="选择提醒周期" v-tap="selectCircle"></mt-field>
<img  src="../assets/images/arrow.jpg" width="10"/>
 </mt-cell>
      <mt-cell title="" id="cell5" class="customer_title">
<img slot="icon" src="../assets/images/tipmusic.png" width="30"/>
<mt-field  placeholder="选择提醒音乐" ></mt-field>
<router-link to="/newTips" ><img  src="../assets/images/arrow.jpg" width="10"/></router-link>
 </mt-cell>
 <a v-tap="save" class="save">保存</a>
 <a v-tap="abandon" class="abandon">放弃编辑</a>
 <div class="bkg2" v-show="selectdate||selecttime||selectcircle" v-tap="hide_bkg"></div>
 <mt-picker :slots="slots" :showToolbar="true" id="picker" v-show="selectdate">
 <p><span v-tap="cancel">取消</span><span style="text-align:right;color:#597ED9" v-tap="sure">确认</span></p>
 </mt-picker>
  <mt-picker :slots="slots2" :showToolbar="true" id="picker" v-show="selecttime">
 <p><span v-tap="cancel">取消</span><span style="text-align:right;color:#597ED9" v-tap="sure">确认</span></p>
 </mt-picker>
   <mt-picker :slots="slots3" :showToolbar="true" id="picker" v-show="selectcircle">
 <p><span v-tap="cancel">取消</span><span style="text-align:right;color:#597ED9" v-tap="sure">确认</span></p>
 </mt-picker>
</div>
</template>
 <script>
import Vue from 'vue';
import {Cell, Switch, Field, Picker} from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Switch.name, Switch);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
export default {
  name: 'addTips',
  data() {
    return {
      value: true,
      selectdate: false,
      selecttime: false,
      selectcircle: false,
      slots: [
        {
          flex: 1,
          values: ['2012', '2013', '2014', '2015', '2016', '2017'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          className: 'slot2',
          textAlign: 'center'
        }, {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      slots2: [
        {
          flex: 1,
          values: ['上午', '下午'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          className: 'slot2',
          textAlign: 'center'
        }, {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      slots3: [
        {
          flex: 1,
          values: ['每天', '每周'],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    };
  },
  methods: {
    save: function() {
    },
    abandon: function() {
    },
    selectDate: function() {
      this.selectdate = true;
    },
    selectTime: function() {
      this.selecttime = true;
    },
    selectCircle: function() {
      this.selectcircle = true;
    },
    sure: function() {
      this.selectdate = false;
      this.selecttime = false;
      this.selectcircle = false;
    },
    cancel: function() {
      this.selectdate = false;
      this.selecttime = false;
      this.selectcircle = false;
    },
    hide_bkg: function() {
      this.selectdate = false;
      this.selecttime = false;
      this.selectcircle = false;
    }
  }
};
</script>
<style lang="less" scoped>
#cell5 .mint-cell-title{
  margin-right: 12px;
}
#cell5 .mint-cell-value,#cell5 .mint-cell{
  width: 100%;
}
#cell5:last-child{
  background-image:none;
}
#picker .picker-toolbar{
  height:1px;
}
#picker p span{
  display:inline-block;
  width:50%;
  padding:10px;
}
.bkg2{
  position: fixed;
    left: 0;
    bottom: 94px;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
    z-index: 33;
}
</style>
