import router from './router';
import store from './store';
import {
  Message
} from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {
  getToken
} from '@/utils/auth';

NProgress.configure({
  showSpinner: false
}); // 关闭转轮

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, form, next) => {
  NProgress.start();
  document.title = '我跳转了';
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
      NProgress.done();
    } else {
      // 获取角色公共的信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          const {
            roles
          } = await store.dispatch('user/getInfo');

          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          router.addRoutes(accessRoutes);

          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})