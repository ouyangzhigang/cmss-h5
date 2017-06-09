<template>
  <form novalidate="novalidate" :name="name">
    <slot></slot>
  </form>
</template>

<script>
  /**
   * pa-form
   * @desc 表单
   *
   * @param {Boolean} [value] - 双向绑定值 显示表单是否正确
   * @param {String} [name] - 表单name属性
   *
   * @example
   * <pa-form v-model="value" name="form"></pa-file>
   */

  export default {
    name: 'pa-form',
    props: {
      value: Object,
      name: String
    },
    data() {
      return {
        validateArr: []
      };
    },
    methods: {
      receive(obj) {
        for (let item in obj) {
          if (obj.hasOwnProperty(item)) {
            this.validateArr[item] = obj[item];
          }
        }
        this.commit();
      },
      commit() {
        let valid = true;
        let field = {};
        let msg = '';
        for (let item in this.validateArr) {
          if (this.validateArr.hasOwnProperty(item)) {
            if (!this.validateArr[item].valid) {
              valid = false;
              field[item] = this.validateArr[item].msg;
              if (!msg) {
                msg = this.validateArr[item].msg[0].msg;
              }
            }
          }
        }
        this.$emit('input', {
          valid: valid,
          field: field,
          msg: msg
        });
      }
    }
  };
</script>

<style>
</style>
