const state = {
  resetPasswordSuccess: "",
  newPasswordSuccess: ""
};

const mutations = {
  resetPasswordSuccess(state, payload) {
    state.resetPasswordSuccess = payload;
  },
  newPasswordSuccess(state, payload) {
    state.newPasswordSuccess = payload;
  },
  resetState(state) {
    state.resetPasswordSuccess = "";
    state.newPasswordSuccess = "";
  }
};

const actions = {
  SOCKET_reset_password_success({ commit }, data) {
    commit("resetState");
    commit("resetPasswordSuccess", data);
  },
  SOCKET_new_password_success({ commit }, data) {
    commit("resetState");
    commit("newPasswordSuccess", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
