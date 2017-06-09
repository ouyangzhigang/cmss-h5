<template>
  <div id="home">
    <mt-tab-container v-model="containerActive">
      <mt-tab-container-item id="tab-container1">
        <div class="page-wrap">
          <div class="swipe-wrap">
            <mt-swipe :show-indicators="false">
              <mt-swipe-item>
                <img src=""
                     alt=""
                     width="100%"
                     height="100%"/>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <pa-cell class="home-cell"
                   :to="item.to"
                   v-for="item in list"
                   :key="item.to">
            <div slot="left"
                 class="flex-colunm">
              <span v-text="item.title"
                    class="home-cell-title"></span>
              <span v-text="item.label"
                    class="home-cell-label"></span>
            </div>
            <div slot="right"
                 class="home-cell-icon">
              <img :src="item.img"
                   width="100%"
                   height="100%"/>
            </div>
          </pa-cell>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar class="home-tabbar"
               v-model="tabActive"
               fixed>
      <mt-tab-item v-tap="{method: goto, param: index}"
                   :id="'tab-bar' + (index + 1)"
                   v-for="(item, index) in tabbar"
                   :key="index">
        <img slot="icon"
             :src="item.img"> {{item.title}}
        <i></i>
      </mt-tab-item>
      <img src="../assets/images/hot.png"
           class="home-hot">
    </mt-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Tabbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem, Toast} from 'mint-ui';
  import {PaCell} from '@components';
  import {mapActions} from 'vuex';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(PaCell.name, PaCell);

  export default {
    name: 'home',
    data() {
      return {
        containerActive: 'tab-container1',
        tabActive: '',
        list: [
          {
            to: '/tips',
            title: '自助报案',
            label: '新增意外险、健康理赔报案',
            img: require('../assets/images/home-list1.png')
          },
          {
            to: '/searchReportNo',
            title: '补传单证',
            label: '补传上传单证、完善理赔资料',
            img: require('../assets/images/home-list2.png')
          },
          {
            to: '/claimRecord',
            title: '理赔记录',
            label: '案件进度查询、历史理赔记录查询',
            img: require('../assets/images/home-list3.png')
          }
        ],
        tabbar: [
          {
            img: require('../assets/images/home-tabbar1.png'),
            title: '在线客服'
          },
          {
            img: require('../assets/images/home-tabbar2.png'),
            title: '网点查询'
          },
          {
            img: require('../assets/images/home-tabbar3.png'),
            title: '服务手册'
          },
          {
            img: require('../assets/images/home-tabbar4.png'),
            title: '保险购买'
          }
        ]
      };
    },
    created() {
      this.wechatSinglesignOn();
    },
    methods: {
      ...mapActions([
        'wechatSinglesignOn'
      ]),
      goto(e, index) {
        if (index === 1) {
          this.$router.push('/salesSearch');
        } else {
          Toast({
            message: '功能暂未开发，敬请期待',
            position: 'bottom',
            duration: 2000
          });
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  #home {
    .mint-tabbar > .mint-tab-item.is-selected {
      color: @blue;
    }
  }

  .swipe-wrap {
    .px2rem(height, 150px);
    .px2rem(margin-bottom, 8px);
  }

  .page-wrap {
    .px2rem(padding-bottom, 100px);
  }

  .home-cell {
    .px2rem(margin-bottom, 10px);
    .px2rem(height, 110px);
    .px2rem(padding, 20px);
    .px2rem(padding-top, 10px);
    padding-bottom: 0;
    &:nth-last-of-type(1) .home-cell-icon {
      position: relative;
      right: -5px;
    }
    &:nth-last-of-type(3) .home-cell-icon {
      position: relative;
      .px2rem(bottom, -10px);
    }
  }

  .home-cell-icon {
    .px2rem(width, 120px);
    .px2rem(height, 90px);
  }

  .home-cell-title {
    .px2rem(font-size, 20px);
    .px2rem(margin-bottom, 10px);
    .px2rem(padding-top, 10px);
    font-weight: 700;
  }

  .home-cell-label {
    .px2rem(font-size, 14px);
    color: #666;
  }

  .home-tabbar .mint-tab-item {
    .px2rem(padding-bottom, 10px);
  }

  .home-tabbar .mint-tab-item-icon {
    .px2rem(width, 50);
    .px2rem(height, 50);
  }

  .home-hot {
    position: absolute;
    top: 0;
    right: 0;
    .px2rem(width, 33px);
    .px2rem(height, 33px);
  }
</style>
