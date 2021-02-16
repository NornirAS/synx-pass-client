const state = {
  resetPasswordSuccess: "",
  newPasswordSuccess: "",
  newPasswordError: ""
};

const mutations = {
  resetPasswordSuccess(state, payload) {
    state.resetPasswordSuccess = payload;
  },
  newPasswordSuccess(state, payload) {
    state.newPasswordSuccess = payload;
  },
  newPasswordError(state, payload) {
    state.newPasswordError = payload;
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
  },
  SOCKET_new_password_error({ commit }, data) {
    commit("resetState");
    commit("newPasswordError", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
