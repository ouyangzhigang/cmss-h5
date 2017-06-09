<template>
  <div id="noProCustomer">
    <pa-search-history v-model="value"
                       :searchRange="customerList"
                       :exContact="clienNameList"
                       cancel-text=""
                       placeholder="输入车牌、用户姓名或手机号查找用户"
                       id="search1"
                       @search="search">
    </pa-search-history>
    <div class="select">
      <ul>
        <li v-tap="insuranceDueDaysShow">
          {{insuranceDueDaysText == "全部" ? "保险到期" : insuranceDueDaysText}}
          <img src="../assets/images/down_arrow.png"
               width="18"/>
        </li>
        <li v-tap="insuranceWillShow">
          {{insuranceWillText == "全部" ? "投保意愿" : insuranceWillText}}
          <img src="../assets/images/down_arrow.png"
               width="18"/>
        </li>
        <li v-tap="customerTypeShow">
          {{customerTypeText == "全部" ? "客户类型" : customerTypeText}}
          <img src="../assets/images/down_arrow.png"
               width="18"/>
        </li>
      </ul>
      <pa-picker ref="insuranceDueDays"
                 v-model="insuranceDueDaysOption"
                 :slot-data="insuranceDueDays.slotData"
                 @confirm="insuranceDueDaysChange">
      </pa-picker>
      <pa-picker ref="insuranceWill"
                 v-model="insuranceWillOption"
                 :slot-data="insuranceWill.slotData"
                 @confirm="insuranceWillChange">
      </pa-picker>
      <pa-picker value
                 ref="customerType"
                 v-model="customerTypeOption"
                 :slot-data="customerType.slotData"
                 @confirm="customerTypeChange">
      </pa-picker>
    </div>

    <pa-whole-list titleText="需促成转保的客户"
                   :isShow="needToBeAssitedWholeListShow"
                   :classificationList="needToBeAssitedList"
                   @close="listHidden('needToBeAssitedWholeListShow')">
    </pa-whole-list>
    <pa-whole-list titleText="需多互动，关怀的客户"
                   :isShow="needMoreInteractionAndCareWholeListShow"
                   :classificationList="needMoreInteractionAndCareList"
                   @close="listHidden('needMoreInteractionAndCareWholeListShow')">
    </pa-whole-list>
    <pa-whole-list titleText="需赠送实物关怀的客户"
                   :isShow="needMoreGift4CareWholeListShow"
                   :classificationList="needMoreGift4CareList"
                   @close="listHidden('needMoreGift4CareWholeListShow')">
    </pa-whole-list>
    <pa-whole-list titleText="需关怀的客户"
                   :isShow="needCareWholeListShow"
                   :classificationList="needCareList"
                   @close="listHidden('needCareWholeListShow')">
    </pa-whole-list>

    <div class="customer_list_by_type"
         v-show="AbbreviatedListShow">
      <div class="customer_title">
        <mt-cell :title="'需促成转保的客户('+needToBeAssitedList.length+')'"
                 value=""
                 style="background-image:none"></mt-cell>
        <ul>
          <li v-for="item in needToBeAssitedList.slice(0,3)">
            <mt-cell title=""
                     id="cell3">
              <div class="car_logo">
                <img :src="item.carBrandLogoUrl">
              </div>
              <div class="left">
                <span>{{item.ownerName}}<img src="../assets/images/tips.png"
                                             width="18"/></span>
                <span v-text="item.carMark"></span>
                <span v-text="item.mobileNo"
                      style="color:#5c8aff"></span>
              </div>
              <div class="right">
                <span><font v-text="item.insuranceDueDays"></font>天</span>
                <span>保险到期</span>
              </div>
              <img v-show="imgShow"
                   src="../assets/images/arrow.jpg"
                   width="10"
                   class="arrow">
              <mt-checklist title=""
                            v-show="selectShow"
                            align="left"
                            v-model="choose"
                            :options="options"></mt-checklist>
            </mt-cell>
          </li>

          <li class="load_more"
              v-show="needToBeAssitedList.length>3"
              @click="listShowAll('needToBeAssitedWholeListShow')">点击查看更多
          </li>
        </ul>
      </div>
      <div class="customer_title">
        <mt-cell :title="'需多互动，关怀的客户('+needMoreInteractionAndCareList.length+')'"
                 value=""></mt-cell>
        <ul>
          <li v-for="item in needMoreInteractionAndCareList.slice(0,3)">
            <mt-cell title=""
                     id="cell3">
              <div class="car_logo">
                <img :src="item.carBrandLogoUrl">
              </div>
              <div class="left">
                <span>{{item.ownerName}}<img src="../assets/images/tips.png"
                                             width="18"/></span>
                <span v-text="item.carMark"></span>
                <span v-text="item.mobileNo"
                      style="color:#5c8aff"></span>
              </div>
              <div class="right">
                <span><font v-text="item.insuranceDueDays"></font>天</span>
                <span>保险到期</span>
              </div>
              <img v-show="imgShow"
                   src="../assets/images/arrow.jpg"
                   width="10"
                   class="arrow">
              <mt-checklist title=""
                            v-show="selectShow"
                            align="left"
                            v-model="choose"
                            :options="options"></mt-checklist>
            </mt-cell>
          </li>
          <li class="load_more"
              v-show="needMoreInteractionAndCareList.length>3"
              @click="listShowAll('needMoreInteractionAndCareWholeListShow')">点击查看更多
          </li>
        </ul>
      </div>
      <div class="customer_title">
        <mt-cell :title="'需赠送实物关怀的客户('+needMoreGift4CareList.length+')'"
                 value=""></mt-cell>
        <ul>
          <li v-for="item in needMoreGift4CareList.slice(0,3)">
            <mt-cell title=""
                     id="cell3">
              <div class="car_logo">
                <img :src="item.carBrandLogoUrl">
              </div>
              <div class="left">
                <span>{{item.ownerName}}<img src="../assets/images/tips.png"
                                             width="18"/></span>
                <span v-text="item.carMark"></span>
                <span v-text="item.mobileNo"
                      style="color:#5c8aff"></span>
              </div>
              <div class="right">
                <span><font v-text="item.insuranceDueDays"></font>天</span>
                <span>保险到期</span>
              </div>
              <img v-show="imgShow"
                   src="../assets/images/arrow.jpg"
                   width="10"
                   class="arrow">
              <mt-checklist title=""
                            v-show="selectShow"
                            align="left"
                            v-model="choose"
                            :options="options"></mt-checklist>
            </mt-cell>
          </li>
          <li class="load_more"
              v-show="needMoreGift4CareList.length>3"
              @click="listShowAll('needMoreGift4CareWholeListShow')">点击查看更多
          </li>
        </ul>
      </div>
      <div class="customer_title">
        <mt-cell :title="'需关怀的客户('+needCareList.length+')'"
                 value=""></mt-cell>
        <ul>
          <li v-for="item in needCareList.slice(0,3)">
            <mt-cell title=""
                     id="cell3">
              <div class="car_logo">
                <img :src="item.carBrandLogoUrl">
              </div>
              <div class="left">
                <span>{{item.ownerName}}<img src="../assets/images/tips.png"
                                             width="18"/></span>
                <span v-text="item.carMark"></span>
                <span v-text="item.mobileNo"
                      style="color:#5c8aff"></span>
              </div>
              <div class="right">
                <span><font v-text="item.insuranceDueDays"></font>天</span>
                <span>保险到期</span>
              </div>
              <img v-show="imgShow"
                   src="../assets/images/arrow.jpg"
                   width="10"
                   class="arrow">
              <mt-checklist title=""
                            v-show="selectShow"
                            align="left"
                            v-model="choose"
                            :options="options"></mt-checklist>
            </mt-cell>
          </li>
          <li class="load_more"
              v-show="needCareList.length>3"
              @click="listShowAll('needCareWholeListShow')">点击查看更多
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="fixed">
      <div v-tap="addTip"
           v-show="addTipShow"><img src="../assets/images/addTips.png"
                                    width="30px"/><span>添加提醒</span></div>
      <div v-show="sureShow"
           class="colorBlue"
           v-tap="confirm">确定
      </div>
    </div> -->

  </div>
</template>
<script>
  import Vue from 'vue';
  import {Search, Cell, Checklist, Loadmore} from 'mint-ui';
  import {PaPicker, PaSearchHistory, PaWholeList} from '@components';
  import INSURANCE_DUE_DAYS from '@json/insuranceDueDays';
  import INSURANCE_DUE_DAYS_SET from '@json/insuranceDueDaysSet';
  import INSURANCE_WILL from '@json/insuranceWill';
  import CUSTOMER_TYPE from '@json/customerType';
  import {Common} from '../../common/untils';

  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Search.name, Search);
  Vue.component(Cell.name, Cell);
  Vue.component(Checklist.name, Checklist);
  Vue.component(PaPicker.name, PaPicker);
  Vue.component(PaSearchHistory.name, PaSearchHistory);
  Vue.component(PaWholeList.name, PaWholeList);
  const INSURANCE_WILL_ALL = '3';
  const CUSTOMER_TYPE_ALL = '2';
  export default {
    name: 'noProCustomer',
    mounted: function() {
      this.init();
    },
    data() {
      return {
        value: '',
        choose: [],
        userId: '',
        clienNameList: [], // 最近联系的客户列表
        options: [''],
        imgShow: true,
        selectShow: false,
        addTipShow: true,
        sureShow: false,
        AbbreviatedListShow: true, // 最初的客户列表是否显示标识
        needToBeAssitedWholeListShow: false, // 四类客户的完整列表是否展开标识
        needMoreInteractionAndCareWholeListShow: false,
        needMoreGift4CareWholeListShow: false,
        needCareWholeListShow: false,
        needToBeAssited: [], // 四类客户的完整列表
        needMoreInteractionAndCare: [],
        needMoreGift4Care: [],
        needCare: [],
        insuranceDueDaysOption: '0',
        insuranceWillOption: '3',
        customerTypeOption: '2',
        insuranceDueDaysText: '保险到期',
        insuranceWillText: '投保意愿',
        customerTypeText: '客户类型',
        insuranceDueDays: {
          value: INSURANCE_DUE_DAYS[0].text,
          slotData: [{
            flex: 1,
            values: INSURANCE_DUE_DAYS
          }]
        },
        insuranceWill: {
          value: INSURANCE_WILL[0].text,
          slotData: [{
            flex: 1,
            values: INSURANCE_WILL
          }]
        },
        customerType: {
          value: CUSTOMER_TYPE[0].text,
          slotData: [{
            flex: 1,
            values: CUSTOMER_TYPE
          }]
        },
        customerList: '',
        searchType: '',
        searchValue: ''
      };
    },
    computed: {
      needToBeAssitedList: function() {
        return this.selectFilter(this.needToBeAssited);
      },
      needMoreInteractionAndCareList: function() {
        return this.selectFilter(this.needMoreInteractionAndCare);
      },
      needMoreGift4CareList: function() {
        return this.selectFilter(this.needMoreGift4Care);
      },
      needCareList: function() {
        return this.selectFilter(this.needCare);
      }
    },
    methods: {
      init: function() {
        let requestData = {
          userId: this.$store.state.userId,
          certificateNo: this.$store.state.certificateNo,
          currentPage: 1,
          perPageSize: 1000
        };
        this.$http.post('/do/app/transmitAction/getTransmitData',
          {
            'requestData': JSON.stringify(requestData),
            'urlMapping': 'claim.selfClaim.getCustomerNotresurancedInfo'
          }
        ).then(res => {
          this.customerList = res.data.data.data;
          this.needToBeAssited = Common.extend(this.customerList.needToBeAssited);
          this.needMoreInteractionAndCare = Common.extend(this.customerList.needMoreInteractionAndCare);
          this.needMoreGift4Care = Common.extend(this.customerList.needMoreGift4Care);
          this.needCare = Common.extend(this.customerList.needCare);
          this.clienNameList = this.customerList.clienNameList;
          localStorage.setItem('customerList', JSON.stringify(this.customerList));
        }).catch(err => {
          console.error(err);
        });
      },
      selectFilter: function(arr) {
        let self = this;
        let dueDays = INSURANCE_DUE_DAYS_SET[this.insuranceDueDaysOption];
        let insurance = INSURANCE_WILL[this.insuranceWillOption];
        let type = CUSTOMER_TYPE[this.customerTypeOption];
        return arr.filter(
          function(el) {
            return (el.insuranceDueDays <= dueDays.maxDuration &&
              el.insuranceDueDays >= dueDays.minDuration) &&
              ((el.insuranceWill === insurance.value) || (self.insuranceWillOption === INSURANCE_WILL_ALL)) &&
              ((el.customerType === type.value) || (self.customerTypeOption === CUSTOMER_TYPE_ALL)) &&
              self.searchByType(el);
          }
        );
      },
      searchByType: function(el) {
        let searchValue = new RegExp(this.searchValue, 'i');
        if (this.searchType === 'carMark') {
          return searchValue.test(el.carMark);
        } else if (this.searchType === 'ownerName') {
          return searchValue.test(el.ownerName);
        } else {
          return searchValue.test(el.mobileNo);
        }
      },
      insuranceDueDaysShow: function(event) {
        this.$refs.insuranceDueDays.open();
      },
      insuranceWillShow: function(event) {
        this.$refs.insuranceWill.open();
      },
      customerTypeShow: function(event) {
        this.$refs.customerType.open();
      },
      listShowAll: function(type) {
        this[type] = true;
        this.AbbreviatedListShow = false;
      },
      listHidden: function(type) {
        this[type] = false;
        this.AbbreviatedListShow = true;
      },
      addTip: function() {
        this.imgShow = false;
        this.selectShow = true;
        this.addTipShow = false;
        this.sureShow = true;
      },
      insuranceDueDaysChange: function(val) {
        this.insuranceDueDaysOption = val[0].value;
        this.insuranceDueDaysText = val[0].text;
      },
      insuranceWillChange: function(val) {
        this.insuranceWillOption = val[0].value;
        this.insuranceWillText = val[0].text;
      },
      customerTypeChange: function(val) {
        this.customerTypeOption = val[0].value;
        this.customerTypeText = val[0].text;
      },
      confirm: function() {
        this.imgShow = true;
        this.selectShow = false;
        this.addTipShow = true;
        this.sureShow = false;
      },
      search: function(obj) {
        this.searchType = obj.key;
        this.searchValue = obj.value;
      }
    }
  };
</script>
<style lang="less"
       scoped>
  @import '../assets/less/utils';

  #search1 {
    height: auto;
  }

  .customer_title {
    margin-top: 10px;
    background: #fff;
  }

  .customer_list_by_type {
    padding-bottom: 40px;
  }

  .car_logo {
    border: 1px solid #979797;
    .px2rem(height, 73px);
    .px2rem(width, 73px);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .car_logo img {
    .px2rem(height, 60px);
    .px2rem(width, 80px);
  }

  /*.car_logo img {
    display:block;
    margin:0 auto;
  }*/
  .load_more {
    width: 100%;
    line-height: 45px;
    font-size: 15px;
    font-family: PingFangSC-Regular;
    color: #6588dc;
    text-align: center;
    border-top: 1px solid #eee;
  }

</style>
