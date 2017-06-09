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
               :value-key='valueKey'
               @change="onValuesChange">
    </mt-picker>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {Picker} from 'mint-ui';
  import paLayer from '../mixins/pa-layer';

  Vue.component(Picker.name, Picker);

  /**
   * pa-picker
   */

  export default {
    name: 'pa-picker',
    mixins: [paLayer],
    props: {
      slotData: Array,
      valueKey: {
        type: String,
        default: 'text'
      },
      childName: String,
      grade: {
        default: 1
      },
      value: {
        required: true
      }
    },
    data() {
      return {
        show: false,
        slots: this.slotData
      };
    },
    watch: {
      show(val) {
        if (!val) {
          this.$emit('close');
        }
      }
    },
    methods: {
      open() {
        this.show = true;
      },
      onValuesChange(picker, values) {
        if (values[0]) {
          if (values[0][this.childName]) {
            picker.setSlotValues(1, values[0][this.childName]);
          } else {
            picker.setSlotValues(1, []);
          }
        }
        if (values[1]) {
          if (values[1][this.childName]) {
            picker.setSlotValues(2, values[1][this.childName]);
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
        let values = this.$refs.picker.getValues();
        if (!values[0]) {
          values[0] = this.slotData[0].values[0];
        }
        this.$emit('input', values);
        this.$emit('confirm', values);
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
