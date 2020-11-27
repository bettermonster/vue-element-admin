import {
  constantRoutes, asyncRoutes
} from '@/router';

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
}

const actions = {
  generateRoutes({
    commit
  }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes;
      // includes是es6数组方法
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = [123, 456];
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes);
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}