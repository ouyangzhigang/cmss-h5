<template>
  <div>
    <div class='pa-search'>
      <!-- <select name='searchSelect'
              v-model='searchType'
              @click='historyShow'>
        <option :value='item.value'
                v-for='(item, index) in labels'
                v-text='item.text'
                :key='index'></option>
      </select> -->
      <div class='searchType'>
        <ul>
          <li v-tap='searchTypeShow'>
            <span>{{searchTypeText}}</span>
            <img src='../assets/images/down_arrow.png'
                 width='20'/>
          </li>
        </ul>
        <pa-picker ref='searchType'
                   v-model='searchType'
                   :value-key='searchTypeData.valueKey'
                   :slot-data='searchTypeData.slotData'
                   @confirm='searchTypeChange'>
        </pa-picker>
      </div>
      <input ref='search'
             type='search'
             class='pa-search-input'
             v-model='currentValue'
             :placeholder='placeholder'
             @focus='historyShow'/>

      <img src='../assets/images/search-botton.png'
           class='icon-search'
           v-tap='search'>
    </div>
    <div class='search_history'>
      <mt-cell title='最近联系人'
               v-show='exContact.length>0'></mt-cell>
      <div class='ex_contact'>
        <span v-for='(item,index) in exContact'
              class='recent_contact_person'
              v-text='item.ownerName'
              :key='index'
              @click='searchThis'></span>
      </div>
      <mt-cell title='历史搜索'
               v-show='exSearch.length>0'></mt-cell>
      <mt-cell title=""
               id='cell3'
               v-for='item in exSearch.slice(-5)'
               style='border-top:1px solid #D8D8D8'>
        <div class='left'>
          <span v-text='item.ownerName'></span>
        </div>
        <div class='right'>
          <span v-text='item.carMark'></span>
        </div>
        <img style='top:-15px'
             src='../assets/images/arrow.jpg'
             width='10'
             class='arrow'>
      </mt-cell>
      <button class='clear'
              @click='clear'><img src='../assets/images/del.jpg'
                                  width='18'/>清空搜索记录
      </button>
    </div>
  </div>
</template>

<script>
  import {Common} from '../../common/untils';
  /**
   * pa-search
   * @desc 搜索框
   *
   * @param {String} [placeholder] - 输入框提示文字
   * @param {Null} [value] - 双向绑定数据
   * @param {Boolean} [autoFocus] - 输入框是否自动获取焦点
   */
  const SEARCH_TYPE = [
    {
      'text': '车牌号码',
      'value': 'carMark'
    }, {
      'text': '客户姓名',
      'value': 'ownerName'
    }, {
      'text': '手机号码',
      'value': 'mobileNo'
    }
  ];
  export default {
    name: 'pa-search-history',
    props: {
      placeholder: String,
      value: null,
      searchRange: null,
      autoFocus: {
        type: Boolean,
        default: false
      },
      exContact: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    data() {
      return {
        exSearch: JSON.parse(window.localStorage.getItem('history')) || [],
        searchType: 'carMark',
        searchTypeData: {
          valueKey: 'text',
          slotData: [{
            flex: 1,
            values: SEARCH_TYPE
          }]
        }
      };
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      },
      searchTypeText: function() {
        let result = SEARCH_TYPE[0].text;
        for (let i = SEARCH_TYPE.length - 1; i >= 0; i--) {
          let obj = SEARCH_TYPE[i];
          if (obj.value === this.searchType) {
            result = obj.text;
            break;
          }
        }
        return result;
      }
    },
    methods: {
      searchTypeShow() {
        this.$refs.searchType.open();
      },
      searchTypeChange(val) {
        this.searchType = val[0].value;
      },
      setHistory(tmp) {
        if (Object.keys(tmp).length > 0) {
          let flag = true;
          for (let item of this.exSearch) {
            if (Common.toUpperCase(item.carMark) === Common.toUpperCase(tmp.carMark) &&
              Common.toUpperCase(item.owerName) === Common.toUpperCase(tmp.owerName) &&
              Common.toUpperCase(item.mobileNo) === Common.toUpperCase(tmp.mobileNo)) {
              flag = false;
            }
          }
          if (flag) {
            this.exSearch.unshift(tmp);
          }
        }
      },
      search() {
        if (this.currentValue) {
          let tmp = {};
          let i = 0;
          for (let group of Object.keys(this.searchRange)) {
            if (i > 0) {
              break;
            }
            for (let item of this.searchRange[group]) {
              let searchVal = item[this.searchType] || '';
              if (Common.toUpperCase(searchVal).indexOf(Common.toUpperCase(this.currentValue)) !== -1) {
                tmp = {carMark: item.carMark, ownerName: item.ownerName, mobileNo: item.mobileNo};
                i++;
                break;
              }
            }
          }
          this.setHistory(tmp);
        }
        this.$refs.search.blur();
        document.getElementsByClassName('search_history')[0].style.display = 'none';
        this.$emit('search', {key: this.searchType, value: this.currentValue});
      },
      //      searchThis(){
      //        this.$emit('search', this.currentValue);
      //      },
      historyShow: function() {
        document.getElementsByClassName('search_history')[0].style.display = 'block';
      },
      clear: function() {
        let r = confirm('确定要清空搜索记录吗?');
        if (r) {
          this.exSearch = [];
        } else {
          return;
        }
      }
    },
    beforeDestroy() {
      window.localStorage.setItem('history', JSON.stringify(this.exSearch));
    }
  };
</script>

<style lang='less'
       scoped>
  @import '../assets/less/utils';

  .pa-search {
    border: 7px solid #F5F5F5;
    height: 44px;
    background: #EFEFEF;
  }

  .searchType {
    min-width: 70px;
    font-size: 0.9rem;
    margin: 0 auto;
    margin-left: 0.6rem;
    display: inline-block;
    vertical-align: middle;
    background-color: inherit;
  }

  .searchType ul {
    background-color: inherit;
  }

  .searchType img {
    vertical-align: top;
    padding-top: 0.4rem;
    display: inline-block;
    text-align: center;
    width: 0.5rem;
  }

  .icon-search {
    float: right;
    .px2rem(height, 16px);
    .px2rem(width, 16px);
    .px2rem(margin-right, 20px);
    .px2rem(margin-top, 8px);
  }

  .pa-search-input {
    width: 65%;
    height: 30px;
    display: inline-block;
    background-color: inherit;
    padding-left: 10px;
  }

  .search_history {
    position: absolute;
    background: #f5f5f5;
    display: none;
    z-index: 1000;
    height: 100%;
    width: 100%;
  }

  .ex_contact {
    height: auto;
    background: #fff;
    padding-bottom: 30px;
  }

  .recent_contact_person {
    display: inline-block;
    margin: 3px 5px;
    padding: 1px 5px;
    background: #EEE;
  }

  .clear {
    display: block;
    .px2rem(width, 160px);
    .px2rem(height, 40px);
    margin: 0 auto;
    color: #DDD;
    border: 1px solid #DDD;
    border-radius: 4px;
    background: transparent;
    margin-top: 36px;
  }

  .clear img {
    margin-right: 15px;
  }

  select {
    border: 2px solid #f0f0f0;
  }
</style>
