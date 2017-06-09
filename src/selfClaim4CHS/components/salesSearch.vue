<template>
  <div id="salesSearch">
    <header class="header">客服门店</header>
    <div class="salesSearch-select">
      <pa-field name="province"
                type="select"
                :slotData="province.slotData"
                value-key="name"
                placeholder="省"
                v-model="province.value"></pa-field>
      <pa-field ref="city"
                name="city"
                type="select"
                :slotData="city.slotData"
                value-key="name"
                placeholder="市"
                v-model="city.value"></pa-field>
    </div>
    <ul class="salesSearch-list">
      <li class="salesSearch-item"
          v-for="(item, index) in list"
          :key="index">
        <p class="salesSearch-title"
           v-text="item.name"></p>
        <p class="salesSearch-p">
          <span class="salesSearch-label">联系电话：</span>
          <span class="salesSearch-context"
                v-text="item.phone"></span>
        </p>
        <p class="salesSearch-p">
          <span class="salesSearch-label">详细地址：</span>
          <span class="salesSearch-context"
                v-text="item.site"></span>
        </p>
      </li>
    </ul>
    <div class="pa-page-bottom">
      <button type="button"
              class="pa-page-btn"
              v-tap="goHome">返回
      </button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {PaField} from '@components';
  import SALES from '@json/sales';

  Vue.component(PaField.name, PaField);

  export default {
    name: 'salesSearch',
    data() {
      return {
        province: {
          value: '',
          slotData: [
            {
              flex: 1,
              values: SALES
            }
          ]
        },
        city: {
          value: '',
          slotData: [
            {
              flex: 1,
              values: SALES[0].child
            }
          ]
        },
        list: []
      };
    },
    watch: {
      'province.value'(val) {
        if (val) {
          this.$refs.city.$refs.select.$refs.picker.setSlotValues(0, val[0].child);
          this.city.value = [val[0].child[0]];
        }
      },
      'city.value'(val) {
        if (val) {
          if (!this.province.value) {
            this.province.value = [SALES[0]];
          }
          this.list = val[0].child;
        }
      }
    },
    methods: {
      goHome() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  #salesSearch {
    .pa-field {
      background: #fff;
    }
    .pa-field-select {
      justify-content: center;
      padding-left: 15px;
    }
  }

  .salesSearch-select {
    margin: 20px auto;
    width: 90%;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    overflow: hidden;
  }

  .salesSearch-list {
    min-height: 300px;
  }

  .salesSearch-item {
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
  }

  .salesSearch-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }

  .salesSearch-p {
    display: flex;
    flex-shrink: 0;
  }

  .salesSearch-label {
    width: 80px;
    color: #666;
  }

  .salesSearch-context {
    display: flex;
    flex: 1;
  }
</style>
