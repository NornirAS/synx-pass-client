import Vue from "vue";
import Vuex from "vuex";
import registrationModule from "./modules/registration";

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
    registrationModule
  }
});
