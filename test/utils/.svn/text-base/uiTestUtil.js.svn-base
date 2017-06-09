import Vue from 'vue';
import _ from 'underscore';
let id = 0;
/** 创建一个body下的div来挂载单文件组件 */
const createElm = function() {
  const elm = document.createElement('div');
  elm.id = 'app' + ++id;
  document.body.appendChild(elm);
  return elm;
};
const CODE_FORMAT = 'UTF-8';

/**
*销毁vm
*/
let destroyVM = (vm) => {
  if(!vm) return;
  let elm = vm.$el;
  if(!elm) return;
  let parentNode = elm.parentNode;
  if(!parentNode) return;
  parentNode.removeChild(elm);
};

/**
* 创建一个Vue实例对象
* Compnent - 组件配置，可直接传template
* mounted - 是否添加到DOM上
*/
let createVM = (component, props, plugins = [], mounted = false) => {
  if(_.isBoolean(plugins)) {
    mounted = plugins;
    plugins = [];
  }
  plugins.forEach((plugin) => {
    Vue.use(plugin);
  });
  const elm = createElm();
  if(_.isString(component)) {
     component = { template: component };
  }
  return new Vue(component).$mount(mounted === false ? null : elm);
};

let createComponent = (component, props = {}, mounted = false) => {
  if(_.isBoolean(props)) {
    mounted = props;
    props = {};
  }
  const elm = createElm();
  const Ctor = Vue.extend(component);
  return new Ctor({propsData: props}).$mount(mounted === false ? null : elm);
};

/**
* 事件触发：mouseenter, mouseleave, mouseover, keyup, change, click ...
*/

let triggerEvent = (elm, eventName, ...options) => {
  let eventType;
  if(/^mouse|click/.test(eventName)) {
    eventType = 'MouseEvents';
  } else if(/^key/.test(eventName)) {
    eventType = 'KeyBoardEvent';
  } else {
    eventType = 'HTMLEvents';
  }

  const event = document.createEvent(eventType);
  event.initEvent(eventName, ...options);

  elm.dispatchEvent
    ? elm.dispatchEvent(event)
    : elm.fireEvent('on' + eventName, event);
  return elm;
};

export {destroyVM, createVM, createComponent, triggerEvent};