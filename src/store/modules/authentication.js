const state = {
  token: "",
  authenticationError: ""
};

const mutations = {
  authUser(state, { token }) {
    state.token = token;
  },
  resetToken(state) {
    state.token = "";
  },
  authError(state, { error }) {
    state.authenticationError = error;
  },
  resetAuthenticationError(state) {
    state.authenticationError = "";
  }
};

const actions = {
  SOCKET_authentication({ commit }, data) {
    if (data.ActiveToken) {
      commit("authUser", {
        token: data.ActiveToken
      });
    } else {
      commit("authError", {
        error: "Wrong username or password!"
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
