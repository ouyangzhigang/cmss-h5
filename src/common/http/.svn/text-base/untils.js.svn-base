import {Common} from '../untils';

require('./untils.css');

let indicatorHtml = `<div class="pa-indicator">
<div class="pa-indicator-wrapper">
<span class="pa-indicator-spin">
<div class="pa-spinner-snake"></div>
</span>
</div>
<div class="pa-indicator-mask"></div>
</div>`;

let messageHtml = `<div class="pa-msgbox-wrapper">
<div class="pa-msgbox">
<div class="pa-msgbox-header">
<div class="pa-msgbox-title"></div>
</div>
<div class="pa-msgbox-content">
<div class="pa-msgbox-message" ></div>
</div>
<div class="pa-msgbox-btns">
<button type="button" class="pa-msgbox-btn">确定</button>
</div>
</div>
</div>
<div class="mark-layer"></div>`;

// loading
class ClassIndicator {
  constructor() {
    this.visible = false;
    this.$el = null;
    this.instance = false;
  }

  open = function() {
    if (!this.instance) {
      this.$el = document.createElement('div');
      this.$el.innerHTML = indicatorHtml;
      document.body.appendChild(this.$el);
      this.instance = true;
    }
    if (!this.visible) {
      this.$el.style.display = 'block';
      this.visible = true;
    }
  }

  close = function() {
    if (this.visible) {
      this.$el.style.display = 'none';
      this.visible = false;
    }
  }
}

class ClassMessageBox {
  constructor() {
    this.instance = false;
    this.$el = null;
    this.$title = null;
    this.$message = null;
    this.queue = [];
    this.options = {
      title: '',
      message: '',
      closeOnClickModal: true
    };
    this.visible = false;
  }

  init() {
    this.$el = document.createElement('div');
    this.$el.innerHTML = messageHtml;
    document.body.appendChild(this.$el);

    this.$el.querySelector('.pa-msgbox-btn').addEventListener('click', this.btnClick.bind(this));
    this.$el.querySelector('.mark-layer').addEventListener('click', this.layerClick.bind(this));
    this.$title = this.$el.querySelector('.pa-msgbox-title');
    this.$message = this.$el.querySelector('.pa-msgbox-message');
    this.instance = true;
  }

  btnClick() {
    let tmp = this.close();
    if (tmp) {
      tmp.resolve('confirm');
    }
  }

  layerClick() {
    if (this.queue[this.queue.length - 1].closeOnClickModal) {
      let tmp = this.close();
      if (tmp) {
        tmp.resolve('cancel');
      }
    }
  }

  open(opt) {
    if (!this.instance) {
      this.init();
    }
    let options = Common.merge(this.options, opt);
    this.queue.push(options);
    this.show();
    return new Promise((resolve, reject) => {
      this.queue[this.queue.length - 1].resolve = resolve;
      this.queue[this.queue.length - 1].reject = reject;
    });
  }

  show() {
    if (this.queue.length > 0) {
      this.$title.innerText = this.queue[this.queue.length - 1].title;
      this.$message.innerText = this.queue[this.queue.length - 1].message;
      this.$el.style.display = 'block';
    }
  }

  close() {
    if (this.instance) {
      let tmp = this.queue.pop();
      if (this.queue.length === 0) {
        this.$el.style.display = 'none';
        this.$title.innerText = '';
        this.$message.innerText = '';
      } else {
        this.$title.innerText = this.queue[this.queue.length - 1].title;
        this.$message.innerText = this.queue[this.queue.length - 1].message;
      }
      return tmp;
    }
  }
}

const Indicator = new ClassIndicator();

const MessageBoxInstance = new ClassMessageBox();

const MessageBox = MessageBoxInstance.open.bind(MessageBoxInstance);

export {
  Indicator,
  MessageBox
};
