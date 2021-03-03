const state = {
  verifyEmailSentSuccessMsg: "",
  verifyEmailSentErrorMsg: "",
  completeEmailVerificationSuccessMsg: "",
  completeEmailVerificationErrorMsg: "",
  registrationSuccessMsg: "",
  registrationErrorMsg: ""
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
  addCompleteEmailVerificationSuccessMsg(state, payload) {
    state.completeEmailVerificationSuccessMsg = payload;
  },
  addCompleteEmailVerificationErrorMsg(state, payload) {
    state.completeEmailVerificationErrorMsg = payload;
  },
  addRegistrationSuccessMsg(state, payload) {
    state.registrationSuccessMsg = payload;
  },
  addRegistrationErrorMsg(state, payload) {
    state.registrationErrorMsg = payload;
  },
  resetRegistrationErrorMsg(state) {
    state.registrationErrorMsg = "";
  }
};

const actions = {
  SOCKET_send_verify_email_success({ commit }, data) {
    commit("addVerifyEmailSentSuccessMsg", data);
  },
  SOCKET_send_verify_email_error({ commit }, data) {
    commit("addVerifyEmailSentErrorMsg", data);
  },
  SOCKET_complete_email_verification_success({ commit }, data) {
    commit("addCompleteEmailVerificationSuccessMsg", data);
  },
  SOCKET_complete_email_verification_error({ commit }, data) {
    commit("addCompleteEmailVerificationErrorMsg", data);
  },
  SOCKET_registration_success({ commit }, data) {
    commit("addRegistrationSuccessMsg", data);
  },
  SOCKET_registration_error({ commit }, data) {
    commit("addRegistrationErrorMsg", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
