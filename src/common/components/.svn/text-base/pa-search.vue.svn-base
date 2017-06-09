<template>
  <div class="pa-search">
    <i class="iconfont icon-search"></i>
    <!--type 为search时，根据用户输入修改内容会出错-->
    <input ref="search" type="text" class="pa-search-input" v-model="currentValue" :placeholder="placeholder"
           @keypress="keypress"/>
    <button type="button" class="pa-search-button" v-tap="search">查询</button>
  </div>
</template>

<script>
  /**
   * pa-search
   * @desc 搜索框
   *
   * @param {String} [placeholder] - 输入框提示文字
   * @param {Null} [value] - 双向绑定数据
   * @param {Boolean} [autoFocus] - 输入框是否自动获取焦点
   */

  export default {
    name: 'pa-search',
    props: {
      placeholder: String,
      value: null,
      autoFocus: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.autoFocus && this.$refs.search.focus();
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      search() {
        this.$emit('search', this.currentValue);
      },
      keypress(e) {
        const ENTER_KEY = 13;
        if (Number(e.keyCode) === ENTER_KEY) {
          e.preventDefault();
          this.search();
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/less/utils";

  .pa-search {
    display: flex;
    padding: 10px 10px 0 20px;
    position: relative;
    font-size: 14px;
    .icon-search {
      font-size: 20px;
      color: #666;
      position: absolute;
      left: 30px;
      top: 13px;
    }
  }

  .pa-search-input {
    display: flex;
    flex: 1;
    background: #fff;
    height: 28px;
    border-radius: 5px;
    padding-left: 30px;
    border: 1px solid #979797;
    &::placeholder{
      color: @textColor;
    }
  }

  .pa-search-button {
    background-color: @blue;
    color: #fff;
    width: 60px;
    border-radius: 4px;
    margin-left: 10px;
    height: 28px;
  }
</style>
