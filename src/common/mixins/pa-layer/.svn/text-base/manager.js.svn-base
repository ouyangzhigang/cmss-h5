import Vue from 'vue';
import paLayerVue from './layer';

const PaLayer = Vue.extend(paLayerVue);

// 初始z-index
let zIndex = 1010;

let getZIndex = () => ++zIndex;

/**
 * layer manager
 * @desc 蒙版控制
 *
 * @param { Array } [_instances] - 储存实例
 * @param { Object } [_layer] - 透明度
 * @param { Function } [open] - 打开弹框
 * @param { Function } [close] - 关闭弹框
 * @param { Function } [showLayer] - 显示弹层
 * @param { Function } [closeLayer] - 关闭弹层
 * @param { Function } [changeLayerStyle] - 修改弹层样式
 * @param { Function } [clickHandler] - 点击事件
 *
 */

export default {
  _instances: [],
  _layer: null,
  open(instance) {
    if (!instance || this._instances.indexOf(instance) !== -1) return;

    if (this._instances.length === 0) {
      this.showLayer(instance.opacity, instance.color);
    }

    this._instances.push(instance);
    this.changeLayerStyle();

    const dom = instance.$el;
    dom.style.zIndex = getZIndex();
  },
  close(instance) {
    let index = this._instances.indexOf(instance);
    if (index === -1) return;

    Vue.nextTick(() => {
      this._instances.splice(index, 1);

      if (this._instances.length === 0) {
        this.closeLayer();
      }
      this.changeLayerStyle();
    });
  },
  showLayer(opacity, color) {
    let layer = this._layer = new PaLayer({
      el: document.createElement('div')
    });

    const dom = layer.$el;
    dom.style.zIndex = getZIndex();
    layer.opacity = opacity;
    layer.color = color;
    layer.onClick = this.clickHandler.bind(this);

    document.body.appendChild(layer.$el);

    this.bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  },
  closeLayer() {
    if (!this._layer) return;

    document.body.style.overflow = this.bodyOverflow;
    let layer = this._layer;
    this._layer = null;

    layer.$destroy();

    layer.$el.parentNode.removeChild(layer.$el);
  },
  changeLayerStyle() {
    if (!this._layer || this._instances.length === 0) return;

    const instance = this._instances[this._instances.length - 1];
    this._layer.color = instance.color;
    this._layer.opacity = instance.opacity;
  },
  clickHandler() {
    if (this._instances.length === 0) return;

    const instance = this._instances[this._instances.length - 1];
    if (instance.cancel) {
      instance.cancel();
    }
  }
};
