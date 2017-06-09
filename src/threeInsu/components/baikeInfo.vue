<template>
  <div id="encyInfo">
    <p class="title"
       v-text="this.article.title"></p>
    <!--<span class="share">点击分享</span></P>-->
    <p class="note"><span v-text="createDate"></span></P>
    <div class="pic">
      <img class="pic-img"
           v-for="(src, index) in imgs"
           :src="src">
    </div>
    <div class="content">
      <p v-for="(item, index) in content"
         :key="index"
         v-text="item"></p>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'encyInfo',
    data() {
      return {
        article: {},
        createDate: '',
        content: [],
        imgs: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$http.post('/transmit/getTransmitData.do', {
          requestData: '{idClmCarEopTitle:"' + this.$route.params.id + '"}',
          urlMapping: 'claim.selfClaim.getCarEncyclopediaContent'
        }).then(res => {
          this.article = res.data.data.data.carEopContent;
          this.serializeDate(this.article.createdDate);
          this.serializeContent(this.article.content);
          this.serializeImg(this.article.contentImgUrl);
        });
      },
      serializeDate(val) {
        if (val) {
          let date = new Date(val);
          this.createDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
        }
      },
      serializeContent(val) {
        if (val) {
          this.content = val.split('<br>');
        }
      },
      serializeImg(val) {
        if (val) {
          this.imgs = val.split(';');
        }
      }
    }
  };
</script>
<style lang="less"
       scoped>
  body {
    background: none;
  }

  .title {
    margin: 10px auto 10px 5px;
    font-size: 18px;
    font-weight: bold;
  }

  .share {
    font-size: 12px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid #7D9FF5;
    color: #7D9FF5;
    display: inline-block;
    margin-left: 8px;
    line-height: 18px;
    height: 20px;
    text-align: center;
  }

  .note {
    margin: 10px auto 10px 5px;
    color: #A1A1A1;
  }

  .note span {
    margin-left: 8px;
  }

  .pic {
    padding: 0 10px;
  }

  .content {
    margin: 10px auto;
  }

  .content {
    padding: 0 10px;
    p {
      text-indent: 2rem;
      color: #A1A1A1;
      letter-spacing: 1px;
    }
  }

  .pic-img {
    width: 100%;
  }
</style>
