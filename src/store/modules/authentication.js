const state = {
  idToken: "",
  authError: ""
};

const mutations = {
  authUser(state, { token }) {
    state.idToken = token;
  },
  authError(state, { error }) {
    state.authError = error;
  },
  resetError(state) {
    state.authError = "";
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
