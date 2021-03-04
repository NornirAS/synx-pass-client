import Vue from "vue";
import Vuex from "vuex";
import registration from "./modules/registration";
import authModule from "./modules/authentication";
import resetPassword from "./modules/reset-password";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDrawerOnMobile: false,
    isMobile: false
  },
  mutations: {
    isMobile(state, payload) {
      state.isMobile = payload;
    }
  },
  modules: {
    registration,
    authModule,
    resetPassword
  }
});
