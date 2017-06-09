<template>
  <div id="post"
       class="post">
    <pa-page class="post-page"
             header="单证上传"
             :tips="tips"
             progress="3"
             :btns="pageBtns"
             @submit="submit">
      <a href="javascript:void(0)"
         v-tap="openPostTips"
         class="post-msg">上传须知</a>
      <div class="pa-file-panel"
           v-for="(group, parentIndex) in filesGroup"
           :key="parentIndex">
        <!--有子类docuSmallTypes-->
        <template v-if="group.title">
          <header class="post-title"
                  v-text="group.title"></header>
          <div class="pa-file">
            <!--当只读时，如果没有上传图片就隐藏-->
            <!--循环显示已上传图片-->
            <div class="pa-radio-group"
                 v-if="!isView">
              <pa-radio v-model="checked[item.parentIndex]"
                        :name="item.name"
                        :value-string="item.value"
                        v-for="(item, index) in group"
                        :key="index">{{item.label}}
              </pa-radio>
            </div>
            <div class="post-child-group clearfix"
                 v-for="(item, index) in group"
                 v-show="checked[item.parentIndex] === item.value"
                 :class="{'flex-row-full': (item.childs.length + item.examples.length) > 1}"
                 :key="index">
              <div class="post-child-item"
                   v-for="(child, childIndex) in item.childs"
                   v-if="!child.isDel"
                   v-tap="{method: openDialog, param: {item: child, code: '0'}}"
                   :key="childIndex">
                <div class="pa-file-post">
                  <img :src="child.src"
                       class="pa-file-img"/>
                </div>
              </div>
              <!--当只读时，隐藏上传按钮-->
              <div class="post-child-item"
                   v-if="!isView"
                   v-for="(child, childIndex) in item.examples"
                   :key="childIndex">
                <div class="pa-file-post"
                     :class="{'empty': !child.src}"
                     v-tap="{method: openDialog, param: {item: child, code: '1'}}">
                  <i class="pa-file-plus"
                     v-if="!isView"></i>
                  <img :src="child.src"
                       class="pa-file-img"
                       v-show="child.src"/>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!--没有子类docuSmallTypes-->
        <template v-if="!group.title">
          <div class="pa-file">
            <!--当只读时，如果没有上传图片就隐藏-->
            <p class="pa-file-title"
               v-text="group.label"
               v-if="!isView"
               v-once></p>
            <!--循环显示已上传图片-->
            <div class="post-child-group clearfix"
                 :class="{'flex-row-full': (group.childs.length + group.examples.length) > 1}">
              <div class="post-child-item"
                   v-for="(item, index) in group.childs"
                   v-if="!item.isDel"
                   :key="index">
                <div class="pa-file-post"
                     v-tap="{method: openDialog, param: {item: item, code: '0'}}">
                  <img :src="item.src"
                       class="pa-file-img"/>
                </div>
              </div>
              <!--当只读时，隐藏上传按钮-->
              <div class="post-child-item"
                   v-if="!isView">
                <div class="pa-file-post"
                     :class="{'empty': !item.src}"
                     v-for="(item, index) in group.examples"
                     :key="index"
                     v-tap="{method: openDialog, param: {item: item, code: '1'}}">
                  <i class="pa-file-plus"></i>
                  <img :src="item.src"
                       class="pa-file-img"
                       v-show="item.src"/>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </pa-page>
    <!--上传图片-->
    <pa-dialog class="pa-post-dialog"
               :class="{'pa-post-dialog-btns' : btns.length === 2}"
               v-model="isShow"
               @add="add"
               @del="del"
               @again="again"
               :btns="btns"
               is-close
               is-btns>
      <div class="pa-file-layer">
        <div class="pa-file-post">
          <input ref="file"
                 type="file"
                 class="pa-file-input"
                 accept="image/*"
                 @change="change"/>
          <img :src="currentSrc"
               class="pa-file-img"
               v-show="currentSrc"/>
        </div>
      </div>
    </pa-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Indicator, MessageBox, Toast} from 'mint-ui';
  import {PaPage, PaDialog} from '@components';
  import {mapActions} from 'vuex';

  Vue.component(PaPage.name, PaPage);
  Vue.component(PaDialog.name, PaDialog);

  // docuSmallType对应中文名称
  const LABELS = ['身份证', '户口本', '护照及其他', '出生证明'];
  // 单证类型对应材料类型
  const MATERIAL_TYPE = ['05', '01', '01', '03', '04', '04', '03', '04', '04', '02', '02', '02', '01', '02', '02'];

  //  10M
  const M = 10;
  const UNIT = 1024;
  const MAX_SIZE = M * UNIT * UNIT;

  export default {
    name: 'post',
    data() {
      /**
       * post data
       *
       * @param {Array} [checked] - radio选项值
       * @param {Array} [filesGroup] - 单证
       * @param {String} [currentSrc] - 当前图片base64值
       * @param {Object} [currentFile] - 当前选中单证信息
       * @param {Boolean} [leastOne] - 退单证是否有上传过，上传图片或者已上传图片可删除
       *
       */
      return {
        checked: [],
        filesGroup: [],
        currentSrc: '',
        tips: ['若您在未完成前退出，可在“补传单证”模块继续上传'],
        isShow: false,
        currentFile: [],
        btns: [],
        isView: this.$route.params.type === 'view',
        leastOne: false
      };
    },
    computed: {
      pageBtns() {
        if (this.isView) {
          return [{name: '返回首页', method: 'submit'}];
        } else {
          return [{name: '提交', method: 'submit'}];
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      ...mapActions([
        'getDocuTypesByClaimType'
      ]),
      ...mapActions([
        'materialUpload'
      ]),
      ...mapActions([
        'delImgByMediaids'
      ]),
      ...mapActions([
        'wechatSelfApplySubmit'
      ]),
      // 获取图片请求
      getImg(fileids, item, index) {
        let img = new Image();
        let self = this;
        img.onload = function() {
          item.childs.push({
            src: img.src,
            mediaids: item.mediaids[index],
            delflags: item.delflags[index],
            parent: item
          });
          item['isUpload'] = true;
          self.checked[item['parentIndex']] = item['value'];
          // 当可删除时，也允许通过
          if (item.delflags[index] === 'Y') {
            self.leastOne = true;
          }
        };
        img.src = `/do/dispatch/chsSelfClaimController/getImgByteByFiledId?fildId=${fileids}&method=download`;
      },
      // 获取所有图片
      getAllImg() {
        this.$nextTick(() => {
          this.filesGroup.forEach(group => {
            if (group instanceof Array) {
              group.forEach(item => {
                item['fileids'].forEach((fileids, index) => {
                  this.getImg(fileids, item, index);
                });
              });
            } else {
              group['fileids'].forEach((fileids, index) => {
                this.getImg(fileids, group, index);
              });
            }
          });
        });
      },
      staticImg(path) {
        try {
          return require(`../assets/images/example${path}.jpg`);
        } catch (e) {
          return '';
        }
      },
      staticChildImg(path) {
        try {
          return require(`../assets/images/example-${path}.jpg`);
        } catch (e) {
          return '';
        }
      },
      // 初始化单证类型
      init() {
        this.getDocuTypesByClaimType().then(res => {
          if (res.validate) {
            let filesCache = [];
            res.data['docuTypeList'].map((item, index) => {
              // 是否必传
              let isMust = item['docuType'] === '1';
              if (item['docuSmallTypes']) {
                filesCache[index] = [];
                filesCache[index]['title'] = item['docuName'] + (isMust ? '(必传)' : '');
                // 绑定radio check值
                this.checked[index] = item['docuSmallTypes'][0]['smallType'];
                // 循环小类
                let childIndex = 0;
                item['docuSmallTypes'].map(doc => {
                  // 是否为身份证
                  let isIdCard = doc['smallType'] === '1';
                  let tmp = {
                    parentIndex: index,
                    index: childIndex++,
                    name: 'docuCode' + item['docuCode'],
                    value: doc['smallType'],
                    label: LABELS[doc['smallType'] - 1],
                    docuCode: item['docuCode'],
                    materialType: MATERIAL_TYPE[item['docuCode']],
                    docuSmallType: doc['smallType'],
                    fileids: doc['fileids'],
                    mediaids: doc['mediaids'],
                    delflags: doc['delflags'],
                    isUpload: !isMust,
                    childs: [],
                    examples: []
                  };
                  tmp.examples.push({
                    src: this.staticChildImg(doc['smallType']),
                    parent: tmp
                  });
                  // 当为身份证的时候添加一个身份证反面
                  if (isIdCard) {
                    let idCardType = 5;
                    tmp.examples.push({
                      src: this.staticChildImg(idCardType),
                      parent: tmp
                    });
                  }
                  filesCache[index].push(tmp);
                });
              } else {
                let str = item['docuCode'] === '10' ? '或延误截屏' : '';
                let tmp = {
                  parentIndex: index,
                  label: item['docuName'] + str + (isMust ? '(必传)' : ''),
                  docuCode: item['docuCode'],
                  materialType: MATERIAL_TYPE[item['docuCode']],
                  fileids: item['fileids'],
                  mediaids: item['mediaids'],
                  delflags: item['delflags'],
                  src: this.staticImg(item['docuCode']),
                  isUpload: !isMust,
                  childs: [],
                  examples: []
                };
                tmp.examples.push({
                  src: this.staticImg(item['docuCode']),
                  parent: tmp
                });
                filesCache.push(tmp);
              }
            });
            this.filesGroup = filesCache;
            this.getAllImg();
          }
        });
      },
      // 显示对话框
      openDialog(e, param) {
        let item = param.item;
        if (!this.isView) {
          // 将value清空
          this.$refs.file.value = '';
          // 缓存当前单证信息
          this.currentFile = item;
          // 设置弹出框图片
          this.currentSrc = item['src'];
          // '0'-已上传单证  '1'-添加单证
          if (param.code === '0') {
            if (item.delflags === 'N') {
              this.btns = [];
            } else {
              this.btns = [
                {className: 'btn-add', text: '重新上传', type: 'again'},
                {className: 'post-btn', text: '删除', type: 'del'}
              ];
            }
          } else if (param.code === '1') {
            this.btns = [
              {className: 'post-btn', text: '点击添加', type: 'add'}
            ];
          }
          this.isShow = true;
        } else {
          this.currentSrc = item['src'];
          this.btns = [];
          this.isShow = true;
        }
      },
      // file input change
      change(e) {
        if (window.FileReader && e.target.files[0]) {
          if (e.target.files[0].size <= MAX_SIZE) {
            Indicator.open();
            let fr = new FileReader();
            let self = this;
            fr.onload = (e) => {
              self.prePost(e.target.result);
            };
            fr.onerror = (e) => {
              Indicator.close();
            };
            fr.readAsDataURL(e.target.files[0]);
          } else {
            MessageBox({
              title: '警告',
              message: '图片尺寸过大，图片大小请小于5M！'
            });
          }
        }
      },
      prePost(data) {
        // 如果重新上传，先删除
        if (this.currentFile.isAgain) {
          this.delImgByMediaids({
            mediaids: [this.currentFile.mediaids]
          }).then(res => {
            if (res.validate) {
              this.post(data);
            }
          });
        } else {
          this.post(data);
        }
      },
      // 上传单证
      post(data) {
        let param = {
          media: [data],
          fileName: [this.currentFile.parent['label'] + (+new Date())],
          materialType: this.currentFile.parent['materialType'],
          docuType: this.currentFile.parent['docuCode']
        };
        // 如果是小类型则添加小类编码
        if (this.currentFile.parent['docuSmallType']) {
          param['docuSmallType'] = this.currentFile.parent['docuSmallType'];
        }
        this.materialUpload(param).then(res => {
          Indicator.close();
          if (res.validate) {
            // 设置弹出框图片
            this.currentSrc = data;
            // 如果重新上传，则仅修改src，否则向childs追加
            if (this.currentFile.isAgain) {
              // 删除标记
              delete this.currentFile.isAagin;
              this.currentFile.src = data;
              this.currentFile.mediaids = res.data.mediaids[0];
            } else {
              this.currentFile.src = '';
              this.currentFile.parent['childs'].push({
                src: data,
                mediaids: res.data.mediaids[0],
                parent: this.currentFile.parent
              });
            }
            // 标记为已上传
            this.currentFile.parent['isUpload'] = true;
            // 修改弹出框操作按钮
            this.btns = [
              {className: 'btn-add', text: '继续上传', type: 'add'},
              {className: 'post-btn', text: '完成', type: 'cancel'}
            ];
            // 上传过一张
            this.leastOne = true;
          }
        });
      },
      // 点击添加
      add() {
        this.$refs.file.click();
      },
      // 重新上传
      again() {
        // 给当前单证添加重新上传标记
        this.currentFile.isAgain = true;
        this.add();
      },
      // 单证删除
      del() {
        this.delImgByMediaids({
          mediaids: [this.currentFile.mediaids]
        }).then(res => {
          if (res.validate) {
            MessageBox({
              title: '提示',
              message: '删除成功'
            });
            // 标记删除
            this.currentFile.isDel = true;
            this.isShow = false;
          }
        });
      },
      // 判断是否上传
      judge(item) {
        if (!item['isUpload']) {
          MessageBox({
            title: '提示',
            message: item['label'] + '必须上传'
          });
          return false;
        } else if (item['docuSmallType'] === '1' && item.childs.length < 2) {
          MessageBox({
            title: '提示',
            message: '身份证必须上传正反面'
          });
          return false;
        }
        return true;
      },
      validate() {
        // 退单证时必须上传一张
        if (this.$store.state.caseStatus === '3' || this.$store.state.caseStatus === '4') {
          if (!this.leastOne) {
            MessageBox({
              title: '提示',
              message: '请重新上传退回单证'
            });
            return false;
          } else {
            return true;
          }
        }
        // 其他情况校验isUpload
        for (let group of this.filesGroup) {
          if (group instanceof Array) {
            for (let item of group) {
              if (item['value'] && this.checked[item['parentIndex']] === item['value'] && !this.judge(item)) {
                return false;
              }
            }
          } else {
            if (!this.judge(group)) {
              return false;
            }
          }
        }
        return true;
      },
      // 下一页
      submit() {
        // 当为查看时跳转回首页
        if (this.isView) {
          this.$router.push('/');
          return;
        }
        if (!this.validate()) {
          return;
        }
        this.wechatSelfApplySubmit().then(res => {
          if (res.validate) {
            this.$router.push('/applyResult/success');
          } else {
            this.$router.push('/applyResult/fail');
          }
        });
      },
      // 上传须知
      openPostTips() {
        Toast({
          message: '该功能暂未开放',
          position: 'middle',
          duration: 2000
        });
      }
    },
    components: {
      /**
       * pa-radio
       *
       * @param {String} [name] - input的name属性
       * @param {String} [valueString] - 选中的value值
       * @param {Boolean} [value] - 默认是否选中
       *
       * @example
       * <tips-checkbox check></tips-checkbox>
       *
       */
      'pa-radio': {
        template: `<span class="pa-radio">
                    <label>
                      <input type="radio" :name="name" :value="valueString" v-model="isCheck" class="tips-radio-input">
                      <span class="pa-radio-span"></span>
                      <slot></slot>
                    </label>
                  </span>`,
        props: {
          name: {
            type: String,
            required: true
          },
          valueString: {
            type: String,
            required: true
          },
          value: {
            required: true
          }
        },
        computed: {
          isCheck: {
            get() {
              return this.value;
            },
            set(val) {
              this.$emit('input', val);
            }
          }
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/utils";

  .mint-indicator {
    z-index: 9999;
    position: relative;
  }

  .post-title {
    color: #50c5e2;
    text-align: left;
    padding: 10px 0;
    font-size: 1rem;
    padding-left: 10px;
    border-top: 1px solid @panel;
  }

  .post-page {

    .pa-panel-title {
      text-align: left;
      padding-left: 10px;
    }

    .pa-panel {
      padding: 0 5px;
    }
    .tips-radio-input:checked ~ .pa-radio-span {
      border-color: @blue;
      background-color: #fff;
      &:after {
        background-color: #55c8e4;
      }
    }
    .pa-radio-span {
      width: 16px;
      height: 16px;
      border-color: @blue;
      background-color: #fff;
      vertical-align: text-bottom;
      &:after {
        top: 2px;
        left: 2px;
        width: 10px;
        height: 10px;
        background-color: #fff;
      }
    }
    .pa-radio {
      color: #212121;
    }
  }

  .post-msg {
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 12px;
    color: @darkBlue;
  }

  .pa-file {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-top: 1px solid #f9f9f9;

    &.bd-none {
      border: none;
    }

    .pa-flex-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .flex-colunm {
      min-width: 50%;
    }
    .post-child-item {
      display: inline-block;
      float: left;
      &:nth-child(even) {
        .px2rem(margin-left, 38px);
      }
    }
    .pa-radio-group {
      padding-left: 10px;
    }
    .pa-radio {
      display: inline-block;
      line-height: 30px;
      margin-right: 10px;
    }
  }

  .post .pa-post-dialog {
    border: none;
    transform: translate(-50%, 0);
    .px2rem(top, 136px);
    .px2rem(width, 340px);
    .px2rem(height, 198px);
    min-height: 200px;
    &.pa-post-dialog-btns {
      .pa-dialog-button {
        width: 50%;
      }
    }
    .pa-dialog-content {
      overflow: hidden;
      padding: 0 5px;
    }
    .pa-dialog-footer {
      border-top: 1px solid @blue;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 11;
      height: 33px;
      overflow: hidden;
    }
    .pa-dialog-button {
      height: 33px;
      border-radius: 0;
      width: 100%;
      float: left;
      text-align: center;
      &.btn-add {
        background-color: #fff;
        color: @blue;
      }
    }
    .pa-dialog-wrap {
      margin: 0;
      padding: 0;
    }
  }

  .pa-file-panel {
    .post-title {
      border-top: 0;
      font-size: 14px;
    }
  }

  .pa-file-title {
    .px2rem(padding-left, 10px);
    .px2rem(font-size, 14px);
    .px2rem(min-height, 30px);
    .px2rem(line-height, 30px);
    color: @blue;
  }

  .pa-file-post {
    position: relative;
    .px2rem(width, 120px);
    .px2rem(height, 80px);
    .px2rem(margin-left, 10px);
    .px2rem(margin-bottom, 10px);
    border-radius: 4px;
    overflow: hidden;
    &.empty {
      background-color: #f2f2f2;
    }
    .pa-file-plus {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 9;
      &:before {
        content: '';
        position: absolute;
        .px2rem(width, 44px);
        height: 2px;
        background: #fff;
        .px2rem(left, 38px);
        top: 50%;
      }
      &:after {
        content: '';
        position: absolute;
        width: 2px;
        .px2rem(height, 44px);
        background: #fff;
        left: 50%;
        .px2rem(top, 18px);
      }
    }
  }

  .pa-file-layer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .pa-file-post {
      height: 100%;
      width: 100%;
    }

    .icon-plus {
      font-size: 80px;
    }

  }

  .pa-file-input,
  .pa-file-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .pa-file-input {
    display: none;
    opacity: 0;
  }

  .tips-radio-input {
    display: none;
  }

  .pa-radio-span {
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;

    &:after {
      content: " ";
      border-radius: 100%;
      top: 5px;
      left: 5px;
      position: absolute;
      width: 8px;
      height: 8px;
      transition: transform .2s;
      transform: scale(0);
    }

  }

  .tips-radio-input:checked ~ .pa-radio-span {
    background-color: #26a2ff;
    border-color: #26a2ff;

    &:after {
      background-color: #fff;
      transform: scale(1);
    }

  }

  .pa-file-label {
    color: #212121;
  }

  .flex-row-full {
    width: 100%;
  }
</style>
