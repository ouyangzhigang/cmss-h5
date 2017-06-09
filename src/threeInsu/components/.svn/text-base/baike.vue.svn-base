<template>
  <div id="baike">
    <div class="baike-tab">
      <div class="baike-tab-list clearfix"
           :style="tabStyle"
           v-ui-scroll>
        <div class="baike-tab-item"
             :class="{'active': item.valueCode === currentTab}"
             v-text="item.valueChineseAbbrName"
             v-for="(item, index) in typesList"
             @click="tabClick(item.valueCode)"
             :key="index"></div>
      </div>
    </div>

    <div class="baike-section"
         v-for="item in articleList"
         v-tap="{method: gotoDetail, param: item.idClmCarEopTitle}"
         :key="item.idClmCarEopTitle">
      <div class="baike-article">
        <img class="baike-article-img"
             :src="item.titleImgUrl">
        <div class="baike-article-wrap">
          <p class="baike-article-header">
            <i class="baike-article-icon"
               v-if="item.titleLevelType !== '99'">{{item.titleLevelType | leverFilter}}</i>
            <span v-text="item.title"></span>
          </p>
          <p class="baike-article-content">
            <span v-text="item.subTitle"></span><span class="baike-article-time">{{item.createdDate | dateFilter}}</span>
          </p>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import BAIKE_TAB from '@json/baike-tab';

  export default {
    name: 'baike',
    data() {
      return {
        tabList: BAIKE_TAB,
        currentTab: '00',
        selected: '1',
        articleList: [],
        typesList: []
      };
    },
    mounted() {
      this.init();
    },
    computed: {
      tabStyle() {
        const WIDTH = 60;
        const PADDING = 20;
        return {
          width: this.tabList.length * WIDTH + PADDING + 'px'
        };
      }
    },
    filters: {
      dateFilter(val) {
        if (val) {
          let date = new Date(val);
          return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
        } else {
          return '';
        }
      },
      leverFilter(val) {
        switch (val) {
          case '01':
            return '置顶';
          case '02':
            return '优秀';
          default :
            return '';
        }
      }
    },
    methods: {
      tabClick(code) {
        this.currentTab = code;
        this.getList(code);
      },
      init() {
        this.getList('00');
      },
      getList(code) {
        this.$http.post('/transmit/getTransmitData.do', {
          requestData: '{encyclopediaType: "' + code + '"}',
          urlMapping: 'claim.selfClaim.getCarEncyclopediaTitle'
        }).then(res => {
          let data = res.data.data.data;
          this.articleList = data.eopList;
          this.typesList = data.encyclopediaTypeList;
        });
      },
      gotoDetail(e, id) {
        this.$router.push('/baikeInfo/' + id);
      }
    }
  };
</script>
<style lang="less"
       scoped>
  @import "../assets/less/utils";

  #baike{
    .px2rem(padding-top, 55px);
  }
  .baike-tab {
    position: fixed;
    .px2rem(top, 40px);
    .px2rem(height, 45px);
    overflow: hidden;
    width: 100%;
    border-top: 1px solid #f6f6f6;
    background-color: #fff;
    z-index: 9;
  }

  .baike-tab-list {
    .px2rem(height, 42px);
    .px2rem(line-height, 42px);
    padding: 0 6px;
    white-space: nowrap;
  }

  .baike-tab-item {
    float: left;
    .px2rem(font-size, 16px);
    .px2rem(width, 60px);
    text-align: center;
    &.active {
      border-bottom: 3px solid #597ed9;
    }
  }

  .baike-article {
    display: flex;
    .px2rem(height, 80px);
    background-color: #fff;
    padding: 5px 13px;
    border-bottom: 1px solid #f6f6f6;
  }

  .baike-article-img {
    .px2rem(width, 70px);
    .px2rem(height, 70px);
    .px2rem(margin-right, 17px);
  }

  .baike-article-wrap {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  .baike-article-icon {
    display: inline-block;
    .px2rem(width, 32px);
    .px2rem(height, 17px);
    .px2rem(line-height, 17px);
    text-align: center;
    background: #7d9ff5;
    border-radius: 9px;
    color: #fff;
    vertical-align: bottom;
    font-size: 12px;
  }

  .baike-article-header {
    .px2rem(line-height, 17px);
    font-size: 14px;
    .px2rem(margin-top, 7px);
    .px2rem(margin-bottom, 5px);
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .baike-article-content {
    .px2rem(line-height, 20px);
    .px2rem(height, 40px);
    color: #999;
    font-size: 12px;
  }

  .baike-article-time {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
</style>
