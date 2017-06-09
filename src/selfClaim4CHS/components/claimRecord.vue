<template>
  <div>
    <pa-search placeholder="请输入报案号进行查询"
               v-model="searchValue"
               @search="search"></pa-search>
    <ul class="caseList">
      <li class="caseList_group"
          v-for="(item, index) in caseList"
          v-tap="{method: search, param: item.reportNo}">
        <p class="caseList_title">
          <label class="caseList_title_label">案件状态</label>
          <span class="caseList_title_span">{{item.caseStatus | statusFilter}}</span>
        </p>
        <p class="caseList_item">
          <label class="caseList_item_label">被保险人</label>
          <span class="caseList_item_span"
                v-text="item.personnelName"></span>
        </p>
        <p class="caseList_item">
          <label class="caseList_item_label">报案号</label>
          <span class="caseList_item_span"
                v-text="item.reportNo"></span>
        </p>
        <p class="caseList_item">
          <label class="caseList_item_label">出险时间</label>
          <span class="caseList_item_span"
                v-text="item.accidentDate"></span>
        </p>
      </li>
    </ul>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {PaSearch} from '@components';
  import {mapActions} from 'vuex';

  Vue.component(PaSearch.name, PaSearch);

  const CASE_STATUS = [
    '微信已报案，线下/线上未完成申请',
    '线上/线下已完成申请',
    '案件被获取或被派工',
    '材料补全，退回补充',
    '完成审核，需补充原件',
    '原件提交，支付成功',
    '原件提交，支付失败',
    '原件审核不通过',
    '完成审核，无需补充原件，支付成功',
    '完成审核，无需补充原件，支付失败',
    '审核不通过'
  ];

  export default {
    name: 'searchReportNo',
    data() {
      return {
        searchValue: '',
        caseList: []
      };
    },
    created() {
      this.init();
    },
    watch: {
      searchValue(val) {
        this.searchValue = val.toUpperCase();
      }
    },
    methods: {
      ...mapActions([
        'queryList'
      ]),
      ...mapActions([
        'queryByReportNo'
      ]),
      init() {
        this.queryList('queryClaimRecords').then(res => {
          if (res.validate) {
            this.caseList = [];
            Array.prototype.push.apply(this.caseList, res.data.reportList);
          }
        });
      },
      search(e, val) {
        let reportNo = '';
        if (val) {
          reportNo = val;
        } else {
          reportNo = e;
        }
        this.queryByReportNo({
          url: 'queryClaimRecordByReportNo',
          param: {
            reportNo: reportNo
          }
        }).then(res => {
          if (res.validate) {
            this.$router.push('/caseProgress/' + res.data.caseStatus);
          }
        });
      }
    },
    filters: {
      statusFilter(val) {
        return CASE_STATUS[val - 1];
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .caseList {
    padding-top: 10px;
  }

  .caseList_group {
    background-color: #fff;
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .caseList_title,
  .caseList_item {
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    overflow: hidden;
  }

  .caseList_title {
    height: 48px;
  }

  .caseList_item:nth-last-of-type(1) {
    border-bottom: none;
  }

  .caseList_title_label,
  .caseList_item_label {
    width: 80px;
    overflow: hidden;
  }

  .caseList_title_label {
    color: @blue;
  }

  .caseList_title_span {
    display: block;
    border-radius: 4px;
    min-width: 75px;
    height: 30px;
    line-height: 30px;
    background-color: @blue;
    color: #fff;
    padding: 0 10px;
    text-align: center;
    font-size: 14px;
  }
</style>
