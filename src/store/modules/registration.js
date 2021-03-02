const state = {
  verifyEmailSentSuccessMsg: "",
  verifyEmailSentErrorMsg: "",
  successMessage: "",
  errorMessage: ""
};

const mutations = {
  addVerifyEmailSentSuccessMsg(state, payload) {
    state.verifyEmailSentSuccessMsg = payload;
  },
  addVerifyEmailSentErrorMsg(state, payload) {
    state.verifyEmailSentErrorMsg = payload;
  },
  resetVerifyEmailSentErrorMsg(state) {
    state.verifyEmailSentErrorMsg = "";
  },
  successMessage(state, payload) {
    state.successMessage = payload;
  },
  errorMessage(state, payload) {
    state.errorMessage = payload;
  },
  resetErrorMessage(state) {
    state.errorMessage = "";
  }
};

const actions = {
  SOCKET_send_verify_email_success({ commit }, data) {
    commit("addVerifyEmailSentSuccessMsg", data);
  },
  SOCKET_send_verify_email_error({ commit }, data) {
    commit("addVerifyEmailSentErrorMsg", data);
  },
  SOCKET_registration_success({ commit }, data) {
    commit("successMessage", data);
  },
  SOCKET_registration_error({ commit }, data) {
    commit("errorMessage", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
