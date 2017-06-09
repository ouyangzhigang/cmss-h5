<template>
  <div class="pa-field"
       :class="currentClass">
    <span class="pa-field-label"
          :class="labelClass"
          v-if="label"
          v-text="label"></span>
    <div class="pa-field-flex pa-field-start"
         v-if="type === 'textarea'">
      <textarea class="pa-field-textarea"
                ref="textarea"
                :name="name"
                :rows="rows"
                :value="currentValue"
                :placeholder="placeholder"
                v-clickoutside.touchstart="textareaBlur"
                @input="textareaChange"></textarea>
      <span class="pa-field-count">
        <em class="tx-blue">{{textareaObj.num}}</em>/{{total}}
      </span>
    </div>
    <div class="pa-field-flex"
         v-else-if="type === 'select'">
      <div class="pa-field-flex"
           v-tap="openSelect">
        <p class="pa-field-select"
           v-text="selectObj.result"
           v-show="selectObj.result"></p>
        <p class="pa-field-select gray"
           v-text="placeholder"
           v-show="!selectObj.result"></p>
      </div>
      <pa-picker ref="select"
                 :slot-data="slotData"
                 v-model="selectObj.value"
                 :value-key="valueKey"
                 :grade="grade"
                 :child-name="childName"
                 @close="closeSelect"
                 @confirm="confirmSelect"></pa-picker>
    </div>
    <div class="pa-field-flex"
         v-else-if="type === 'multiple'">
      <div class="pa-field-flex"
           v-tap="openMultiple">
        <p class="pa-field-select"
           v-text="multipleObj.result"
           v-show="multipleObj.result"></p>
        <p class="pa-field-select gray"
           v-text="placeholder"
           v-show="!multipleObj.result"></p>
      </div>
      <pa-dialog v-model="multipleObj.isShow"
                 @confirm="confirmMultiple"
                 @cancel="cancelMultiple"
                 is-btns
                 :btns="multipleObj.btns">
        <div>
          <ul class="pa-field-options">
            <li class="pa-field-flex"
                v-for="(group, index) in multipleObj.options"
                :key="index">
              <span class="pa-field-options-label"
                    v-text="group.label"></span>
              <ul class="pa-field-flex">
                <li class="pa-field-options-item"
                    v-for="(item, itemIndex) in group.options"
                    :key="itemIndex"
                    v-text="item.text"
                    :class="{'active': item.active}"
                    v-tap="{method:clickMultipleItem, param: {item: item, parentIndex: index, index: itemIndex}}"></li>
              </ul>
            </li>
          </ul>
          <ul class="pa-page-tips"
              v-if="tips"
              v-once>
            <li class="pa-page-tip"
                v-for="(item, index) in tips"
                v-once><i class="iconfont icon-tip"></i>
              <p v-text="item"></p></li>
          </ul>
        </div>
      </pa-dialog>
    </div>
    <div class="pa-field-flex"
         v-else-if="type === 'site'">
      <div class="pa-field-flex"
           v-tap="showSitePicker">
        <p class="pa-field-select"
           v-text="currentValue"
           v-show="currentValue"></p>
        <p class="pa-field-select gray"
           v-text="placeholder"
           v-show="!currentValue"></p>
      </div>
      <pa-site-picker :is-show="siteObj.isShow"
                      v-model="currentValue"
                      @close="closeSite"></pa-site-picker>
    </div>
    <div class="pa-field-flex"
         v-else-if="type === 'date'||type === 'datetime'||type === 'time'">
      <div class="pa-field-flex"
           v-tap="openDate">
        <p class="pa-field-select"
           v-text="dateObj.result"
           v-show="dateObj.result"></p>
        <p class="pa-field-select gray"
           v-text="placeholder"
           v-show="!dateObj.result"></p>
      </div>
      <mt-datetime-picker ref="picker"
                          :type="type"
                          v-model="dateObj.value"
                          @confirm="confirmDate"
                          :start-date="startDate"
                          :end-date="endDate"
                          month-format="{value}月"
                          date-format="{value}日"
                          hour-format="{value}时"
                          minute-format="{value}分"></mt-datetime-picker>
    </div>
    <div class="pa-field-flex"
         v-else>
      <input class="pa-field-input"
             :readonly="readonly"
             autocomplete="off"
             ref="input"
             :name="name"
             :type="type"
             :placeholder="placeholder"
             :value="currentValue"
             v-clickoutside.touchstart="blur"
             @input="input"/>
      <i :class="inputObj.state"
         v-show="inputObj.isStateShow"></i>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import PaDialog from './pa-dialog';
  import PaPicker from './pa-picker';
  import PaSitePicker from './pa-site-picker';
  import {Validator, Common} from '../untils';
  import Clickoutside from '../plugins/clickoutside';
  import {DatetimePicker} from 'mint-ui';


  Vue.component(PaDialog.name, PaDialog);
  Vue.component(PaPicker.name, PaPicker);
  Vue.component(PaSitePicker.name, PaSitePicker);
  Vue.component(DatetimePicker.name, DatetimePicker);

  /**
   * pa-field
   * @desc 表单元素 textarea, select, multiple, date, input 不包括file 依赖mint-ui datetime-picker
   *
   * @param {String} [label] - 标签名称
   * @param {String} [label-class] - label className
   * @param {String} [type] - 表单元素类型 默认为text
   * @param {null} [value] - 表单值 双向绑定 必须
   * @param {String} [name] - 表单元素name属性 必须
   * @param {Boolean} [readonly] - 表单元素是否只读
   * @param {String} [placeholder] - 表单提示信息
   * @param {Object} [attrs] - 表单属性 maxlength = 10
   * @param {Array} [validator] - 校验规则
   *
   * @param {Number} [rows] - textarea行数
   * @param {Number} [total] - textarea最大字符数
   *
   * @param {String} [value-key] - 如果select项为对象时的key值
   * @param {Array} [slot-data] - select显示内容
   * @param {String} [child-name] - select显示内容下一层key值
   * @param {Number | String} [grade] - select层级
   *
   * @param {Array} [options] - multiple选项 为二维数组
   * @param {Boolean} [multiple] - multiple是否为多选
   * @param {Array} [tips] - multiple提示文字
   *
   * @param {Date} [start-date] - 最小选择时间
   * @param {Date} [end-date] - 最大选择时间
   *
   * @example
   * <pa-field label="label" name="name" v-model="value"></pa-field>
   */
  export default {
    name: 'pa-field',
    props: {
      label: String,
      labelClass: String,
      type: {
        type: String,
        default: 'text'
      },
      value: {
        required: true
      },
      name: {
        type: String,
        required: true
      },
      readonly: {
        type: Boolean,
        default: false
      },
      valueKey: {
        type: String,
        default: 'text'
      },
      slotData: {
        type: Array,
        default() {
          return [];
        }
      },
      childName: String,
      grade: {
        type: [String, Number],
        default: 1
      },
      placeholder: String,
      attrs: {
        type: Object,
        default() {
          return {};
        }
      },
      multiple: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      tips: Array,
      startDate: Date,
      endDate: Date,
      rows: {
        type: Number,
        default: 4
      },
      total: {
        type: Number,
        default: 200
      },
      validator: Array
    },
    created() {
      switch (this.type) {
        case 'textarea':
          this.currentClass = 'pa-textarea';
          this.textareaObj = {
            num: this.value.length
          };
          break;
        case 'select':
          this.selectObj = {
            result: this.serializeSelect(this.value),
            value: Common.extend(this.value)
          };
          break;
        case 'multiple':
          this.multipleObj = {
            options: Common.extend(this.options),
            result: this.value,
            cache: [],
            isShow: false,
            btns: [{
              text: '完成',
              type: 'confirm'
            }]
          };
          break;
        case 'site':
          this.siteObj = {
            isShow: false
          };
          break;
        case 'date':
        case 'datetime':
        case 'time':
          this.dateObj = {
            result: this.getDateStr(this.value),
            value: this.value
          };
          break;
        default:
          this.inputObj = {
            isStateShow: false,
            state: ''
          };
          break;
      }
    },
    mounted() {
      if (this.type === 'multiple') {
        this.multipleInit();
      }
    },
    data() {
      // 数据先声明为空对象
      return {
        currentClass: '',

        textareaObj: {},

        selectObj: {},

        multipleObj: {},

        siteObj: {},

        dateObj: {},

        inputObj: {}
      };
    },
    directives: {
      Clickoutside
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.currentValueValid(val);
          this.$emit('input', val);
        }
      }
    },
    watch: {
      value(val) {
        switch (this.type) {
          // 当为select时,监听父组件绑定v-model,对数据进行序列化
          case 'select':
            this.selectObj.result = this.serializeSelect(val);
            break;
          case 'multiple':
//            this.multipleInit();
            break;
          case 'date':
          case 'datetime':
          case 'time':
            this.dateObj = {
              result: this.getDateStr(val),
              value: val
            };
            break;
        }
        this.validCommit(val);
      },
      attrs: {
        immediate: true,
        deep: true,
        // 添加html表单属性
        handler(attrs) {
          if (!attrs) return;
          this.$nextTick(() => {
            const target = [this.$refs.textarea, this.$refs.input];
            target.forEach(el => {
              if (!el) return;
              Object.keys(attrs).map(key => el.setAttribute(key, attrs[key]));
            });
          });
        }
      },
      validator: {
        immediate: true,
        deep: true,
        handler(validator) {
          if (!validator) return;
          this.$nextTick(() => {
            this.validate = new Validator(validator);
            this.currentValueValid(this.value);
          });
        }
      }
    },
    methods: {
      // textarea
      /**
       * @desc 键盘按下事件，如果超出长度就截取
       *
       * */
      textareaChange(e) {
        let value = e.target.value;
        if (value.length > (this.total - 1)) {
          this.currentValue = value.substr(0, this.total);
          this.$refs.textarea.value = value.substr(0, this.total);
          this.textareaObj.num = this.total;
        } else {
          this.currentValue = value;
          this.textareaObj.num = value.length;
        }
      },
      textareaBlur() {
        this.$refs.textarea.blur();
      },
      // select
      /**
       * @desc 显示select picker，如果只读就不显示
       *
       * */
      openSelect() {
        if (!this.readonly) {
          this.$refs.select.open();
        }
      },
      /**
       * @desc select picker 取消事件
       *
       * */
      closeSelect() {

      },
      /**
       * @desc select 结果序列化
       * @param {Array} [val] - 需要序列化的值
       *
       * @return {String}
       *
       * */
      serializeSelect(val) {
        if (Object.prototype.toString.call(val) === '[object Array]') {
          let str = [];
          val.map(item => {
            if (item && item[this.valueKey]) {
              str.push(item[this.valueKey]);
            }
          });
          return str.join('-');
        }
        if (Object.prototype.toString.call(val) === '[object Object]') {
          return val[this.valueKey];
        }
      },
      /**
       * @desc select picker 确认事件
       * @param {Array} [val] - 需要序列化的值
       *
       * */
      confirmSelect(val) {
        this.currentValue = Common.extend(val);
      },
      // multiple
      /**
       * @desc multiple 内容初始化，添加选择必要属性
       *
       * */
      multipleInit() {
        if (this.options.length > 0) {
          this.multipleObj.cache = [];
          let value = [];
          this.multipleObj.options.map((groups, parentIndex) => {
            groups.options.map((item, index) => {
              if (item.active) {
                this.multipleObj.cache.push({
                  parentIndex: parentIndex,
                  index: index,
                  initActive: item.active,
                  active: item.active,
                  text: item.text
                });
                value.push(item.text);
              }
            });
          });
          this.multipleObj.result = value.join('/');
          if (!this.multiple) {
            this.multipleObj.cache[1] = this.multipleObj.cache[0];
          }
        }
      },
      /**
       * @desc multiple弹层显示
       *
       * */
      openMultiple() {
        if (!this.readonly) {
          this.multipleObj.isShow = true;
        }
      },
      /**
       * @desc multiple确定事件，分为单选和多选
       *
       * */
      confirmMultiple() {
        this.multipleObj.isShow = false;
        if (this.multiple) {
          let cacheArr = [];
          let cacheResult = '';
          this.multipleObj.cache.map(item => {
            item.initActive = item.active;
            if (item.active) {
              cacheArr.push(this.options[item.parentIndex]['options'][item.index]);
              cacheResult += item.text + '/';
            }
          });
          this.multipleObj.result = cacheResult.substring(0, cacheResult.length - 1);
          this.currentValue = cacheArr;
        } else {
          let cache = this.multipleObj.cache[0];
          this.multipleObj.result = cache.text;
          this.currentValue = this.options[cache.parentIndex]['options'][cache.index];
          this.multipleObj.cache[1] = cache;
        }
      },
      /**
       * @desc multiple取消事件
       *
       * */
      cancelMultiple() {
        if (this.multiple) {
          this.multipleObj.cache.map(item => {
            item.active = item.initActive;
            this.multipleObj.options[item.parentIndex]['options'][item.index].active = item.initActive;
          });
        } else {
          let cache = this.multipleObj.cache[0];
          this.multipleObj.options[cache.parentIndex]['options'][cache.index].active = false;
          if (this.multipleObj.cache.length > 1) {
            this.multipleObj.cache[0] = this.multipleObj.cache[1];
            let cache = this.multipleObj.cache[0];
            cache.active = true;
            this.multipleObj.options[cache.parentIndex]['options'][cache.index].active = cache.active;
          }
        }
      },
      /**
       * @desc multiple项点击事件
       * @param {Object} [event]
       * @param {Object} [item] - 点击的项
       *
       * */
      clickMultipleItem(e, item) {
        if (this.multiple) {
          let flag = false;
          for (let obj of this.multipleObj.cache) {
            if (item.parentIndex === obj.parentIndex && item.index === obj.index) {
              obj.active = !obj.active;
              flag = true;
              break;
            }
          }
          !flag && this.multipleObj.cache.push({
            parentIndex: item.parentIndex,
            index: item.index,
            initActive: item.item.active,
            active: !item.item.active,
            text: item.item.text
          });
        } else {
          if (this.multipleObj.cache.length > 0) {
            let cache = this.multipleObj.cache[0];
            cache.active = false;
            this.multipleObj.options[cache.parentIndex]['options'][cache.index].active = cache.active;
          }
          this.multipleObj.cache[0] = {
            parentIndex: item.parentIndex,
            index: item.index,
            active: !item.item.active,
            text: item.item.text
          };
        }
        item.item.active = !item.item.active;
      },
      // site
      /**
       * @desc 省市区弹层显示
       *
       * */
      showSitePicker() {
        this.siteObj.isShow = true;
      },
      /**
       * @desc 省市区弹层关闭
       *
       * */
      closeSite() {
        this.siteObj.isShow = false;
      },
      // date
      /**
       * @desc 对时间值进行补0
       * @param {String | Number}
       *
       * */
      addZero(val) {
        const MAX_NUM = 10;
        if (val < MAX_NUM) {
          return '0' + val;
        } else {
          return val;
        }
      },
      getDateStr(val) {
        let str = '';
        if (val instanceof Date) {
          str += val.getFullYear() + '-';
          str += (val.getMonth() + 1) + '-';
          str += val.getDate() + ' ';
          str += this.addZero(val.getHours()) + ':';
          str += this.addZero(val.getMinutes()) + ':00';
        }
        return str;
      },
      openDate() {
        if (!this.readonly) {
          this.$refs.picker.open();
        }
      },
      confirmDate() {
        this.currentValue = this.dateObj.value;
      },
      // input
      input(e) {
        const value = e.target.value;
        this.currentValue = value;
      },
      blur() {
        this.$refs.input.blur();
      },
      // common validate
      validCommit(val) {
        if (this.validate) {
          let msgs = this.validate.check(val);
          let isValid = this.validate.isValid();
          if (typeof this.$parent.receive === 'function') {
            let obj = {};
            obj[this.name] = {
              valid: this.validate.isValid(),
              msg: msgs
            };
            this.$parent.receive(obj);
          }
          return isValid;
        }
        return true;
      },
      currentValueValid(val) {
        if (this.validate) {
          this.inputObj.isStateShow = !!this.currentValue;
          let flag = this.validCommit(val);
          if (!flag) {
            this.inputObj.state = 'iconfont icon-error';
          } else {
            this.inputObj.state = 'pa-field-success';
          }
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .pa-field {
    .px2rem(height, 40px);
    .px2rem(line-height, 40px);
    .px2rem(padding-left, 10px);
    border-top: 1px solid @border;
    font-size: 16px;
    display: flex;
    .pa-dialog-content {
      padding: 0 10px;
    }
    .pa-page-tips {
      margin-left: 0;
      padding-top: 5px;
      padding-right: 5px;
      font-size: 14px;
      color: @textColor;
    }

    .pa-page-tip {
      display: flex;
      padding: 2px 0;
    }
  }

  .pa-textarea {
    .px2rem(height, 156px);
  }

  .pa-field-label {
    .px2rem(margin-right, 15px);
    .px2rem(min-width, 65px);
  }

  @media screen and (max-width: 320px){
    .pa-field-label {
      .px2rem(min-width, 75px);
    }
  }

  .pa-field-flex {
    position: relative;
    .iconfont {
      position: absolute;
      &.icon-tip {
        position: relative;
      }
    }
    .icon-close {
      right: 28px;
      .px2rem(font-size, 24px);
      top: -2px;
    }
    .pa-field-success,
    .icon-warning {
      right: 10px;
    }
    .icon-error {
      right: 8px;
      .px2rem(font-size, 24px);
      top: -2px;
    }
    .pa-field-success {
      background-image: url('../assets/images/field-success.png');
      background-size: 100%;
      .px2rem(width, 18px);
      .px2rem(height, 18px);
      position: relative;
    }
    .icon-warning {
      .px2rem(font-size, 18px);
    }
    .gray {
      color: #d7d7d7;
      font-size: 12px;
    }
  }

  .pa-field-flex,
  .pa-field-select,
  .pa-field-input,
  .pa-field-textarea {
    display: flex;
    flex: 1;
    font-size: 16px;
    align-items: center;
  }

  .pa-field-options {
    .pa-field-flex {
      align-items: flex-start;
    }
  }

  .pa-field-start, .pa-field-textarea {
    align-items: flex-start;
  }

  .pa-field-select {
    border: none;
    appearance: none;
    padding-right: 15px;
    margin-right: 10px;
    background: url('../assets/images/select-icon.png') no-repeat right center;
    overflow: hidden;
    white-space: nowrap;
  }

  .pa-field-input {
    padding-right: 50px;
    width: 100%;
  }

  .pa-field-textarea {
    height: 100%;
    padding: 13px 10px 20px 0;
    font-size: 16px;
    line-height: 14px;
  }

  .pa-field-count {
    position: absolute;
    bottom: 0px;
    right: 10px;
    .px2rem(font-size,
      12px);
    .px2rem(line-height,
      20px);
    color: @textColor;
  }

  .pa-field-options {
    .pa-field-flex {
      flex-wrap: wrap;
    }
  }

  .pa-field-options-label {
    margin-top: 19px;
    .px2rem(padding-right,
      10px);
    text-align: right;
  }

  .pa-field-options-item {
    display: inline-block;
    margin: 19px 15px 0 0;
    width: 80px;
    background-color: #f2f2f2;
    border: 1px solid #8a8a8a;
    border-radius: 4px;
    .px2rem(font-size,
      18px);
    .px2rem(height,
      32px);
    .px2rem(line-height,
      32px);
    overflow: hidden;
    position: relative;
    text-align: center;
    white-space: nowrap;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
    &.active {
      background-color: #f05a23;
    }
  }


</style>
