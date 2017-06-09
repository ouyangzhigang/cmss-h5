<template>
  <div>
    <div class="nav">
      <img class="back-img"
           src="../common/assets/images/back.png"
           alt="返回"
           @click="back"
           v-show="backImgShow"/>
      <span class="title"
            v-text="title"></span>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        routeCount: -1
      };
    },
    computed: {
      backImgShow() {
        return this.routeCount > 0;
      }
    },
    mounted() {
      this.$router.afterEach((to) => {
        this.title = to.meta.title;
        this.routeCount++;
      });
    },
    methods: {
      back() {
        this.routeCount = this.routeCount - 2;
        this.$router.back();
      }
    }
  };
</script>
<style lang="less">
  @import "./assets/less/utils";
  @import './assets/less/common';

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: @base-px;
    min-height: 100%;
    background-color: #f5f5f5;
  }

  body {
    margin: 0 auto;
    max-width: 750px;
    .px2rem(font-size, 14px);
    line-height: 20px;
    color: #202020;
    height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  a {
    background: transparent;
    text-decoration: none;
    color: #000;
  }

  a:active {
    outline: 0;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: normal;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  input,
  textarea,
  button {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  }

  textarea {
    resize: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  form,
  blockquote {
    margin: 0;
  }

  ul,
  ol,
  li,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #ccc;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #ccc;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #ccc;
  }

  em, i {
    font-style: normal;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .flex-colunm {
    display: flex;
    flex-direction: column;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    .px2rem(height, 40px);
    .px2rem(line-height, 40px);
    width: 100%;
    text-align: center;
    background-color: #fff;
    .title {
      .px2rem(font-size, 16px);
    }
    .back-img {
      .px2rem(width, 12px);
      .px2rem(height, 21px);
      .px2rem(left, 9px);
      .px2rem(top, 10px);
      position: absolute;
    }
  }

  .container {
    .px2rem(padding-top, 40px);
  }
</style>
