import App from '../../src/App.vue';
import {destroyVM, createComponent, triggerEvent} from '../utils/uiTestUtil.js';

describe('App.vue', () => {
  let vm;
  beforeEach(() => {
    vm = createComponent(App, true);
  });
  afterEach(() => {
    destroyVM(vm);
  });
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent).toContain('Welcome to Your Vue.js App');
    expect(vm.$el.querySelector('button').textContent).toContain('Let\'s do it');
  });
  it('should trigger correct event', (done) => {
    expect(vm.$el.querySelector('.mint-toast-text')).toBe(null);
    triggerEvent(vm.$el.querySelector('button'), 'click');
    setTimeout(() => {
      expect(document.querySelector('.mint-toast-text').textContent).toContain('It Works!');
      done();
    }, 100);
  });
});