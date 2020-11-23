const state = {
  successMessage: "",
  errorMessage: ""
};

const mutations = {
  successMessage(state, payload) {
    state.successMessage = payload;
  },
  errorMessage(state, payload) {
    state.errorMessage = payload;
  }
};

const actions = {
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
