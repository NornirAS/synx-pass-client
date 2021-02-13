const state = {
  resetPasswordSuccess: ""
};

const mutations = {
  resetPasswordSuccess(state, payload) {
    state.resetPasswordSuccess = payload;
  },
  resetState(state) {
    state.resetPasswordSuccess = "";
  }
};

const actions = {
  SOCKET_reset_password_success({ commit }, data) {
    commit("resetState");
    commit("resetPasswordSuccess", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
