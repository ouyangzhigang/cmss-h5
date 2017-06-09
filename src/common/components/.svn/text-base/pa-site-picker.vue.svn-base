<template>
  <div class="pa-site-picker"
       v-show="show">
    <div class="pa-site-toolbar">
      <span class="pa-site-btn"
            v-tap="cancel">取消</span>
      <span class="pa-site-btn"
            v-tap="confirm">确定</span>
    </div>
    <mt-picker ref="picker"
               :slots="slots"
               value-key="name"
               @change="onValuesChange"></mt-picker>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {Picker} from 'mint-ui';
  import paLayer from '../mixins/pa-layer';
  import AREA_DATA from '../assets/json/areaData';

  Vue.component(Picker.name, Picker);

  /**
   * pa-site-picker
   * @desc 地区选择,依赖mint-ui picker
   *
   * @param {Boolean} [isShow] - 是否显示
   * @param {String} [value] - 双向绑定值 若传值，格式为 省-市-区
   *
   * @example
   * <pa-site-picker :isShow="isShow" v-model="currentValue" @close="close"></pa-site-picker>
   */

  export default {
    name: 'pa-site-picker',
    mixins: [paLayer],
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        slots: [
          {
            flex: 1,
            values: AREA_DATA
          },
          {
            divider: true,
            content: '-'
          },
          {
            flex: 1,
            values: AREA_DATA[0].child
          },
          {
            divider: true,
            content: '-'
          },
          {
            flex: 1,
            values: AREA_DATA[0].child[0].child
          }
        ]
      };
    },
    computed: {
      show: {
        get() {
          return this.isShow;
        },
        set(val) {
          this.$emit('close', val);
        }
      }
    },
    mounted() {
      //    if(this.value) {
      //      const values = this.value.split('-');
      //      this.$refs.picker.setValues(values);
      //    }
    },
    methods: {
      onValuesChange(picker, values) {
        if (values[0]) {
          if (values[0].child) {
            picker.setSlotValues(1, values[0].child);
          } else {
            picker.setSlotValues(1, []);
          }
        }
        if (values[1]) {
          if (values[1].child) {
            picker.setSlotValues(2, values[1].child);
          } else {
            picker.setSlotValues(2, []);
          }
        }
      },
      cancel() {
        this.show = false;
      },
      confirm() {
        this.show = false;
        const values = this.$refs.picker.getValues();
        if (!values[0]) {
          values[0] = AREA_DATA[0];
        }
        let str = [];
        for (let item of values) {
          if (item) {
            str.push(item.name);
          }
        }
        str = str.join('-');
        this.$emit('input', str);
      }
    }
  };
</script>

<style lang="less">
  .pa-site-picker {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

  .pa-site-toolbar {
    height: 40px;
    border-bottom: solid 1px #eaeaea;
  }

  .pa-site-btn {
    float: left;
    display: inline-block;
    width: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #26a2ff;
  }
</style>
