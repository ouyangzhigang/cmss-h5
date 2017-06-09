import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },

  {
    path: '/index',
    name: 'index',
    meta: { title: '理赔服销' },
    component: resolve => {
      require.ensure(['../components/index'], () => {
        resolve(require('../components/index'));
      });
    }
  },
  {
    path: '/care',
    name: 'care',
    meta: { title: '关怀首页' },
    component: resolve => {
      require.ensure(['../components/care'], () => {
        resolve(require('../components/care'));
      });
    }
  },
  {
    path: '/wish',
    name: 'wish',
    meta: { title: '送生日祝福' },
    component: resolve => {
      require.ensure(['../components/wish'], () => {
        resolve(require('../components/wish'));
      });
    }
  },
  {
    path: '/img_template',
    name: 'img_template',
    meta: { title: '更多贺卡模板' },
    component: resolve => {
      require.ensure(['../components/img_template'], () => {
        resolve(require('../components/img_template'));
      });
    }
  },
  {
    path: '/txt_template',
    name: 'txt_template',
    meta: { title: '更多文字模板' },
    component: resolve => {
      require.ensure(['../components/txt_template'], () => {
        resolve(require('../components/txt_template'));
      });
    }
  },
  {
    path: '/renewCustomer',
    name: 'renewCustomer',
    meta: { title: '续保客户' },
    component: resolve => {
      require.ensure(['../components/renewCustomer'], () => {
        resolve(require('../components/renewCustomer'));
      });
    }
  },
  {
    path: '/delCustomer',
    name: 'delCustomer',
    meta: { title: '删除客户' },
    component: resolve => {
      require.ensure(['../components/delCustomer'], () => {
        resolve(require('../components/delCustomer'));
      });
    }
  },
  {
    path: '/noProCustomer',
    name: 'noProCustomer',
    meta: { title: '未转保客户' },
    component: resolve => {
      require.ensure(['../components/noProCustomer'], () => {
        resolve(require('../components/noProCustomer'));
      });
    }
  },
  {
    path: '/addTips',
    name: 'addTips',
    meta: { title: '新增提醒' },
    component: resolve => {
      require.ensure(['../components/addTips'], () => {
        resolve(require('../components/addTips'));
      });
    }
  },
  {
    path: '/newTips',
    name: 'newTips',
    meta: { title: '新增提醒' },
    component: resolve => {
      require.ensure(['../components/newTips'], () => {
        resolve(require('../components/newTips'));
      });
    }
  },
  {
    path: '/myTips',
    name: 'myTips',
    meta: { title: '我的提醒' },
    component: resolve => {
      require.ensure(['../components/myTips'], () => {
        resolve(require('../components/myTips'));
      });
    }
  },
  {
    path: '/addCarInfo',
    name: 'addCarInfo',
    meta: { title: '新增车辆信息' },
    component: resolve => {
      require.ensure(['../components/addCarInfo'], () => {
        resolve(require('../components/addCarInfo'));
      });
    }
  },
  {
    path: '/baike',
    name: 'baike',
    meta: { title: '百科' },
    component: resolve => {
      require.ensure(['../components/baike'], () => {
        resolve(require('../components/baike'));
      });
    }
  },
  {
    path: '/baikeInfo/:id',
    name: 'baikeInfo',
    meta: { title: '百科' },
    component: resolve => {
      require.ensure(['../components/baikeInfo'], () => {
        resolve(require('../components/baikeInfo'));
      });
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const title = document.title;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = title;
  }
  if (to.matched.length === 0) {
    next('/');
  } else {
    next();
  }
});

export default router;
