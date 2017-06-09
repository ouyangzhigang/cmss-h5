import Vue from 'vue';
import VueRouter from 'vue-router';
import {MessageBox} from 'mint-ui';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: resolve => {
      require.ensure(['../components/home'], () => {
        resolve(require('../components/home'));
      }, 'home');
    }
  },
  {
    path: '/tips',
    name: 'tips',
    meta: {
      title: '意外险在线自助理赔'
    },
    component: resolve => {
      require.ensure(['../components/tips'], () => {
        resolve(require('../components/tips'));
      }, 'tips');
    }
  },
  {
    path: '/pInfo',
    name: 'pInfo',
    meta: {
      title: '在线理赔——个人信息'
    },
    component: resolve => {
      require.ensure(['../components/personalInfo'], () => {
        resolve(require('../components/personalInfo'));
      }, 'pInfo');
    }
  },
  {
    path: '/caseInfo',
    name: 'caseInfo',
    meta: {
      title: '在线理赔——报案'
    },
    component: resolve => {
      require.ensure(['../components/caseInfo'], () => {
        resolve(require('../components/caseInfo'));
      }, 'caseInfo');
    }
  },
  {
    path: '/bankInfo',
    name: 'bankInfo',
    meta: {
      title: '在线理赔——个人信息'
    },
    component: resolve => {
      require.ensure(['../components/bankInfo'], () => {
        resolve(require('../components/bankInfo'));
      }, 'bankInfo');
    }
  },
  {
    path: '/post/:type',
    name: 'post',
    meta: {
      title: '在线理赔——单证上传'
    },
    component: resolve => {
      require.ensure(['../components/post'], () => {
        resolve(require('../components/post'));
      }, 'post');
    }
  },
  {
    path: '/applyResult/:result',
    name: 'applyResult',
    meta: {
      title: '申请'
    },
    component: resolve => {
      require.ensure(['../components/applyResult'], () => {
        resolve(require('../components/applyResult'));
      }, 'applyResult');
    }
  },
  {
    path: '/searchReportNo',
    name: 'searchReportNo',
    meta: {
      title: '补传单证'
    },
    component: resolve => {
      require.ensure(['../components/searchReportNo'], () => {
        resolve(require('../components/searchReportNo'));
      }, 'searchReportNo');
    }
  },
  {
    path: '/modifyCaseInfo',
    name: 'modifyCaseInfo',
    meta: {
      title: '信息确认'
    },
    component: resolve => {
      require.ensure(['../components/modifyCaseInfo'], () => {
        resolve(require('../components/modifyCaseInfo'));
      }, 'modifyCaseInfo');
    }
  },
  {
    path: '/claimRecord',
    name: 'claimRecord',
    meta: {
      title: '理赔记录'
    },
    component: resolve => {
      require.ensure(['../components/claimRecord'], () => {
        resolve(require('../components/claimRecord'));
      }, 'claimRecord');
    }
  },
  {
    path: '/caseProgress/:id',
    name: 'caseProgress',
    meta: {
      title: '案件进度'
    },
    component: resolve => {
      require.ensure(['../components/caseProgress'], () => {
        resolve(require('../components/caseProgress'));
      }, 'caseProgress');
    }
  },
  {
    path: '/salesSearch',
    name: 'salesSearch',
    meta: {
      title: '客服门店'
    },
    component: resolve => {
      require.ensure(['../components/salesSearch'], () => {
        resolve(require('../components/salesSearch'));
      }, 'salesSearch');
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const title = document.title;

router.beforeEach((to, from, next) => {
  MessageBox.close();
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = title;
  }
  if (!to.matched.length) {
    next('/');
  } else {
    next();
  }
});

export default router;
