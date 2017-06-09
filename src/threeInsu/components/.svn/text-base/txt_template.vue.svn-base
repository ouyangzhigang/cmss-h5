<template>
<div id="txt_template">
<mt-navbar v-model="selected" id="navbar1">
  <mt-tab-item id="1">温馨</mt-tab-item>
  <mt-tab-item id="2">有趣</mt-tab-item>
  <mt-tab-item id="3">搞笑</mt-tab-item>
  <mt-tab-item id="4">浪漫</mt-tab-item>
  <mt-tab-item id="5">幽默</mt-tab-item>
  <mt-tab-item id="6">商务</mt-tab-item>

</mt-navbar>
<mt-tab-container v-model="selected" id="tabContainer1">
  <mt-tab-container-item  id="1">
    <mt-cell  title="选择短信" class="cell_title"/>
    <mt-cell v-for="n in 5" :title="'内容 ' + n" class="cell_content" :key="n"/>
   </mt-tab-container-item>
 </mt-tab-container>
</div>
</template>
<script>
import Vue from 'vue';
import {Navbar, TabItem, TabContainer, TabContainerItem, Cell} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

export default {
  name: 'txt_template',
  data() {
    return {
      selected: '1'
    };
  }
};
</script>
<style lang="less" scoped>
.cell_title{
  margin-top:10px;
}
.cell_content{
  margin-bottom:10px;
}
</style>
