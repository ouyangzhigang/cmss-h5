<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>
<style lang="less">
  @import "./assets/less/utils";

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
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 320px){
    html {
      font-size: 14px;
    }
  }

  body {
    margin: 0 auto;
    max-width: 750px;
    .px2rem(font-size, 14px);
    line-height: 20px;
    color: #212121;
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

  dfn,em {
    font-style: normal;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  input,
  textarea,
  button {
    outline: 0;
    border: 0;
    margin: 0;
    padding: 0;
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    appearance: none;
  }

  ::-webkit-input-placeholder {
    color: #d7d7d7 !important;
    font-size: 12px;
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

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .header {
    .header();
  }

  .flex-colunm {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .letter-4 {
    letter-spacing: 4px;
  }

  .tx-blue {
    color: @blue;
  }

  /*修改mint-ui默认样式*/
  .mint-msgbox-confirm, .mint-msgbox .mint-msgbox-title {
    .px2rem(font-size, 18px);
  }

  .mint-msgbox .mint-msgbox-message {
    .px2rem(font-size, 16px);
  }

  .mint-msgbox-wrapper .mint-msgbox {
    .px2rem(width, 280px);
  }
</style>
